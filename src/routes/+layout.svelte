<script lang="ts">
	import '@fontsource/anta';
	import '@fontsource/titillium-web/200.css';
	import '@fontsource/titillium-web/300.css';
	import '@fontsource/titillium-web/400.css';
	import '@fontsource/titillium-web/600.css';
	import '@fontsource/titillium-web/700.css';
	// import '@fontsource/titillium-web/900.css';

	import Header from './Header.svelte';

	// import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { uiobserver } from '$lib/uiobserver.svelte';
	import '../app.css';

	let { children } = $props();

	afterNavigate(({ from }) => {
		// show this fukkin initiator thingy only on first page visit!!
		uiobserver.initiator = from === null ? false : true;
		// console.log(initiator);
	});

</script>


<Header />

<main>
	{#if !uiobserver.initiator }
		<div in:fade out:fade class="absolute z-[100] h-screen w-full bg-red-900/10"></div>
	{/if}
	{@render children()}
</main>

<footer>
	<p>
		visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
	</p>
</footer>

