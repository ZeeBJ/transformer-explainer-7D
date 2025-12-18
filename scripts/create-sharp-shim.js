// Script to create sharp shim files for SSR
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const sharpShimPath = join(
	rootDir,
	'node_modules/@xenova/transformers/node_modules/sharp'
);

const shimContent = `// Shim for sharp module - returns empty object for SSR
// Support both CommonJS and ES modules
export default {};
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {};
}
`;

try {
	// Create directories if they don't exist
	mkdirSync(join(sharpShimPath, 'lib'), { recursive: true });

	// Create shim files
	writeFileSync(join(sharpShimPath, 'index.js'), shimContent);
	writeFileSync(join(sharpShimPath, 'lib/index.js'), shimContent);
	writeFileSync(join(sharpShimPath, 'lib/sharp.js'), shimContent);
	writeFileSync(join(sharpShimPath, 'lib/constructor.js'), shimContent);

	console.log('✓ Created sharp shim files for SSR');
} catch (error) {
	// Ignore errors if sharp doesn't exist (it's optional)
	if (error.code !== 'ENOENT') {
		console.warn('Warning: Could not create sharp shim:', error.message);
	}
}

