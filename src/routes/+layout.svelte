<script lang="ts">
	import '@fontsource/anta';
	import '@fontsource/titillium-web/200.css';
	import '@fontsource/titillium-web/300.css';
	import '@fontsource/titillium-web/400.css';
	import '@fontsource/titillium-web/600.css';
	import '@fontsource/titillium-web/700.css';
	// import '@fontsource/titillium-web/900.css';

	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();

</script>


<Header />

<main>
	{@render children()}
</main>

<footer>
	<p>
		visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
	</p>
</footer>

