<script lang="ts">
	import '@fontsource/anta';
	import '@fontsource/titillium-web/200.css';
	import '@fontsource/titillium-web/300.css';
	import '@fontsource/titillium-web/400.css';
	import '@fontsource/titillium-web/600.css';
	import '@fontsource/titillium-web/700.css';
	// import '@fontsource/titillium-web/900.css';

	import logo from '$lib/assets/images/logo/subway.logo.v01.svg?raw';
	import logo_trek from '$lib/assets/images/logo/manufacturer/trek.svg?raw';
	import logo_cube from '$lib/assets/images/logo/manufacturer/cube.optimized.svg?raw';
	import logo_diamant from '$lib/assets/images/logo/manufacturer/diamant.svg?raw';
	import logo_bontrager from '$lib/assets/images/logo/manufacturer/bontrager.svg?raw';
	import logo_electra from '$lib/assets/images/logo/manufacturer/electra.svg?raw';
	import logo_rapha from '$lib/assets/images/logo/manufacturer/rapha.svg?raw';
	import logo_wilier from '$lib/assets/images/logo/manufacturer/wilier.svg?raw';
	import logo_kubikes from '$lib/assets/images/logo/manufacturer/kubikes.svg?raw';

	import Header from './Header.svelte';

	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { uiobserver } from '$lib/uiobserver.svelte';
	import '../app.css';

	let { children } = $props();
	let countdown = $state(10);
	let timerId = $state(0);
	let date = new Date();
	let weekday = date.getDay();
	let currentHour = date.getHours();
	let currentMinute = date.getMinutes();
	let opened = $state(false);

	const openingHours = [
    //    { day: 0, open: '09:00', close: '18:00' }, // Sunday
       { day: 1, open: '09:00', close: '18:00' }, // Monday
       { day: 2, open: '09:00', close: '18:00' }, // Tuesday
       { day: 3, open: '09:00', close: '18:00' }, // Wednesday
       { day: 4, open: '09:00', close: '18:00' }, // Thursday
       { day: 5, open: '09:00', close: '18:00' }, // Friday
       { day: 6, open: '09:00', close: '13:00' }, // Saturday 
	];

	let openingHoursToday = openingHours.find(item => item.day === weekday);

    if (openingHoursToday) {
    	const [openHour, openMinute] = openingHoursToday.open.split(':').map(Number);
    	const [closeHour, closeMinute] = openingHoursToday.close.split(':').map(Number);
    	if (currentHour > openHour || (currentHour === openHour && currentMinute >= openMinute)) {
			if (currentHour < closeHour || (currentHour === closeHour && currentMinute < closeMinute)) {
				opened = true;
        	}
    	}
    }

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

