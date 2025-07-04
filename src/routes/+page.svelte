<script lang="ts">
	
	// import madone from '$lib/assets/images/trek_pone_modone.jpg?enhanced';
	import hiscroller from '$lib/assets/video/subway.800_30_na.mp4';
	// import hiscroller from '$lib/assets/video/subway.testpart1.mp4';
	import loscroller from '$lib/assets/video/subway.300_30_na.mp4';
	import { fly, fade } from 'svelte/transition';
	import { intersect } from '@svelte-put/intersect';
	import { uiobserver, onIntersect, navigate } from '$lib/uiobserver.svelte';
	import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';

	// video timehead positioning based on current window scroll position
	let time = $state(0);
	let duration = $state(0);
	let scrollY = $state(0);
	let transitioning = $state(false);
	// let scrollRelation = $state(0);
	let scrollQuot =$state(0);
	
	$effect(() => {
		const videostage: HTMLElement | null = document.getElementById("herostage");
		
		// @ts-ignore
		// scrollRelation = videostage.scrollHeight - scrollY;

		var vidOverflow = document.body.scrollHeight - videostage.scrollHeight;
		if (vidOverflow > window.innerHeight) {
			vidOverflow = window.innerHeight;
		}

		// @ts-ignore
		var maxScrollY = videostage?.scrollHeight - window.innerHeight + vidOverflow;

		scrollQuot = 1 / maxScrollY * scrollY;
		
		if( scrollQuot < 1 ) {
			time = duration * scrollQuot;
		}

	});

	onMount(() => {
		animateScroll.scrollToTop({ duration: 1000, delay: 250, offset: 250 });
        // animateScroll.scrollToTop({ duration: 1, delay: 250, offset: 20 });
        // console.log('[    reset scroll position  # home   ] - onMount');
    });

</script>

<svelte:head>
	<title>SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>
<svelte:window bind:scrollY />

