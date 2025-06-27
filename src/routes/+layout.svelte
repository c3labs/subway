<script lang="ts">
	import '@fontsource/anta';
	import '@fontsource/titillium-web/200.css';
	import '@fontsource/titillium-web/300.css';
	import '@fontsource/titillium-web/400.css';
	import '@fontsource/titillium-web/600.css';
	import '@fontsource/titillium-web/700.css';
	// import '@fontsource/titillium-web/900.css';

	import logo from '$lib/assets/images/logo/subway.logo.v01.svg?raw';

	import Header from './Header.svelte';

	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { uiobserver } from '$lib/uiobserver.svelte';
	import '../app.css';

	let { children } = $props();
	let countdown = $state(10);
	let timerId = $state(0);

	$effect(() => {
		if(countdown === 0) {
			if (timerId) {
				clearInterval(timerId);
				timerId = 0;
				console.log(timerId);
			}
		}
	});

	onMount(() => {
		timerId = setInterval(() => {
			countdown -= 1;
		}, 250);
		console.log(timerId);
	});

	afterNavigate(({ from }) => {
		uiobserver.initiator = from === null ? false : true;
	});

</script>


<Header />

<main>
	{#if !uiobserver.initiator && countdown > 0 }
		<div class="flex flex-col items-center bottom-0 justify-center left-0 right-0 fixed top-0 z-[100] h-screen w-full bg-neutral-900" out:fade={{ duration: 500 }}>
			<div class="w-[45vw] md:w-[35vw] lg:w-[25vw]">
				{@html logo}
			</div>
			<div class="text-white">
					<div class="flex justify-start items-center">
    					<div class="flex-1 p-0.5 rounded border shadow-inner border-neutral-950 bg-neutral-800 w-48 lg:w-2xs">
        					<div class="[min-width:4px] h-2 rounded bg-neutral-900 transition-all" style="width: {10 * (11-countdown)}%"></div>
						</div>
					</div>
			</div>
		</div>
	{/if}
	{#if countdown < 1 }
		{@render children()}
	{/if}
</main>

<footer>
	<p>
		visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
	</p>
</footer>

