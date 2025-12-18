<script>
	import tailwindConfig from '../../../tailwind.config';
	import resolveConfig from 'tailwindcss/resolveConfig';
	import Katex from '~/utils/Katex.svelte';
	import { languageStore } from '~/utils/i18n';
	
	$: t = $languageStore;
</script>

<div id="description">
	<div class="article-section" data-click="article-intro">
		<h1>{t('article.whatIsTransformer.title')}</h1>

		<p>
			{@html t('article.whatIsTransformer.intro')}
			<a
				href="https://dl.acm.org/doi/10.5555/3295222.3295349"
				title={t('article.whatIsTransformer.paperTitle')}
				target="_blank">{t('article.whatIsTransformer.paperLink')}</a
			>
			{@html t('article.whatIsTransformer.intro2')}
			<strong>GPT</strong>, Meta's <strong>Llama</strong>, and Google's
			<strong>Gemini</strong>. {@html t('article.whatIsTransformer.intro3')}
			<a
				href="https://huggingface.co/learn/audio-course/en/chapter3/introduction"
				title="Hugging Face"
				target="_blank">{t('article.whatIsTransformer.audioGeneration')}</a
			>,
			<a
				href="https://huggingface.co/learn/computer-vision-course/unit3/vision-transformers/vision-transformers-for-image-classification"
				title="Hugging Face"
				target="_blank">{t('article.whatIsTransformer.imageRecognition')}</a
			>,
			<a href="https://elifesciences.org/articles/82819" title="eLife"
				>{t('article.whatIsTransformer.proteinPrediction')}</a
			>, {@html t('article.whatIsTransformer.intro4')}
			<a
				href="https://www.deeplearning.ai/the-batch/reinforcement-learning-plus-transformers-equals-efficiency/"
				title="Deep Learning AI"
				target="_blank">{t('article.whatIsTransformer.gamePlaying')}</a
			>, {@html t('article.whatIsTransformer.intro4')}
		</p>
		<p>
			{@html t('article.whatIsTransformer.principle')} <strong
				>{t('article.whatIsTransformer.nextWordPrediction')}</strong
			>{@html t('article.whatIsTransformer.principle2')} <em>{t('article.whatIsTransformer.mostProbable')}</em>{@html t('article.whatIsTransformer.principle3')}
		</p>
		<p>
			{@html t('article.whatIsTransformer.gpt2Intro')}
			<a href="https://huggingface.co/openai-community/gpt2" title={t('article.whatIsTransformer.gpt2Title')} target="_blank"
				>{t('article.whatIsTransformer.gpt2Link')}</a
			>
			{@html t('article.whatIsTransformer.gpt2Intro2')}
		</p>
	</div>

	<div class="article-section" data-click="article-overview">
		<h1>{t('article.transformerArchitecture.title')}</h1>

		<p>
			{@html t('article.transformerArchitecture.intro')} <strong>{t('article.transformerArchitecture.threeComponents')}</strong>:
		</p>
		<ol>
			<li>
				<strong class="bold-purple">{t('article.transformerArchitecture.embeddingTitle')}</strong>: {@html t('article.transformerArchitecture.embeddingDesc')}
			</li>
			<li>
				<strong class="bold-purple">{t('article.transformerArchitecture.blockTitle')}</strong> {@html t('article.transformerArchitecture.blockDesc')}
				<ul class="">
					<li>
						<strong>{t('article.transformerArchitecture.attentionTitle')}</strong>, {@html t('article.transformerArchitecture.attentionDesc')}
					</li>
					<li>
						<strong>{t('article.transformerArchitecture.mlpTitle')}</strong>, {@html t('article.transformerArchitecture.mlpDesc')}
					</li>
				</ul>
			</li>
			<li>
				<strong class="bold-purple">{t('article.transformerArchitecture.outputTitle')}</strong>: {@html t('article.transformerArchitecture.outputDesc')}
			</li>
		</ol>
	</div>

	<div class="article-section" id="embedding" data-click="article-embedding">
		<h2>{t('article.embedding.title')}</h2>
		<p>
			{@html t('article.embedding.intro')} <code>{t('article.embedding.exampleCode')}</code>. {@html t('article.embedding.intro2')}
		</p>
		<div class="figure">
			<img src="./article_assets/embedding.png" width="65%" />
		</div>
		<div class="figure-caption">
			{t('article.embedding.figure1')} <span class="attention">1</span>. {@html t('article.embedding.figure1Desc')}
			<span class="fig-numbering">{t('article.embedding.step1')}</span> {t('article.embedding.step1Name')} {t('article.embedding.step2')} {t('article.embedding.step2Name')} {t('article.embedding.step3')} {t('article.embedding.step3Name')}
			{t('article.embedding.step4')} {t('article.embedding.step4Name')}
		</div>
		<div class="article-subsection">
			<h3>{t('article.embedding.tokenizationTitle')}</h3>
			<p>
				{@html t('article.embedding.tokenizationDesc')} <code>{t('article.embedding.tokenizationCode1')}</code>
				{@html t('article.embedding.tokenizationDesc2')} <code>{t('article.embedding.tokenizationCode2')}</code>
				{@html t('article.embedding.tokenizationDesc3')} <code>{t('article.embedding.tokenizationCode3')}</code>
				{@html t('article.embedding.tokenizationDesc4')} <code>{t('article.embedding.tokenizationCode4')}</code>
				{@html t('article.embedding.tokenizationDesc5')}
			</p>
		</div>
		<div class="article-subsection" id="article-token-embedding">
			<h3>{t('article.embedding.tokenEmbeddingTitle')}</h3>
			<p>
				{@html t('article.embedding.tokenEmbeddingDesc')} <code>{t('article.embedding.tokenEmbeddingCode')}</code>
				{@html t('article.embedding.tokenEmbeddingDesc2')}
			</p>
		</div>
		<div class="article-subsection" id="article-positional-embedding">
			<h3>{t('article.embedding.positionalEncodingTitle')}</h3>
			<p>
				{@html t('article.embedding.positionalEncodingDesc')}
			</p>

			<!-- <div class="article-subsection-l2">
	<h4>Alternative Positional Encoding Approach <strong class='attention'>[POTENTIALLY COLLAPSIBLE]</strong></h4>
	<p>
	  Other models, like the original Transformer and BERT,
	  use sinusoidal functions for positional encoding.

	  This sinusoidal encoding is deterministic and designed to reflect
	  the absolute as well as the relative position of each token.
	</p>
	<p>
	  Each position in a sequence is assigned a unique mathematical
	  representation using a combination of sine and cosine functions.

	  For a given position, the sine function represents even dimensions,
	  and the cosine function represents odd dimensions within the positional encoding vector.

	  This periodic nature ensures that each position has a consistent encoding,
	  independent of the surrounding context.
	</p>

	<p>
	  Here’s how it works:
	</p>

	<span class='attention'>
	  SINUSOIDAL POSITIONAL ENCODING EQUATION
	</span>

	<ul>
	  <li>
		<strong>Sine Function</strong>: Used for even indices of the embedding vector.
	  </li>
	  <li>
		<strong>Cosine Function</strong>: Used for odd indices of the embedding vector.
	</ul>

	<p>
	  Hover over individual encoding values in the matrix above to
	  see how it's calculated using the sins and cosine functions.
	</p>
  </div> -->
		</div>
		<div class="article-subsection">
			<h3>{t('article.embedding.finalEmbeddingTitle')}</h3>
			<p>
				{@html t('article.embedding.finalEmbeddingDesc')}
			</p>
		</div>
	</div>

	<div class="article-section" data-click="article-transformer-block">
		<h2>{t('article.transformerBlock.title')}</h2>

		<p>
			{@html t('article.transformerBlock.intro')} <code>{t('article.transformerBlock.blockCount')}</code>
			{@html t('article.transformerBlock.intro2')}
		</p>
	</div>

	<div class="article-section" id="self-attention" data-click="article-attention">
		<h3>{t('article.selfAttention.title')}</h3>
		<p>
			{@html t('article.selfAttention.intro')}
		</p>
		<div class="article-subsection-l2">
			<h4>{t('article.selfAttention.qkvTitle')}</h4>

			<div class="figure pt-10">
				<img src="./article_assets/QKV.png" width="80%" />
				<div class="text-xs">
					<Katex
						displayMode
						math={`
		QKV_{ij} = ( \\sum_{d=1}^{768} \\text{Embedding}_{i,d} \\cdot \\text{Weights}_{d,j}) + \\text{Bias}_j
		`}
					/>
				</div>
			</div>
			<div class="figure-caption">
				{t('article.selfAttention.figure2')} <span class="attention">2</span>. {@html t('article.selfAttention.figure2Desc')}
			</div>

			<p>
				{@html t('article.selfAttention.qkvDesc')}
				<span class="q-color">{t('article.selfAttention.query')}</span>,
				<span class="k-color">{t('article.selfAttention.key')}</span>, {@html t('article.selfAttention.qkvDesc2')}
				<span class="q-color">Q</span>,
				<span class="k-color">K</span>, {@html t('article.selfAttention.qkvDesc3')}
			</p>
			<ul>
				<li>
					<strong class="q-color font-medium">{t('article.selfAttention.query')}</strong> {@html t('article.selfAttention.queryDesc')}
					<em>{t('article.selfAttention.findInfo')}</em>.
				</li>
				<li>
					<strong class="k-color font-medium">{t('article.selfAttention.key')}</strong> {@html t('article.selfAttention.keyDesc')}
				</li>
				<li>
					<strong class="v-color font-medium">{t('article.selfAttention.value')}</strong> {@html t('article.selfAttention.valueDesc')}
				</li>
			</ul>
			<p>
				{@html t('article.selfAttention.qkvDesc4')}
			</p>
		</div>
		<div class="article-subsection-l2">
			<h4>{t('article.selfAttention.multiHeadTitle')}</h4>
			<p>
				<span class="q-color">{t('article.selfAttention.query')}</span>, <span class="k-color">{t('article.selfAttention.key')}</span>, {@html t('article.selfAttention.multiHeadDesc')}
				<code>{t('article.selfAttention.multiHeadCount')}</code>
				{@html t('article.selfAttention.multiHeadDesc2')}
			</p>
		</div>
		<div class="article-subsection-l2">
			<h4>{t('article.selfAttention.maskedTitle')}</h4>
			<p>
				{@html t('article.selfAttention.maskedDesc')}
			</p>

			<div class="figure">
				<img src="./article_assets/attention.png" width="80%" align="middle" />
			</div>
			<div class="figure-caption">
				{t('article.selfAttention.figure3')} <span class="attention">3</span>. {@html t('article.selfAttention.figure3Desc')}
			</div>

			<ul>
				<li>
					<strong>{t('article.selfAttention.attentionScore')}</strong>: {t('article.selfAttention.attentionScoreDesc')}
					<span class="q-color">{t('article.selfAttention.query')}</span>
					{t('article.selfAttention.attentionScoreDesc2')} <span class="k-color">{t('article.selfAttention.key')}</span> {t('article.selfAttention.attentionScoreDesc3')}
				</li>
				<li>
					<strong>{t('article.selfAttention.masking')}</strong>: {@html t('article.selfAttention.maskingDesc')}
				</li>
				<li>
					<strong>{t('article.selfAttention.softmax')}</strong>: {@html t('article.selfAttention.softmaxDesc')}
				</li>
			</ul>
		</div>
		<div class="article-subsection-l2">
			<h4>{t('article.selfAttention.outputTitle')}</h4>
			<p>
				{@html t('article.selfAttention.outputDesc')}
				<span class="v-color">{t('article.selfAttention.value')}</span>
				{@html t('article.selfAttention.outputDesc2')}
				<span class="purple-color">{t('article.selfAttention.finalOutput')}</span>
				{@html t('article.selfAttention.outputDesc3')}
				<code>{t('article.selfAttention.outputCount')}</code>
				{@html t('article.selfAttention.outputDesc4')}
			</p>
		</div>
	</div>

	<div class="article-section" id="article-activation" data-click="article-mlp">
		<h3>{t('article.mlp.title')}</h3>

		<div class="figure">
			<img src="./article_assets/mlp.png" width="70%" align="middle" />
		</div>
		<div class="figure-caption">
			{t('article.mlp.figure4')} <span class="attention">4</span>. {@html t('article.mlp.figure4Desc')}
		</div>

		<p>
			{@html t('article.mlp.intro')} <code>{t('article.mlp.dim1')}</code>
			{@html t('article.mlp.intro2')} <code>{t('article.mlp.dim2')}</code>. {@html t('article.mlp.intro3')}
			<code>{t('article.mlp.dim3')}</code>,
			{@html t('article.mlp.intro4')}
		</p>
	</div>

	<div class="article-section" id="article-prob" data-click="article-prob">
		<h2>{t('article.outputProbabilities.title')}</h2>
		<p>
			{@html t('article.outputProbabilities.intro')} <code>{t('article.outputProbabilities.vocabSize')}</code>
			{@html t('article.outputProbabilities.intro2')} <code>{t('article.outputProbabilities.logit')}</code>. {@html t('article.outputProbabilities.intro3')}
		</p>

		<div class="figure py-5">
			<img src="./article_assets/softmax.png" width="70%" />
		</div>
		<div class="figure-caption">
			Figure <span class="attention">5</span>. Each token in the vocabulary is assigned a
			probability based on the model's output logits. These probabilities determine the likelihood
			of each token being the next word in the sequence.
		</div>

		<p id="article-temperature" data-click="article-temperature">
			{@html t('article.outputProbabilities.temperatureIntro')} <code>{t('article.outputProbabilities.temperatureParam')}</code> {@html t('article.outputProbabilities.temperatureIntro2')}
			<code>{t('article.outputProbabilities.temperatureParam')}</code>:
		</p>

		<ul>
			<li>
				<code>{t('article.outputProbabilities.temperature1')}</code>{@html t('article.outputProbabilities.temperature1Desc')}
			</li>
			<li>
				<code>{t('article.outputProbabilities.temperature2')}</code>{@html t('article.outputProbabilities.temperature2Desc')}
			</li>
			<li>
				<code>{t('article.outputProbabilities.temperature3')}</code>{@html t('article.outputProbabilities.temperature3Desc')} <em>{t('article.outputProbabilities.creativity')}</em>.
			</li>
		</ul>

		<p id="article-sampling" data-click="article-sampling">
			{@html t('article.outputProbabilities.samplingIntro')} <code>{t('article.outputProbabilities.topK')}</code>
			{t('article.outputProbabilities.samplingIntro2')}
			<code>{t('article.outputProbabilities.topP')}</code> {t('article.outputProbabilities.samplingIntro3')}
		</p>
		<ul>
			<li>
				<code>{t('article.outputProbabilities.topKSampling')}</code>{@html t('article.outputProbabilities.topKSamplingDesc')}
			</li>
			<li>
				<code>{t('article.outputProbabilities.topPSampling')}</code>{@html t('article.outputProbabilities.topPSamplingDesc')}
			</li>
		</ul>
		<p>
			{@html t('article.outputProbabilities.tuning')} <code>{t('article.outputProbabilities.temperatureParam')}</code>, <code>{t('article.outputProbabilities.topK')}</code>,
			{t('article.outputProbabilities.tuning2')} <code>{t('article.outputProbabilities.topP')}</code>, {t('article.outputProbabilities.tuning3')}
		</p>
	</div>

	<div class="article-section" data-click="article-advanced-features">
		<h2>{t('article.advancedFeatures.title')}</h2>

		<p>
			{@html t('article.advancedFeatures.intro')}
		</p>
		<div class="article-subsection" id="article-ln">
			<h3>{t('article.advancedFeatures.layerNormTitle')}</h3>

			<p>
				{@html t('article.advancedFeatures.layerNormDesc')}
			</p>
		</div>
		<div class="article-subsection" id="article-dropout">
			<h3>{t('article.advancedFeatures.dropoutTitle')}</h3>

			<p>
				{@html t('article.advancedFeatures.dropoutDesc')}
			</p>
		</div>
		<div class="article-subsection" id="article-residual">
			<h3>{t('article.advancedFeatures.residualTitle')}</h3>

			<p>
				{@html t('article.advancedFeatures.residualDesc')}
			</p>
		</div>
	</div>

	<div class="article-section" data-click="article-interactive-features">
		<h1>{t('article.interactiveFeatures.title')}</h1>
		<p>
			{@html t('article.interactiveFeatures.intro')}
		</p>

		<ul>
			<li>
				<strong>{t('article.interactiveFeatures.feature1')}</strong> {@html t('article.interactiveFeatures.feature1Desc')}
			</li>
			<li>
				<strong>{t('article.interactiveFeatures.feature2')}</strong> {@html t('article.interactiveFeatures.feature2Desc')}
			</li>
			<li>
				<strong>{t('article.interactiveFeatures.feature3')}</strong> {@html t('article.interactiveFeatures.feature3Desc')}
			</li>
			<li>
				<strong>{t('article.interactiveFeatures.feature4')}</strong> {@html t('article.interactiveFeatures.feature4Desc')}
			</li>
		</ul>
	</div>

	<div class="article-section" data-click="article-video">
		<h2>{t('article.videoTutorial.title')}</h2>
		<div class="video-container">
			<iframe
				src="https://www.youtube.com/embed/ECR4oAwocjs"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			>
			</iframe>
		</div>
	</div>

	<div class="article-section" data-click="article-implementation">
		<h2>{t('article.implementation.title')}</h2>
		<p>
			{@html t('article.implementation.intro')}
			<a href="https://github.com/karpathy/nanoGPT" title={t('article.implementation.nanoGPTTitle')} target="_blank"
				>{t('article.implementation.nanoGPT')}</a
			>
			{@html t('article.implementation.intro2')}
			<a href="https://onnxruntime.ai/" title={t('article.implementation.onnxTitle')} target="_blank">{t('article.implementation.onnx')}</a>
			{@html t('article.implementation.intro3')}
			<a href="https://kit.svelte.dev/" title={t('article.implementation.svelteTitle')} target="_blank">{t('article.implementation.svelte')}</a>
			{@html t('article.implementation.intro4')}
			<a href="https://d3js.org/" title={t('article.implementation.d3Title')} target="_blank">{t('article.implementation.d3')}</a>
			{@html t('article.implementation.intro5')}
		</p>
	</div>

	<div class="article-section" data-click="article-credit">
		<h2>{t('article.credits.title')}</h2>
		<p>
			{@html t('article.credits.intro')}

			<a href="https://aereeeee.github.io/" target="_blank">Aeree Cho</a>,
			<a href="https://www.linkedin.com/in/chaeyeonggracekim/" target="_blank">Grace C. Kim</a>,
			<a href="https://alexkarpekov.com/" target="_blank">Alexander Karpekov</a>,
			<a href="https://alechelbling.com/" target="_blank">Alec Helbling</a>,
			<a href="https://zijie.wang/" target="_blank">Jay Wang</a>,
			<a href="https://seongmin.xyz/" target="_blank">Seongmin Lee</a>,
			<a href="https://bhoov.com/" target="_blank">Benjamin Hoover</a>, {@html t('article.credits.at')}
			<a href="https://poloclub.github.io/polochau/" target="_blank">Polo Chau</a>

			{@html t('article.credits.at')}
		</p>
	</div>
