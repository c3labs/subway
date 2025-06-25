<script lang="ts">
	
	// import madone from '$lib/assets/images/trek_pone_modone.jpg?enhanced';
	import hiscroller from '$lib/assets/video/subway.800_30_na.mp4';
	// import hiscroller from '$lib/assets/video/subway.testpart1.mp4';
	import loscroller from '$lib/assets/video/subway.300_30_na.mp4';
	import { fly, fade } from 'svelte/transition';
	import { intersect } from '@svelte-put/intersect';
	import { uiobserver, onIntersect } from '$lib/uiobserver.svelte';
	import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';

	// video timehead positioning based on current window scroll position
	// let initiator = $state(false);
	let time = $state(0);
	let duration = $state(0);
	let scrollY = $state(0);
	var scrollRelation = 0;
	var scrollQuot = 0;

	$effect(() => {
		// const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
		const videostage: HTMLElement | null = document.getElementById("herostage");
		
		// @ts-ignore
		scrollRelation = videostage.scrollHeight - scrollY;
		
		if( scrollRelation < 1 ) {
			scrollRelation = 1;
		}
		// @ts-ignore
		scrollQuot = 1 / videostage.scrollHeight * (videostage.scrollHeight - scrollRelation);
		time = duration * scrollQuot;
	});

	onMount(() => {
        // disableScrollHandling();
        animateScroll.scrollTo({ element: 'body', duration: 1, delay: 300 });
        console.log('[    reset scroll position  # home   ] - onMount');
    })

</script>

<svelte:head>
	<title>SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>
<svelte:window bind:scrollY />

<div class="relative h-[400vh]" id="herostage">
	<div use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} class="sticky top-0 left-0" data-uipref="dark" in:fade={{duration: 300, delay: 500 }} out:fade>
		<!-- {#if scrollY < 50 && !uiobserver.initiator}
		<div transition:fade onoutroend={() => (uiobserver.initiator = true)} class="absolute z-20 h-screen w-full bg-neutral-900" style="opacity: {1-(scrollY/500)}"></div>
		{/if} -->
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
		<div class="flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden" style="opacity: 1;">
			<div class="container mx-auto px-4">
				{#if scrollY > 50}
				<div class="mb-[10vh] flex flex-col items-end space-y-2 sm:flex-row sm:space-y-0">
					<p class="">
						<span in:fly={{ x :-100, duration: 300, delay: 100 }} out:fade class="inline-block font-headline font-extralight text-3xl md:text-4xl">EGAL WELCHEN TRAIL </span>
					</p>
					<p class="">
						<span in:fly={{ duration: 300, delay: 200  }} out:fade class="inline-block font-headline font-bold text-5xl md:text-6xl bg-hero/70 p-1">DU 2025 NIMMST</span>
					</p>
					<p class="">
						<span in:fly={{ x :100, duration: 300, delay: 300 }} out:fade class="inline-block font-headline font-extralight text-3xl md:text-4xl">WE JUST RIDE</span>
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
		<p>CURRENTLY IMPLEMENTING ->> header/footer responsivnes UI </p>
	</div>
</div>
<div class="fixed z-50 bottom-0 right-4 min-h-[1px] min-w-[1px] max-sm:w-full sm:right-12 md:right-18 font-menu text-xs tracking-wider">
	<div class="block origin-bottom-right py-6 sm:py-14 md:py-18 sm:block">
		<div class="flex flex-col items-end gap-1">
			<div>
				<button class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-colors bg-[var(--bg-menu-color)]/28 text-[var(--bg-state-color)]/77 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 duration-300 cursor-pointer">
					<div class="relative">MODELLJAHR 2025 | TECH/BIKES</div>
				</button>
			</div>
			<div>
				<button class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-colors bg-[var(--bg-menu-color)]/28 text-[var(--bg-state-color)]/77 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 duration-300 cursor-pointer">
					<div class="relative">DEIN DREAM BIKE PROJECT | PROJECT ONE</div>
				</button>
			</div>
			<div>
				<button class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-colors bg-[var(--bg-menu-color)]/28 text-[var(--bg-state-color)]/77 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 duration-300 cursor-pointer">
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