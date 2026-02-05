<script lang="ts">
	
	// import madone from '$lib/assets/images/trek_pone_modone.jpg?enhanced';
	// import hiscroller from '$lib/assets/video/subway.800_30_na.mp4';
	import hiscroller from '$lib/assets/video/subway.testpart8_700.mp4';
	import loscroller from '$lib/assets/video/subway.testpart8_300.mp4';
	import { fly, fade } from 'svelte/transition';
	import { intersect } from '@svelte-put/intersect';
	import { uiobserver, onIntersect, navigate } from '$lib/uiobserver.svelte';
	import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';
	import { Accordion } from "bits-ui";

    import teampic_1 from '$lib/assets/images/team/team_1.jpg';
    import teampic_2 from '$lib/assets/images/team/team_2.jpg';
	import teampic_3 from '$lib/assets/images/team/team_3.jpg';
	import teampic_4 from '$lib/assets/images/team/team_4.jpg';
	import teampic_1_sport from '$lib/assets/images/team/team_1_sport.jpg';
    import teampic_2_sport from '$lib/assets/images/team/team_2_sport.jpg';
	import teampic_3_sport from '$lib/assets/images/team/team_3_sport.jpg';
	import teampic_4_sport from '$lib/assets/images/team/team_4_sport.jpg';

	// video timehead positioning based on current window scroll position
	let time = $state(0);
	let duration = $state(0);
	let scrollY = $state(0);
	let transitioning = $state(false);
	// let scrollRelation = $state(0);
	let scrollQuot =$state(0);
	let value = $state("item-1");

	const items = [
    {
      id: "item-1",
      title: "Georg Lohner",
      image: teampic_1,
	  image_sport: teampic_1_sport,
      description: "Inhaber - Leidenschaftlicher Rennradfahrer und Mountainbiker, im Team bekannt für sein enormes Fachwissen."
    },
    {
      id: "item-2",
      title: "Sebastian Miesl",
      image: teampic_2,
	  image_sport: teampic_2_sport,
      description: "Verkauf/Werkstatt - Rennradbegeistert, lebensfroh und stets mit einem freundlichen Lächeln unterwegs."
    },
    {
      id: "item-3",
      title: "Philipp Baudrexl",
      image: teampic_3,
	  image_sport: teampic_3_sport,
      description: "Verkauf/Werkstatt - Mountainbike- und Downhill-Fan, flinker Schrauber mit einem guten Gespür für Technik."
    },
    {
      id: "item-4",
      title: "Daniel Peters",
      image: teampic_4,
	  image_sport: teampic_4_sport,
      description: "Auszubildender Zweiradmechatroniker - Beigeistert von Rennrad und Gravel, bereits verkaufserfahren und motiviert in der Ausbildung zum Zweiradmechatroniker."
    }
  ];
	
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
			<h1 class="container mx-auto px-4 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-white text-sm lg:text-base xl:text-xl" in:fade={{duration: 300, delay: 600 }} out:fade>UNSERE FAHRRÄDER FÜR DEIN NÄCHSTES ADVENTURE | <span class="font-bold">WE JUST RIDE!</span></h1>
		{/if}
		{#if scrollQuot > 0.33 && scrollQuot < 0.66 && !transitioning}
			<h1 class="container mx-auto px-4 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-white text-sm lg:text-base xl:text-xl" in:fade={{duration: 300, delay: 600 }} out:fade>WIR LASSEN DEIN TRAUMBIKE WIRKLICHKEIT WERDEN | <span class="font-bold">PROJECT ONE</span></h1>
		{/if}
		{#if scrollQuot > 0.66 && scrollQuot < 1 && !transitioning}
			<h1 class="container mx-auto px-4 pb-8 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-white text-sm lg:text-base xl:text-xl" in:fade={{duration: 300, delay: 600 }} out:fade>SCHON MAL ÜBER EIN FIRMENRAD NACHGEDACHT? | <span class="font-bold">BIKE LEASING</span></h1>
		{/if}
		<div class="fixed top-0 flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden">
				{#if scrollQuot > 0.01 && scrollQuot < 0.16 && !transitioning}
				<h2 use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-stagepart="1" in:fly={{ y:50, duration: 300, delay: 100 }} out:fade class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-white">EGAL WELCHES 
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold">ADVENTURE 2026 </span>
					</span>
					AUF DICH WARTET ...
				</h2>
				{/if}
		</div>
		<div class="fixed top-0 flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden">
				{#if scrollQuot > 0.17 && scrollQuot < 0.33 && !transitioning}
				<h2 use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-stagepart="1" in:fly={{ y:50, duration: 300, delay: 100 }} out:fade class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-white">WIR HABEN DEN
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold">IDEALEN BEGLEITER</span>
					</span>
					FÜR DEIN TERRAIN.
				</h2>
				{/if}
		</div>
		<div class="fixed top-0 flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden">
				{#if scrollQuot > 0.34 && scrollQuot < 0.49 && !transitioning}
				<h2 use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-stagepart="2" in:fly={{ y:50, duration: 300, delay: 100 }} out:fade class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-white">EINIGE UNSERER FAHRRÄDER WURDEN
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold">IM WINDKANAL</span>
					</span>
					OPTIMIERT...
				</h2>
				{/if}
		</div>
		<div class="fixed top-0 flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden">
				{#if scrollQuot > 0.5 && scrollQuot < 0.66 && !transitioning}
				<h2 use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-stagepart="2" in:fly={{ y:50, duration: 300, delay: 100 }} out:fade class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-white">UND DURCH DEINE INDIVIDUALISIERUNG WERDEN DARAUS
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold">PROJECT ONE</span>
					</span>
					TRAUMRÄDER!
				</h2>
				{/if}
		</div>
		<div class="fixed top-0 flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden">
				{#if scrollQuot > 0.67 && scrollQuot < 0.8 && !transitioning}
				<h2 use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-stagepart="3" in:fly={{ y:50, duration: 300, delay: 100 }} out:fade class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-white">MIT DEM FIRMENRAD ZUR ARBEIT:  
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold">BIKE LEASING</span>
					</span>
					GANZ EINFACH...
				</h2>
				{/if}
		</div>
		<div class="fixed top-0 flex h-full w-full flex-col items-stretch justify-center text-white overflow-hidden">
				{#if scrollQuot > 0.81 && scrollQuot < 0.9 && !transitioning}
				<h2 use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-stagepart="3" in:fly={{ y:50, duration: 300, delay: 100 }} out:fade class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-white">WIR ZEIGEN EUCH WIE EINFACH DER WEG ZUM
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold">NEUEN WUNSCHBIKE</span>
					</span>
					SEIN KANN!
				</h2>
				{/if}
		</div>
	</div>
</div>
<!-- <div use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} class="relative h-[200vh]" data-uipref="dark" data-stagepart="2"> -->
	<!-- <div class="sticky top-0 left-0 z-10 h-screen w-full"> -->
		<!-- <div class="absolute z-10 h-screen w-full"> -->
			<!-- <enhanced:img src={madone} alt="madone alt text" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" /> -->
			<!-- <enhanced:img src="../lib/assets/images/trek_pone_modone.jpg?format=avif;webp" alt="madone alt text" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" /> -->
			<!-- <enhanced:img src={madone} alt="madone alt text" sizes="min(1280px, 100vw)" /> -->
		<!-- </div> -->
	<!-- </div> -->
<!-- </div> -->
<div use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} class="bg-neutral-200 relative h-full lg:h-[100vh]" data-uipref="dark" data-stagepart="4">
	<h1 class="container mx-auto px-4 pb-8 pt-4 z-11 sticky top-28 lg:top-44 xl:top-40 font-extralight font-headline text-neutral-800 text-sm lg:text-base xl:text-xl" in:fade={{duration: 300, delay: 600 }} out:fade>EUER FACHHÄNDLER FÜR FAHRRÄDER UND ZUBEHÖR IN AICHACH - RADSPORT WAGNER | <span class="font-bold">WE JUST RIDE!</span></h1>
            <div class="container mx-auto grid grid-cols-6 gap-2 place-items-center h-full lg:h-screen">
               	<div class="col-span-6 lg:col-span-3 pt-50 px-4 max-lg:full text-neutral-400 text-2xl font-regular font-extralight text-right" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>Als <span class="text-neutral-700">Fachhändler</span> mitten im Herzen Aichachs brennen wir für alles was dein <span class="text-neutral-700">Biker-Herz</span> höher schlagen läßt. Unser Line-Up umfasst Bikes für <span class="text-neutral-700">Mountain</span> | <span class="text-neutral-700">Road</span> | <span class="text-neutral-700">Gravel</span> | <span class="text-neutral-700">City</span> | <span class="text-neutral-700">Trekking</span> mit und ohne <span class="text-neutral-700">E-Antrieb</span> sowie Zubehör, Ersatzteile und Radsportbekleidung. In unserer <span class="text-neutral-700">Werkstatt | Werkbank</span> bringen wir jedes Bike wieder <span class="text-neutral-700">Trail Ready</span> - egal was fehlt, <span class="text-neutral-700">unser Service passt</span>. Wir freuen uns über deinen Besuch!</div>
				<Accordion.Root
					type="single"
					orientation="horizontal"
					class="z-10 flex h-[500px] w-full gap-2 sm:flex-row max-lg:h-full pt-30 px-4 pb-10 lg:pl-14 xl:pl-10 col-span-6 lg:col-span-3 text-neutral-400 font-regular"
					bind:value
					>
					{#each items as item (item.id)}
						<Accordion.Item
						value={item.id}
						class="relative cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ease-in-out data-[state=closed]:w-[20%] data-[state=open]:w-[100%] md:data-[state=closed]:w-[10%] [&:has(:focus-visible)]:ring-2 data-[state=closed]:opacity-90"
						onclick={() => (value = item.id)}
						>
						<!-- {#if value == item.id} -->
						<img
							src={item.image_sport}
							alt={item.title}
							class="absolute h-[400px] w-full transition-opacity duration-300 object-cover{value == item.id ? ' opacity-100' : ' opacity-0' }"
						/>
						<!-- {/if} -->
						<img
							src={item.image}
							alt={item.title}
							class="h-[400px] w-full object-cover"
						/>
						<div
							class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/40 via-black/15 to-transparent p-4"
						>
							<div
							class="transition-all duration-300 group-data-[state=closed]:translate-y-2 group-data-[state=open]:translate-y-0"
							>
							<Accordion.Header>
								<Accordion.Trigger
								class="focus-override text-left font-bold text-white transition-all duration-300 focus-visible:!outline-none data-[state=open]:mb-2 data-[state=closed]:text-sm data-[state=open]:text-base data-[state=closed]:opacity-0 data-[state=open]:opacity-100 md:data-[state=open]:text-xl"
								>
								{item.title}
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Content
								forceMount
								class="max-h-0 overflow-hidden text-white/90 transition-all duration-700 data-[state=open]:max-h-[100px] data-[state=open]:text-xs data-[state=closed]:opacity-0 data-[state=open]:opacity-100 md:data-[state=open]:text-base"
							>
								{#snippet child({ props, open })}
									{#if open}
									<div {...props} in:fade={{ duration: 1000 }}>
										{item.description}
									</div>
									{/if}
								{/snippet}
							</Accordion.Content>
							<div
								class="absolute bottom-0 left-0 h-1 w-full transition-all duration-300 group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100"
							></div>
							</div>
						</div>
						</Accordion.Item>
					{/each}
					</Accordion.Root>
            </div>
</div>
<div class="fixed z-50 {uiobserver.stagepart === 4 ? 'bottom-30 hidden' : 'bottom-0'} bottom-0 right-4 transition-all min-h-[1px] min-w-[1px] max-sm:w-full sm:right-12 md:right-18 landscape:max-lg:w-full landscape:max-lg:left-0 font-menu text-xs tracking-wider" transition:fade>
	<div class="block origin-bottom-right py-6 sm:py-14 md:py-18 landscape:max-lg:py-4 sm:block">
		<div class="flex flex-col landscape:max-lg:flex-row align-bottom items-end landscape:max-lg:justify-center gap-1">
			<!-- {#if uiobserver.stagepart >= 1} -->
				<button onclick={() => navigate('/fahrraeder')} class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-all {uiobserver.stagepart === 1 ? 'bg-[var(--bg-menu-color)]/38 outline-5 outline-offset-2 outline-hero/65 z-20 outline-solid' : 'bg-[var(--bg-menu-color)]/28 outline-1 outline-offset-0 outline-hero/0 outline-solid'} text-[var(--bg-state-color)]/77 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 duration-300 cursor-pointer">
					<div class="relative">FINDE DEIN BIKE | FAHRRÄDER</div>
				</button>
			<!-- {/if}
			{#if uiobserver.stagepart >= 2} -->
				<button onclick={() => navigate('/projectone')} class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-all {uiobserver.stagepart === 2 ? 'bg-[var(--bg-menu-color)]/38 outline-5 outline-offset-2 outline-hero/65 z-20 outline-solid' : 'bg-[var(--bg-menu-color)]/28 outline-1 outline-offset-0 outline-hero/0 outline-solid'} text-[var(--bg-state-color)]/77 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 duration-300 cursor-pointer">
					<div class="relative">DEIN DREAM BIKE PROJECT | PROJECT ONE</div>
				</button>
			<!-- {/if}
			{#if uiobserver.stagepart >= 3} -->
				<button onclick={() => navigate('/leasing')} class="flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-all {uiobserver.stagepart === 3 ? 'bg-[var(--bg-menu-color)]/38 outline-5 outline-offset-2 outline-hero/65 z-20 outline-solid' : 'bg-[var(--bg-menu-color)]/28 outline-1 outline-offset-0 outline-hero/0 outline-solid'} text-[var(--bg-state-color)]/77 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 duration-300 cursor-pointer">
					<div class="relative">DER WEG ZUM FIRMENRAD | LEASING</div>
				</button>
			<!-- {/if} -->
		</div>
	</div>
</div>