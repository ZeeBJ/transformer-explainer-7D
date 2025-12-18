// Internationalization utilities
import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';

export type Language = 'zh' | 'en';

// Language store
export const language: Writable<Language> = writable<Language>('zh');

// Translation data
import zhTranslations from '../locales/zh.json';
import enTranslations from '../locales/en.json';

const translations = {
	zh: zhTranslations,
	en: enTranslations
};

// Helper function to get store value
function get<T>(store: Writable<T>): T {
	let value: T;
	const unsubscribe = store.subscribe((v) => {
		value = v;
	});
	unsubscribe();
	return value!;
}

// Translation function (non-reactive, for use outside components)
export function t(key: string, params?: Record<string, string | number>): string {
	const currentLang = get(language);
	return translate(key, currentLang, params);
}

// Translation store (reactive, for use in components)
export const languageStore = derived(language, ($lang) => {
	return (key: string, params?: Record<string, string | number>): string => {
		return translate(key, $lang, params);
	};
});

// Internal translation function
function translate(
	key: string,
	lang: Language,
	params?: Record<string, string | number>
): string {
	const keys = key.split('.');
	let value: any = translations[lang];
	
	for (const k of keys) {
		value = value?.[k];
	}
	
	if (value === undefined) {
		// Fallback to English if translation not found
		value = translations.en;
		for (const k of keys) {
			value = value?.[k];
		}
	}
	
	if (typeof value !== 'string') {
		console.warn(`Translation missing for key: ${key}`);
		return key;
	}
	
	// Replace parameters
	if (params) {
		return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
			return params[paramKey]?.toString() || match;
		});
	}
	
	return value;
}

// Helper to get current language
export function getCurrentLanguage(): Language {
	return get(language);
}

