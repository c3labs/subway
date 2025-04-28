<script lang="ts">
	import { page } from '$app/state';
	// import madone from '$lib/assets/images/trek_pone_modone.jpg?enhanced';
	import hiscroller from '$lib/assets/video/subway.800_30_na.mp4';
	import loscroller from '$lib/assets/video/subway.300_30_na.mp4';
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';

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
	console.log("initiator");
</script>

<svelte:head>
	<title>SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>
<svelte:window bind:scrollY />

<div class="relative h-[400vh]" data-show-light-ui="true">
	<div class="sticky top-0 left-0">
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
				{#if scrollY > 500}
				<div class="mb-[10vh] flex flex-col items-end justify-between space-y-5 sm:flex-row sm:space-y-0">
					
					<p class="max-w-[80%] self-start">
						<span transition:fade class="inline-block font-headline font-extralight text-4xl">PART #1: STICKY PRELINE</span>
					</p>
					<p class="max-w-[80%]">
						<span transition:fade class="inline-block font-headline font-bold text-6xl bg-hero/60 bg-red-700/60 p-1" style="transform: translateX({-309+scrollY}px);">PART #2: HERO HEADLINE</span>
					</p>
					
				</div>
				<div class="flex justify-center">
					<p>
						<span transition:fade class="inline-block font-headline font-extralight text-4xl" style="transform: translateX({610-scrollY}px);">PART #3: SUBLINE OR SOMETHING ELSE</span>
					</p>
				</div>
				{/if}
			</div>
		</div>
	</div>
</div>
<div class="relative h-[200vh]">
	<div class="sticky top-0 left-0 z-10 h-screen w-full">
		<div class=" absolute z-10 h-screen w-full">
			<!-- <enhanced:img src={madone} alt="madone alt text" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" /> -->
			<enhanced:img src="../lib/assets/images/trek_pone_modone.jpg?format=avif;webp" alt="madone alt text" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center"	/>
			<!-- <enhanced:img src={madone} alt="madone alt text" sizes="min(1280px, 100vw)" /> -->
		</div>
	</div>
</div>
<div class="relative h-[100vh]">
	<div class="heading">
		<h1 class=" font-mono">SUBWAY - Development Server</h1>
		<p>
			Have a look at <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
		</p>
	</div>
	<div class="str str1">
		<p>LAST IMPLEMENTED ->> scrollable:video# media size src dependency</p>
		<p>CURRENTLY IMPLEMENTING ->> Intersection Observer testing for data-show-light-ui purposes</p>
	</div>
</div>
