<script lang="ts">
	// import madone from '$lib/assets/images/trek_pone_modone.jpg?enhanced';
	import hiscroller from '$lib/assets/video/subway.800_30_na.mp4';
	import loscroller from '$lib/assets/video/subway.300_30_na.mp4';

	// video timehead positioning based on current window scroll position

	let time = $state(0);
	let duration = $state(0);
	let scrollY = $state(0);
	$effect(() => {
		const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
		time = duration * (scrollY / totalScroll);
	});
</script>

<svelte:head>
	<title>SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>
<svelte:window bind:scrollY />

<div class="relative h-[300vh]" data-show-light-ui="true">
	<div class="sticky top-0 left-0">
		<div class="absolute z-20 h-screen w-full bg-black" style="opacity: 0.5;"></div>
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
		<div
			class="h3 flex h-full w-full flex-col items-stretch justify-center text-white sm:text-[3.5vw]" style="opacity: 1;">
			<div class="container">
				<div class="mb-[10vh] flex flex-col items-end justify-between space-y-5 sm:flex-row sm:space-y-0">
					<p class="max-w-[80%] self-start">
						<span class="inline-block">PART OF</span>
					</p>
					<p class="max-w-[80%]">
						<span class="inline-block" style="transform: translateX(-109.009px);">HEADLINE 1 {scrollY}</span>
					</p>
				</div>
				<div class="flex justify-center">
					<p>
						<span class="inline-block" style="transform: translateX(-21.2191px);">SUBLINE OR SOMETHING ELSE</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<p>
	<!-- <enhanced:img src={madone} alt="madone alt text" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" /> -->
	<enhanced:img src="../lib/assets/images/trek_pone_modone.jpg?format=avif;webp" alt="madone alt text" sizes="min(1280px, 100vw)"	/>
	<!-- <enhanced:img src={madone} alt="madone alt text" sizes="min(1280px, 100vw)" /> -->
</p>

<div class=" h-[300vh]">
	<div class="heading">
		<h1 class=" font-mono">SUBWAY - Development Server</h1>
		<p>
			Have a look at <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
		</p>
	</div>
	<div class="str str1">
		<p>LAST IMPLEMENTED ->> enhanced:img rendering# format types</p>
		<p>CURRENTLY IMPLEMENTING ->> scrollable:video# media size src dependency</p>
	</div>
</div>
