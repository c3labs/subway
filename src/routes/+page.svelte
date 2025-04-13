<script lang="ts">
	// import madone from '$lib/assets/images/trek_pone_modone.jpg?enhanced';
</script>

<svelte:head>
	<title>SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>

<h1 class=" font-mono ">SUBWAY - Development Server</h1>
<p>Have a look at <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>CURRENTLY TESTING ->> enhanced:img rendering# format types</p>
<p>
	<!-- <enhanced:img src={madone} alt="madone alt text" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" /> -->
	<enhanced:img src="../lib/assets/images/trek_pone_modone.jpg?format=avif;webp&" alt="madone alt text" sizes="min(1280px, 100vw)" />
</p>