<footer class="relative z-11 bg-neutral-900 flex flex-col items-center">
	<div class="container flex flex-col md:flex-row justify-center text-neutral-600 font-menu text-xs p-6">

		<div class="flex-none order-3 md:order-1 max-md:pb-6">
			<ul class="flex flex-col _max-md:items-center gap-y-1 md:max-w-lg">
				<li class="px-2 mb-1.5 max-md:text-center text-neutral-400 uppercase">Öffnungszeiten: {opened ? '... wir sind am Start!' : '... Feierabend!'}</li>
				<li class="px-2 flex justify-between {weekday === 1 ? 'text-neutral-400' : ''}">Montag<span class="text-right">09:00–12:00, 14:00–18:00</span></li>
				<li class="px-2 flex justify-between {weekday === 2 ? 'text-neutral-400' : ''}">Dienstag<span class="text-right">09:00–12:00, 14:00–18:00</span></li>
				<li class="px-2 flex justify-between {weekday === 3 ? 'text-neutral-400' : ''}">Mittwoch<span class="text-right">09:00–12:00, 14:00–18:00</span></li>
				<li class="px-2 flex justify-between {weekday === 4 ? 'text-neutral-400' : ''} gap-x-3">Donnerstag<span class="text-right">09:00–12:00, 14:00–18:00</span></li>
				<li class="px-2 flex justify-between {weekday === 5 ? 'text-neutral-400' : ''}">Freitag<span class="text-right">09:00–12:00, 14:00–18:00</span></li>
				<li class="px-2 flex justify-between {weekday === 6 ? 'text-neutral-400' : ''}">Samstag<span class="text-right">09:00–13:00</span></li>
				
				<li class="px-2 mt-1.5 max-md:text-center text-neutral-500 hover:text-neutral-300 transition-colors duration-300"><a href="//maps.app.goo.gl/XSHnkLPzBnqJbCFi7" target="_blank">STANDORT - [G-MAPS]</a></li>

				<!-- <li class="px-2">? impressum ?</li>
				<li class="px-2">? agb ?</li>
				<li class="px-2">? datenschutz ?</li>
				<li class="px-2">? batteriegesetz ?</li> -->
			</ul>
		</div>
		<div class="flex-auto order-1 md:order-2 place-content-center items-center max-md:pb-10">
			
			<ul class="flex flex-wrap place-content-center gap-y-1">
				<li class="px-2 w-[100px] h-10 text-neutral-600 hover:text-neutral-300 transition-colors duration-300">{@html logo_trek}</li>
				<li class="px-2 w-[110px] h-10 text-neutral-600 hover:text-neutral-300 transition-colors duration-300">{@html logo_cube}</li>
				<li class="px-2 w-[120px] h-10 text-neutral-600 hover:text-neutral-300 transition-colors duration-300">{@html logo_bontrager}</li>
				<li class="px-2 w-[100px] h-10 text-neutral-600 hover:text-neutral-300 -translate-y-1 transition-colors duration-300">{@html logo_diamant}</li>
				<li class="px-2 w-[95px] h-10 text-neutral-600 hover:text-neutral-300 -translate-y-0.5 transition-colors duration-300">{@html logo_electra}</li>
				<li class="px-2 w-[80px] h-10 text-neutral-600 hover:text-neutral-300 transition-colors duration-300">{@html logo_rapha}</li>
				<li class="px-2 w-[110px] h-10 text-neutral-600 hover:text-neutral-300 transition-colors duration-300">{@html logo_wilier}</li>
				<li class="px-2 w-[100px] h-10 text-neutral-600 hover:text-neutral-300 transition-colors duration-300">{@html logo_kubikes}</li>
			</ul>
		</div>
		<div class="flex-none order-2 md:order-3 justify-center lg:justify-end max-md:pb-10">
			<ul class="flex flex-col gap-y-1 md:max-w-lg text-center md:text-right">
				<li class="px-2 mb-1.5 text-xs text-neutral-400">SUBWAY - RADSPORT WAGNER</li>
				<li class="px-2 text-xs">Inhaber: G. Lohner</li>
				<li class="px-2 text-xs">Hubmannstraße 10</li>
				<li class="px-2 mb-1.5 text-xs">D-86551 Aichach</li>
				<li class="px-2 mb-1.5 text-xs">USt-IdNr.: DE359553289</li>
				<li class="px-2 text-xs">tele: +49 8251 81081</li>
				<li class="px-2 text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-300"><a href="mailto:info@radsportwagner.com">info@radsportwagner.com</a></li>
			</ul>
		</div>
	</div>
	<div class="container">
		<p class="text-neutral-600  font-menu text-xs text-center">
			© 2026 <a href="https://c3labs.de" target="_blank" class="text-neutral-500 hover:text-neutral-300 transition-colors duration-300">c3labs.de</a> | All Rights Reserved
		</p>
		<p class="text-neutral-700 font-menu text-xs text-center p-3">
			DIESE WEBSITE FUNKTIONIERT OHNE COOKIES - SAMMELT KEINE DATEN - VERWENDET MEDIALE INHALTE MIT FREUNDLICHER GENEHMIGUNG VON TREK | CUBE | usw...
		</p>
	</div>
	
</footer>