</div>

<style lang="scss">
	a {
		color: theme('colors.blue.500');

		&:hover {
			color: theme('colors.blue.700');
		}
	}

	.bold-purple {
		color: theme('colors.purple.700');
		font-weight: bold;
	}

	code {
		color: theme('colors.gray.500');
		background-color: theme('colors.gray.50');
		font-family: theme('fontFamily.mono');
	}

	.q-color {
		color: theme('colors.blue.400');
	}

	.k-color {
		color: theme('colors.red.400');
	}

	.v-color {
		color: theme('colors.green.400');
	}

	.purple-color {
		color: theme('colors.purple.500');
	}

	.article-section {
		padding-bottom: 2rem;
	}
	.architecture-section {
		padding-top: 1rem;
	}
	.video-container {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
		max-width: 100%;
		background: #000;
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	#description {
		padding-bottom: 3rem;
		margin-left: auto;
		margin-right: auto;
		max-width: 78ch;
	}

	#description h1 {
		color: theme('colors.purple.700');
		font-size: 2.2rem;
		font-weight: 300;
		padding-top: 1rem;
	}

	#description h2 {
		// color: #444;
		color: theme('colors.purple.700');
		font-size: 2rem;
		font-weight: 300;
		padding-top: 1rem;
	}

	#description h3 {
		color: theme('colors.gray.700');
		font-size: 1.6rem;
		font-weight: 200;
		padding-top: 1rem;
	}

	#description h4 {
		color: theme('colors.gray.700');
		font-size: 1.6rem;
		font-weight: 200;
		padding-top: 1rem;
	}

	#description p {
		margin: 1rem 0;
	}

	#description p img {
		vertical-align: middle;
	}

	#description .figure-caption {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		text-align: center;
		margin-bottom: 2rem;
	}

	#description ol {
		margin-left: 3rem;
		list-style-type: decimal;
	}

	#description li {
		margin: 0.6rem 0;
	}

	#description p,
	#description div,
	#description li {
		color: theme('colors.gray.600');
		line-height: 1.6;
	}

	#description small {
		font-size: 0.8rem;
	}

	#description ol li img {
		vertical-align: middle;
	}

	#description .video-link {
		color: theme('colors.blue.600');
		cursor: pointer;
		font-weight: normal;
		text-decoration: none;
	}

	#description ul {
		list-style-type: disc;
		margin-left: 2.5rem;
		margin-bottom: 1rem;
	}

	#description a:hover,
	#description .video-link:hover {
		text-decoration: underline;
	}

	.figure,
	.video {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
