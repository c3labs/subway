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
				// console.log(timerId);
			}
		}
	});

	onMount(() => {
		timerId = setInterval(() => {
			countdown -= 1;
		}, 250);
		// console.log(timerId);
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

<footer class="relative z-11 bg-neutral-900">
	<div class="container flex flex-col-reverse lg:flex-row justify-center text-neutral-500 font-menu text-sm p-6">
		<div class="logo w-1/3 flex _justify-center place-content-center items-center">
			<ul class="flex flex-wrap place-content-center gap-y-1 md:max-w-lg">
				<li class="px-2">TREK LOGO</li>
				<li class="px-2">CUBE LOGO</li>
				<li class="px-2">BONTRAGER LOGO</li>
				<li class="px-2">DIAMANT LOGO</li>
				<li class="px-2">SONSTIGES LOGO</li>
			</ul>
		</div>
		<div class="infos w-1/3 flex justify-center_">
			<ul class="flex flex-wrap place-content-center gap-y-1 md:max-w-lg text-neutral-400">
				<li class="px-2">oeffnungszeiten</li>
				<li class="px-2">coordinates lat/long</li>
				<li class="px-2">impressum/datenschutz</li>
				<li class="px-2">kontaktdaten/tel/fax?/mail</li>
				<li class="px-2">batteriegesetz?</li>
			</ul>
		</div>
		<div class="infos w-1/3 flex justify-center">
			<ul class="flex flex-col justify-end gap-y-1 md:max-w-lg text-right">
				<li class="px-2 mb-1.5 text-xs text-neutral-400">SUBWAY - RADSPORT WAGNER</li>
				<li class="px-2 text-xs">Inhaber: G. Lohner</li>
				<li class="px-2 text-xs">Hubmannstraße 10</li>
				<li class="px-2 mb-1.5 text-xs">D-86551 Aichach</li>
				<li class="px-2 mb-1.5 text-xs">USt-IdNr.: DE359553289</li>
				<li class="px-2 text-xs">tele: +49 8251 81081</li>
				<li class="px-2 text-xs"><a href="mailto://info@radsportwagner.com">info@radsportwagner.com</a></li>
			</ul>
		</div>
	</div>
	<p class="text-neutral-600 font-menu text-xs text-center">
		c3labs.de ©2025 All Rights Reserved
	</p>
	<p class="text-neutral-800 font-menu text-xs text-center pb-3">
		DIESE WEBSITE VERWENDET NEDIALE INHALTE UNTER FREUNDLICHER GENEHMIGUNG VON TREK | CUBE | usw...
	</p>
</footer>

