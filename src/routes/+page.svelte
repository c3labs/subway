<script lang="ts">
	import { page } from '$app/state';
	// import madone from '$lib/assets/images/trek_pone_modone.jpg?enhanced';
	import hiscroller from '$lib/assets/video/subway.800_30_na.mp4';
	import loscroller from '$lib/assets/video/subway.300_30_na.mp4';
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import { intersect } from '@svelte-put/intersect';
	import { uiobserver, onIntersect } from "$lib/uiobserver.svelte";

	// video timehead positioning based on current window scroll position
	let initiator = $state(false);
	let time = $state(0);
	let duration = $state(0);
	let scrollY = $state(0);

	$effect(() => {
		const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
		time = (duration * (scrollY / totalScroll))+0.1;
	});

	afterNavigate(({ from }) => {
		// show this fukkin initiator thingy only on first page visit!!
		initiator = from === null ? false : true;
		console.log(initiator);
	});

</script>

<svelte:head>
	<title>SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>
<svelte:window bind:scrollY />

<div class="relative h-[400vh]">
	<div use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} class="sticky top-0 left-0" data-uipref="light" in:fade={{duration: 300, delay: 500 }} out:fade>
		{#if scrollY < 50 && !initiator}
		<div transition:fade onoutroend={() => (initiator = true)} class="absolute z-20 h-screen w-full bg-neutral-900" style="opacity: {1-(scrollY/500)}"></div>
		{/if}
		<div class="absolute z-10 h-screen w-full">
			<video
				bind:currentTime={time}
				bind:duration
				preload="metadata"
				muted
				class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center"
			>
				<source src={hiscroller} media="(min-width: 800px)" />
				<source src={loscroller} media="(min-width: 300px)" />
				<track kind="captions" />
			</video>
		</div>
	</div>
	<div class="sticky top-0 left-0 z-10 h-screen w-full">
		<div class="h3 flex h-full w-full flex-col items-stretch justify-center text-white sm:text-[3.5vw] overflow-hidden" style="opacity: 1;">
			<div class="container">
				{#if scrollY > 50}
				<div class="mb-[10vh] flex flex-col items-end justify-between space-y-5 sm:flex-row sm:space-y-0">
					
					<p class="max-w-[80%] self-start">
						<span transition:fade class="inline-block font-headline font-extralight text-4xl">EGAL WELCHEN TRAIL </span>
					</p>
					<p class="max-w-[80%]">
						<span transition:fade class="inline-block font-headline font-bold text-6xl bg-hero/50 p-1">DU 2025 NIMMST</span>
					</p>
					
				</div>
				<div class="flex justify-center">
					<p>
						<span transition:fade class="inline-block font-headline font-extralight text-4xl" style="transform: translateX({610-scrollY}px);">WE JUST RIDE</span>
					</p>
				</div>
				{/if}
			</div>
		</div>
	</div>
</div>
<div use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} class="relative h-[200vh]" data-uipref="dark">
	<div class="sticky top-0 left-0 z-10 h-screen w-full">
		<div class="absolute z-10 h-screen w-full">
			<!-- <enhanced:img src={madone} alt="madone alt text" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" /> -->
			<enhanced:img src="../lib/assets/images/trek_pone_modone.jpg?format=avif;webp" alt="madone alt text" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" />
			<!-- <enhanced:img src={madone} alt="madone alt text" sizes="min(1280px, 100vw)" /> -->
		</div>
	</div>
</div>
<div use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} class="bg-neutral-500 relative h-[100vh]" data-uipref="light">
	<div class="heading">
		<h1 class=" font-headline text-neutral-300">SUBWAY - Development Server</h1>
	</div>
	<div>
		<p>LAST IMPLEMENTED ->> Intersection Observer testing for data-uipref purposes</p>
		<p>CURRENTLY IMPLEMENTING ->> header/footer responsivnes UI</p>
	</div>
</div>
<div class="fixed z-50 bottom-0 right-4 min-h-[1px] min-w-[1px] max-sm:w-full sm:right-12 md:right-18 font-menu text-xs tracking-wider">
	<div class="block origin-bottom-right py-6 sm:py-14 md:py-18 sm:block">
		<div class="flex flex-col items-end gap-1">
			<div>
				<button class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-colors bg-[var(--bg-state-color)]/30 text-[var(--bg-menu-color)] duration-1000">
					<div class="relative">FINDE DEIN PASSENDES BIKE | TECH/BIKES</div>
				</button>
			</div>
			<div>
				<button class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-colors bg-[var(--bg-state-color)]/30 text-[var(--bg-menu-color)] duration-1000">
					<div class="relative">DEIN DREAM BIKE PROJECT | PROJECT ONE</div>
				</button>
			</div>
			<div>
				<button class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-colors bg-[var(--bg-state-color)]/30 text-[var(--bg-menu-color)] duration-1000">
						<div class="relative">DER WEG ZUM FIRMENRAD | LEASING</div>
				</button>
			</div>
		</div>
	</div>
	<div class="hidden w-full p-5 sm:hidden sm:p-0">
		<div class="relative flex w-full justify-end overflow-hidden rounded-xl p-4 backdrop-blur-sm sm:p-8">
			<div class="w-full">
				<div class="relative flex w-full justify-end gap-5 max-sm:pl-8 sm:flex-col sm:items-stretch sm:gap-0 md:items-end">
					<h2 class="h4-pitch hidden text-right sm:block">Sculpture Handlebar</h2>
					<div class="flex grow items-start justify-end leading-none text-dark-grey">
						<span class="h4-pitch whitespace-nowrap">€ 725</span>
					</div>
					<div class="max-w-full sm:mt-4">
						<div>
							<div>
								<div class="flex items-center justify-end leading-none">
									<button class="h4-pitch text-white">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>