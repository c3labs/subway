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

	// import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { uiobserver } from '$lib/uiobserver.svelte';
	import '../app.css';

	let { children } = $props();
	let countdown = $state(25);
	let timer = $state(0);

	$effect(() => {
		if(countdown === 0) {
			if (timer) {
				clearInterval(timer);
				timer = 0;
				console.log(timer);
			}
		}
	});

	onMount(() => {
		timer = setInterval(() => {
			countdown -= 1;
		}, 100);
		console.log(timer);
	});

	afterNavigate(({ from }) => {
		// show this fukkin initiator thingy only on first page visit!!
		uiobserver.initiator = from === null ? false : true;
		// console.log(initiator);
	});

</script>


<Header />

<main>
	{#if !uiobserver.initiator && countdown > 0 }
		<div class="flex flex-col items-center bottom-0 justify-center left-0 right-0 fixed top-0 z-[100] h-screen w-full bg-neutral-900" out:fade={{ duration: 500 }}>
			<div class="w-[25vw]">
				{@html logo}
			</div>
			<div class="text-white">
				<span>swipe up</span>
				<label>
					timer: {countdown} 
					<progress class="rounded-full w-[300px]" value={countdown/25}></progress>
				</label>
			</div>
		</div>
	{/if}
	{@render children()}
</main>

<footer>
	<p>
		visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
	</p>
</footer>