<div class="relative h-[600vh]" id="herostage">
	<div use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" class="sticky top-0 left-0" in:fade={{duration: 300, delay: 500 }} out:fade onintrostart={() => (transitioning = true)} onintroend={() => (transitioning = false)}>
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
	<div class="sticky top-0 left-0 z-10 h-screen w-full" transition:fade>
		{#if scrollQuot >= 0.01 && scrollQuot < 0.33 && !transitioning}
			<h1 class="container mx-auto px-4 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-white text-sm lg:text-base xl:text-xl" in:fade={{duration: 300, delay: 600 }} out:fade>UNSERE BIKES FÜR DEIN NÄCHSTES ADVENTURE | <span class="font-bold">WE JUST RIDE!</span></h1>
		{/if}
		{#if scrollQuot > 0.33 && scrollQuot < 0.66 && !transitioning}
			<h1 class="container mx-auto px-4 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-white text-sm lg:text-base xl:text-xl" in:fade={{duration: 300, delay: 600 }} out:fade>WIR LASSEN DEIN TRAUMBIKE WIRKLICHKEIT WERDEN | <span class="font-bold">PROJECT ONE</span></h1>
		{/if}
		{#if scrollQuot > 0.66 && scrollQuot < 1 && !transitioning}
			<h1 class="container mx-auto px-4 pb-8 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-white text-sm lg:text-base xl:text-xl" in:fade={{duration: 300, delay: 600 }} out:fade>SCHON MAL ÜBER EIN FIRMENRAD NACHGEDACHT? | <span class="font-bold">BIKE LEASING</span></h1>
		{/if}
		<div class="fixed top-0 flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden">
				{#if scrollQuot > 0.01 && scrollQuot < 0.16 && !transitioning}
				<h2 use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-stagepart="1" in:fly={{ y:50, duration: 300, delay: 100 }} out:fade class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl landscape:max-lg:text-3xl md:text-4xl text-white">EGAL WELCHES 
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold">BIKE ADVENTURE 2025 </span>
					</span>
					AUF DICH WARTET ...
				</h2>
				{/if}
		</div>
		<div class="fixed top-0 flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden">
				{#if scrollQuot > 0.17 && scrollQuot < 0.33 && !transitioning}
				<h2 use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-stagepart="1" in:fly={{ y:50, duration: 300, delay: 100 }} out:fade class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl landscape:max-lg:text-3xl md:text-4xl text-white">WIR HABEN DEN
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold">IDEALEN BEGLEITER</span>
					</span>
					FÜR ALL DEINE TRAILS.
				</h2>
				{/if}
		</div>
		<div class="fixed top-0 flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden">
				{#if scrollQuot > 0.34 && scrollQuot < 0.5 && !transitioning}
				<h2 use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-stagepart="2" in:fly={{ y:50, duration: 300, delay: 100 }} out:fade class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl landscape:max-lg:text-3xl md:text-4xl text-white">NEUE HEADLINE
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold">PROJECT ONE</span>
					</span>
					RELATED!
				</h2>
				{/if}
		</div>
	</div>
</div>
<div use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} class="relative h-[200vh]" data-uipref="dark" data-stagepart="2">
	<div class="sticky top-0 left-0 z-10 h-screen w-full">
		<div class="absolute z-10 h-screen w-full">
			<!-- <enhanced:img src={madone} alt="madone alt text" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" /> -->
			<enhanced:img src="../lib/assets/images/trek_pone_modone.jpg?format=avif;webp" alt="madone alt text" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" />
			<!-- <enhanced:img src={madone} alt="madone alt text" sizes="min(1280px, 100vw)" /> -->
		</div>
	</div>
</div>
<div use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} class="bg-neutral-300 relative h-[100vh]" data-uipref="dark" data-stagepart="3">
	<div class="heading">
		<h1 class=" font-headline text-neutral-300">SUBWAY - Development Server</h1>
	</div>
	<div>
		<p>LAST IMPLEMENTED ->> Intersection Observer testing for data-uipref purposes</p>
		<p>CURRENTLY IMPLEMENTING ->> header/footer responsivnes UI </p>
	</div>
</div>
<div class="fixed z-50 bottom-0 right-4 transition-all min-h-[1px] min-w-[1px] max-sm:w-full sm:right-12 md:right-18 landscape:max-lg:w-full landscape:max-lg:left-0 font-menu text-xs tracking-wider" transition:fade>
	<div class="block origin-bottom-right py-6 sm:py-14 md:py-18 landscape:max-lg:py-4 sm:block">
		<div class="flex flex-col landscape:max-lg:flex-row align-bottom items-end landscape:max-lg:justify-center gap-1">
			<!-- {#if uiobserver.stagepart >= 1} -->
				<button onclick={() => navigate('/bikes')} class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-colors {uiobserver.stagepart === 1 ? 'bg-[var(--bg-menu-color)]/48' : 'bg-[var(--bg-menu-color)]/28'} text-[var(--bg-state-color)]/77 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 duration-300 cursor-pointer">
					<div class="relative">FINDE DEIN BIKE | TECH/BIKES</div>
				</button>
			<!-- {/if}
			{#if uiobserver.stagepart >= 2} -->
				<button onclick={() => navigate('/projectone')} class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-colors {uiobserver.stagepart === 2 ? 'bg-[var(--bg-menu-color)]/48' : 'bg-[var(--bg-menu-color)]/28'} text-[var(--bg-state-color)]/77 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 duration-300 cursor-pointer">
					<div class="relative">DEIN DREAM BIKE PROJECT | PROJECT ONE</div>
				</button>
			<!-- {/if}
			{#if uiobserver.stagepart >= 3} -->
				<button onclick={() => navigate('/leasing')} class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-colors {uiobserver.stagepart === 3 ? 'bg-[var(--bg-menu-color)]/48' : 'bg-[var(--bg-menu-color)]/28'} text-[var(--bg-state-color)]/77 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 duration-300 cursor-pointer">
					<div class="relative">DER WEG ZUM FIRMENRAD | LEASING</div>
				</button>
			<!-- {/if} -->
		</div>
	</div>
</div>