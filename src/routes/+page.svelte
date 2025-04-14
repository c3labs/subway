<script lang="ts">
	// import madone from '$lib/assets/images/trek_pone_modone.jpg?enhanced';
	// import scroller from '$lib/assets/video/subway.tester2.mp4';
	// import { run } from 'svelte/legacy';

	// let time = $state(0);
	// let duration = $state();

	// let scrollY = $state(0);

	// run(() => {
	// 	const totalScroll =	document.documentElement.scrollHeight - window.innerHeight;
	// 	time = duration * (scrollY / totalScroll);
	// });
</script>

<svelte:head>
	<title>SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>
<!-- <svelte:window bind:scrollY /> -->
<h1 class=" font-mono ">SUBWAY - Development Server</h1>
<p>Have a look at <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>LAST IMPLEMENTED ->> enhanced:img rendering# format types</p>
<!-- <p>CURRENTLY IMPLEMENTING ->> scrollable:video# size test</p> -->
<p>
	<!-- <enhanced:img src={madone} alt="madone alt text" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" /> -->
	<enhanced:img src="../lib/assets/images/trek_pone_modone.jpg?format=avif;webp" alt="madone alt text" sizes="min(1280px, 100vw)" />
	<!-- <video
    bind:currentTime={time}
    bind:duration
    preload="metadata"
    mutedtype="video/mp4">
	<source src={scroller} media="(min-width: 600px)" />
	</video> -->
</p>