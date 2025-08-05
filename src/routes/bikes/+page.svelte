<script lang="ts">
    import mountainDetail_1 from '$lib/assets/images/bikes/mountain/trek_25_topfuel.png?enhanced';
    import mountainDetail_2 from '$lib/assets/images/bikes/mountain/trek_25_FuelEXe.png?enhanced';
    import mountainDetail_3 from '$lib/assets/images/bikes/mountain/trek_25_Procaliber.png?enhanced';
    import mountainDetail_4 from '$lib/assets/images/bikes/mountain/trek_25_Procaliber6.png?enhanced';
    import mountainDetail_5 from '$lib/assets/images/bikes/mountain/trek_25_PowerflyFS4.png?enhanced';
    import mountainDetail_6 from '$lib/assets/images/bikes/mountain/trek_25_Rail99XXAXS.png?enhanced';
    import mountainDetail_7 from '$lib/assets/images/bikes/mountain/cube_25_StereoHybridONE44.png?enhanced';
    import mountainDetail_8 from '$lib/assets/images/bikes/mountain/cube_25_ReactionHybridRace.png?enhanced';
    import mountainDetail_9 from '$lib/assets/images/bikes/mountain/cube_25_ReactionHybridAllround.png?enhanced';

    import roadDetail_1 from '$lib/assets/images/bikes/road/trek_25_MadoneSL5.png?enhanced';
    import roadDetail_2 from '$lib/assets/images/bikes/road/trek_25_MadoneSL6.png?enhanced';
    import roadDetail_3 from '$lib/assets/images/bikes/road/trek_25_MadoneSL6AXS.png?enhanced';
    import roadDetail_4 from '$lib/assets/images/bikes/road/trek_25_DomaneAL5.png?enhanced';

    import gravelDetail_1 from '$lib/assets/images/bikes/gravel/trek_25_CheckmateSLR9AXS_A.png?enhanced';
    import gravelDetail_2 from '$lib/assets/images/bikes/gravel/trek_25_CheckmateSLR9AXS_B.png?enhanced';
    import gravelDetail_3 from '$lib/assets/images/bikes/gravel/trek_25_CheckmateSLR9AXS_C.png?enhanced';
    import gravelDetail_4 from '$lib/assets/images/bikes/gravel/trek_25_CheckpointSL5AXS.png?enhanced';
    import gravelDetail_5 from '$lib/assets/images/bikes/gravel/trek_25_CheckpointSL6.png?enhanced';

    import cityDetail_1 from '$lib/assets/images/bikes/city/diamant_25_Suvea.png?enhanced';
    import cityDetail_2 from '$lib/assets/images/bikes/city/diamant_25_ZingTripCoreLS.png?enhanced';
    import cityDetail_3 from '$lib/assets/images/bikes/city/diamant_25_ZingTripCoreMS.png?enhanced';

    import trekkingDetail_1 from '$lib/assets/images/bikes/trekking/cube_25_KathmanduSLX.png?enhanced';

    import kubike from '$lib/assets/images/logo/manufacturer/logo_kubikes_transparent_logo_logo.png'

	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
    import { dragscroll } from '@svelte-put/dragscroll';
    import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';
	// import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

	let mountainUlElement: HTMLUListElement | undefined = $state();
    let racerUlElement: HTMLUListElement | undefined = $state();
    let gravelUlElement: HTMLUListElement | undefined = $state();
    let cityUlElement: HTMLUListElement | undefined = $state();
    let trekkingUlElement: HTMLUListElement | undefined = $state();

    let scrollY = $state(0);
	let scrollQuot = $state(0);
    let scrollYWidth: number = $state(0);

    // @ts-ignore
    type enhPicture = Picture;

    interface bikeInfo {
        price: string;
        manufacturer: string;
        suspension: string;
        motor: string;
        watth: string;
        category: string;
        description: string;
        piclink: enhPicture;
        visible: boolean;
    }

	let mountainIntersectionMap: Record<string, bikeInfo> = $state({
		"Top Fuel": { price: "7.499", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "", watth: "800 Wh", category: "Trial-MTB", description: "Infos und link zur Herstellerseite...", piclink: mountainDetail_1, visible: false},
		"Fuel EXe": { price: "6.999", manufacturer: "Trek", suspension: "FULL - F: 170 - B: 170", motor: "Bosch", watth: "800 Wh", category: "E-Trial-MTB", description: "Infos und link zur Herstellerseite...", piclink: mountainDetail_2, visible: false},
		"Procaliber FS": { price: "5.299", manufacturer: "Trek", suspension: "FULL - F: 130 - B: 120", motor: "", watth: "800 Wh", category: "Cross Country-MTB", description: "Infos und link zur Herstellerseite...", piclink: mountainDetail_3, visible: false},
		"Procaliber6": { price: "4.799", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "", watth: "600 Wh", category: "Cross Country-MTB", description: "Infos und link zur Herstellerseite...", piclink: mountainDetail_4, visible: false},
		"Powerfly FS+ Gen4": { price: "3.999", manufacturer: "Trek", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watth: "800 Wh", category: "E-MTB", description: "Infos und link zur Herstellerseite...", piclink: mountainDetail_5, visible: false},
		"Rail99XX AXS": { price: "4.999", manufacturer: "Trek", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watth: "800 Wh", category: "E-MTB", description: "Infos und link zur Herstellerseite...", piclink: mountainDetail_6, visible: false},
		"Stereo Hybrid ONE44": { price: "3.199", manufacturer: "Cube", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watth: "800 Wh", category: "Trial-MTB", description: "Infos und link zur Herstellerseite...", piclink: mountainDetail_7, visible: false},
		"Reaction Hybrid RACE": { price: "3.599", manufacturer: "Cube", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watth: "800 Wh", category: "Trial-MTB", description: "Infos und link zur Herstellerseite...", piclink: mountainDetail_8, visible: false},
		"Reaction Hybrid ALLROAD": { price: "4.199", manufacturer: "Cube", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watth: "800 Wh", category: "Cross Country-MTB", description: "Infos und link zur Herstellerseite...", piclink: mountainDetail_9, visible: false},
	});

    let roadIntersectionMap: Record<string, bikeInfo> = $state({
        "Madone SL5": { price: "9.899", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "Performance-Rennrad", description: "Infos und link zur Herstellerseite...", piclink: roadDetail_1, visible: false},
		"Madone SL6": { price: "9.899", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "Performance-Rennrad", description: "Infos und link zur Herstellerseite...", piclink: roadDetail_2, visible: false},
		"Madone SL6 AXS": { price: "10.699", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "Performance-Rennrad", description: "Infos und link zur Herstellerseite...", piclink: roadDetail_3, visible: false},
		"Domane+ AL5": { price: "13.999", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: " E-All-Road", description: "Infos und link zur Herstellerseite...", piclink: roadDetail_4, visible: false},
	});

    let gravelIntersectionMap: Record<string, bikeInfo> = $state({
        "Checkmate SLR9AXS A": { price: "6.899", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "Gravel-Rennrad", description: "Infos und link zur Herstellerseite...", piclink: gravelDetail_1, visible: false},
		"Checkmate SLR9AXS B": { price: "7.999", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "Gravel-Rennrad", description: "Infos und link zur Herstellerseite...", piclink: gravelDetail_2, visible: false},
        "Checkmate SLR9AXS c": { price: "7.999", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "Gravel-Rennrad", description: "Infos und link zur Herstellerseite...", piclink: gravelDetail_3, visible: false},
        "Checkpoint SL5 AXS": { price: "7.999", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "Endurance Gravel-Bike", description: "Infos und link zur Herstellerseite...", piclink: gravelDetail_4, visible: false},
        "Checkpoint SL6": { price: "7.999", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "Endurance Gravel-Bike", description: "Infos und link zur Herstellerseite...", piclink: gravelDetail_5, visible: false},
	});

    let cityIntersectionMap: Record<string, bikeInfo> = $state({
        "Suvea": { price: "6.899", manufacturer: "Diamant", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "City-Hybrid-Bike", description: "Infos und link zur Herstellerseite...", piclink: cityDetail_1, visible: false},
		"Zing Trip Core LS": { price: "7.999", manufacturer: "Diamant", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "City-Hybrid-Bike", description: "Infos und link zur Herstellerseite...", piclink: cityDetail_2, visible: false},
        "Zing Trip Core MS": { price: "7.999", manufacturer: "Diamant", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "City-Hybrid-Bike", description: "Infos und link zur Herstellerseite...", piclink: cityDetail_3, visible: false},
	});

    let trekkingIntersectionMap: Record<string, bikeInfo> = $state({
        "Kathmandu SLX": { price: "4.899", manufacturer: "Cube", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watth: "800 Wh", category: "City-Hybrid-Bike", description: "Infos und link zur Herstellerseite...", piclink: trekkingDetail_1, visible: false},
	});

    let sectionMap: Record<number, boolean> = $state({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
    })

    let sectionStep = $state(0);
    var prevStep = 0;

    function setSection( section: number ) {
        if (section === prevStep) {
            sectionMap[prevStep] = false;
            prevStep = 0;
            sectionStep = 0;
        } else {
            sectionStep = section;
            sectionMap[prevStep] = false;
            prevStep = sectionStep;            
            sectionMap[ section ] = true;
        }

    }

    onMount(() => {
        animateScroll.scrollToTop({ duration: 1, delay: 250 });
        console.log('[    reset scroll position  # bikes   ] - onMount');
    })

	$effect(() => {
		const techstage: HTMLElement | null = document.getElementById("techstage");
		const scrollYstage: HTMLElement | null = document.getElementById("scrollyStage");
       
        if (!techstage || !scrollYstage) return;
        scrollYWidth = scrollYstage?.scrollWidth - scrollYstage?.clientWidth;

        // @ts-ignore
		// var techOverflow = document.body.scrollHeight - techstage.scrollHeight;
		// if (techOverflow > window.innerHeight) {
		// 	techOverflow = window.innerHeight;
		// }

        var maxScrollY = techstage.scrollHeight - window.innerHeight;

		scrollQuot = 1 / maxScrollY * scrollY;
        var scrollSection = Math.floor(scrollQuot * 100);

        if (scrollSection >= -1 && scrollSection < 7) {
            if (prevStep != 0) {
                setSection(0);
            }
        } else if (scrollSection >= 7 && scrollSection < 23) {
            if (prevStep != 1) {
                setSection(1);
            }
        } else if (scrollSection >= 23 && scrollSection < 43) {
            if (prevStep != 2) {
                setSection(2);
            }
        } else if (scrollSection >= 43 && scrollSection < 58) {
            if (prevStep != 3) {
                setSection(3);
            }
        } else if (scrollSection >= 58 && scrollSection < 79) {
            if (prevStep != 4) {
                setSection(4);
            }
        } else if (scrollSection >= 79 && scrollSection < 94) {
            if (prevStep != 5) {
                setSection(5);
            }
        } else {
            if (prevStep != 6) {
                setSection(6);
            }
        }
        
        scrollYstage?.scroll({
            left: (scrollYWidth * scrollQuot),
            behavior: "auto",
        });

        // console.log(scrollSection);
        // console.log(scrollQuot);

	});

</script>

<svelte:head>
	<title>TECH/BIKES | SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>
<svelte:window bind:scrollY />

<div class="relative h-[400vh]" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" id="techstage" in:fade={{duration: 300, delay: 250}} out:fade >
    <div class="sticky top-0 left-0 z-10 h-screen w-full">
        <h1 class="container mx-auto px-4 pb-8 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-neutral-800 text-sm lg:text-base xl:text-xl text-shadow-sm" in:fade={{duration: 300, delay: 600 }} out:fade>WIR HABEN FÜR JEDEN DEINER TRAILS DAS PASSENDE BIKE | <span class="font-bold"> TECH/BIKES</span></h1>
        {#if sectionStep === 0}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_overview.jpg?format=avif;webp" alt="Bikes - Hero Shot - Overview" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center _mix-blend-multiply brightness-120 contrast-115" in:fade={{duration: 300}} out:fade />
        {/if}
        {#if sectionStep === 1}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_mountain.jpg?format=avif;webp" alt="Bikes - Hero Shot - MOUNTAIN" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 2}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_road.jpg?format=avif;webp" alt="Bikes - Hero Shot - ROAD" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 3}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_gravel.jpg?format=avif;webp" alt="Bikes - Hero Shot - City" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 4}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_city.jpg?format=avif;webp" alt="Bikes - Hero Shot - City" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 5}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_trekking.jpg?format=avif;webp" alt="Bikes - Hero Shot - City" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 6}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_kids.jpg?format=avif;webp" alt="Bikes - Hero Shot - City" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        <div class="fixed mix-blend-hard-light z-20 left-0 {sectionStep === 0 ? 'bottom-1/4' : 'bottom-0'} overflow-hidden h-40 lg:h-70 w-full transition-all duration-1000 ease-in-out" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" >
            {#if sectionStep === 0}
                <h2 class="relative left-[50%] lg:left-[30%] top-[45%] lg:top-10 -translate-1/2 z-12 container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-white uppercase _text-shadow-lg" in:fly={{ y:50, duration: 300, delay: 600 }} out:fade >WELCHEN
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-neutral-100/20">
                        <span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold text-shadow-none">TRAIL</span>
                    </span>
                    NIMMST DU HEUTE?
                </h2>
            {/if}
            <div class="absolute top-0 left-0 bg-hero w-full h-full z-10" in:fade={{duration: 300, delay: 600}} out:fade ></div>
            <div class="absolute flex gap-20 lg:gap-40 w-full h-40 lg:h-70 top-1/2_ bottom-0 overflow-hidden overflow-x-scroll_ noscrollbar" id="scrollyStage" in:fly={{x: 200, duration: 300, delay: 600}} out:fade >    
                <button class="font-headline font-bold {sectionStep === 1 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase tracking-tighter z-11 pl-80 lg:pl-220">Mountain</button>
                <button class="font-headline font-bold {sectionStep === 2 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.05em] z-11">Road</button>
                <button class="font-headline font-bold {sectionStep === 3 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11">Gravel</button>
                <button class="font-headline font-bold {sectionStep === 4 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11">City</button>
                <button class="font-headline font-bold {sectionStep === 5 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11">Trekking</button>
                <button class="font-headline font-bold {sectionStep === 6 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11 pr-20 lg:pr-70">Kids</button>
            </div>
        </div>
        <div class="+container +mx-auto w-full absolute top-0 grid grid-cols-6 gap-2 place-items-center h-screen">
            <div class="col-span-6 w-full" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>
                <!-- <p>
                    <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer text-neutral-300" onclick={() => { setSection(1) }}> E-BIKES </button>
                    <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer text-neutral-300" onclick={() => { setSection(2) }}> RENNRAD </button>
                    <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer text-neutral-300" onclick={() => { setSection(3) }}> GRAVELBIKES </button>
                </p> -->
                {#if sectionStep === 1}
                    <ul class="max-h-[75vh] lg:max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500 noscrollbar" bind:this={mountainUlElement} use:dragscroll in:fade={{duration: 200, delay: 500 }} >
                        {#each Object.keys(mountainIntersectionMap) as key (key)}
                            <!-- {#key intersectionMap[key]} -->
                                <li
                                    class="relative font-regular text-white h-[55vh]_ h-115 lg:h-[calc(22vw)] min-w-[400px] min-w-7/8_ lg:min-w-5/8 marker:content-none transition-all {!mountainIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100'} duration-500"
                                    use:intersect={{ threshold: 0.2, root: mountainUlElement }}
                                    onintersect={(event) => (
                                        mountainIntersectionMap[key].visible = event.detail.entries[0].isIntersecting,
                                        console.log(event.detail)
                                        )}
                                >
                                    <svg data-width="1211" data-height="453" viewBox="0 0 1211 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 lg:top-0 left-0 fill-neutral-300/86 max-lg:origin-top max-lg:scale-y-300 max-lg:translate-y-1/3">
                                        <path d="M157.33 52.0575L1089.12 0L1211 400.442L965.033 448.996L0 453L44.3184 91.1005L157.33 52.0575Z" />
                                    </svg>
                                    <svg data-width="547" data-height="353" viewBox="0 0 547 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-5 lg:-top-3 left-1/2 w-3/4 lg:w-1/2 scale-x-50_ -translate-x-1/2 lg:-translate-x-7/8 max-lg:origin-top_ max-lg:scale-y-150_ max-lg:translate-y-1/3 text-white">
                                        <path d="M71 52L491.5 0L546.5 400L435.5 448.5L0 452.5L20 91L71 52Z" fill="currentcolor"/>
                                    </svg>
                                    {#if mountainIntersectionMap[key].category != ""}
                                            <!-- image: {mountainIntersectionMap[key].category}  -->
                                        <!-- <img src="{'/src/lib/assets/images/bikes/heros/' + mountainIntersectionMap[key].category}" alt="Bikes - Hero Shot - Übersicht" class="_" draggable="false" /> -->
                                        <!-- <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={mountainDetail_1}  class="_" draggable="false" /> -->
                                        <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={mountainIntersectionMap[key].piclink} class="absolute min-lg:-top-20 min-lg:left-3/8_ min-lg:w-2/3 min-lg:-translate-x-1/36" draggable="false" />
                                    {/if}

                                    <div class="relative w-full top-7 text-neutral-900 h-full flex flex-col lg:flex-row">
                                        <div class="basis-1/2 bg-amber-600/50_">
                                             <!-- [ img-placeholder ] -->
                                        </div>
                                        <div class="basis-1/2 flex flex-col place-items-center_ bg-amber-800/50_">
                                            <div class="text-xl font-bold grow mt-6 lg:mt-2 ml-15 uppercase">
                                                {key}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-32">
                                                <span class="uppercase font-semibold text-neutral-50">Category </span> {mountainIntersectionMap[key].category}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-35">
                                                <span class="uppercase font-semibold text-neutral-100">Marke </span> {mountainIntersectionMap[key].manufacturer}
                                            </div>
                                            <div class="grow text-sm ml-8 lg:ml-38">
                                                <span class="uppercase font-semibold text-neutral-100">Suspension </span> {mountainIntersectionMap[key].suspension}
                                            </div>
                                            <div class="grow ml-8 mb-3 lg:ml-38">
                                                <span class="text-xs">{mountainIntersectionMap[key].description}</span>
                                            </div>
                                            {#if mountainIntersectionMap[key].motor}
                                                <div class="flex-none text-sm ml-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Motortyp </span> {mountainIntersectionMap[key].motor}
                                                </div>
                                                <div class="flex-none text-sm ml-8 mb-3 lg:mb-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Leistung </span> {mountainIntersectionMap[key].watth}
                                                </div>    
                                            {/if}
                                            
                                            <div class="absolute bottom-4 lg:bottom-14 right-4 lg:right-6 -rotate-32 lg:-rotate-14 font-bold text-2xl lg:text-4xl">
                                               <span class="absolute text-xs font-normal text-neutral-800 -top-2"> ab €: </span> {mountainIntersectionMap[key].price}
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                            </li>
                            <!-- {/key} -->
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 2}
                    <ul class="max-h-[75vh] lg:max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500 noscrollbar" bind:this={racerUlElement} use:dragscroll in:fade={{duration: 200, delay: 500 }} >
                        {#each Object.keys(roadIntersectionMap) as key (key)}
                            <!-- {#key intersectionMap[key]} -->
                                <li
                                    class="relative font-regular text-white h-[55vh]_ h-115 lg:h-[calc(22vw)] min-w-[400px] min-w-7/8_ lg:min-w-5/8 marker:content-none transition-all {!roadIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100'} duration-500"
                                    use:intersect={{ threshold: 0.2, root: racerUlElement }}
                                    onintersect={(event) => (
                                        roadIntersectionMap[key].visible = event.detail.entries[0].isIntersecting,
                                        console.log(event.detail)
                                        )}
                                >
                                    <svg data-width="1211" data-height="453" viewBox="0 0 1211 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 lg:top-0 left-0 fill-neutral-300/86 max-lg:origin-top max-lg:scale-y-300 max-lg:translate-y-1/3">
                                        <path d="M157.33 52.0575L1089.12 0L1211 400.442L965.033 448.996L0 453L44.3184 91.1005L157.33 52.0575Z" />
                                    </svg>
                                    <svg data-width="547" data-height="353" viewBox="0 0 547 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-5 lg:-top-3 left-1/2 w-3/4 lg:w-1/2 scale-x-50_ -translate-x-1/2 lg:-translate-x-7/8 max-lg:origin-top_ max-lg:scale-y-150_ max-lg:translate-y-1/3 text-white">
                                        <path d="M71 52L491.5 0L546.5 400L435.5 448.5L0 452.5L20 91L71 52Z" fill="currentcolor"/>
                                    </svg>
                                    {#if roadIntersectionMap[key].category != ""}
                                            <!-- image: {mountainIntersectionMap[key].category}  -->
                                        <!-- <img src="{'/src/lib/assets/images/bikes/heros/' + mountainIntersectionMap[key].category}" alt="Bikes - Hero Shot - Übersicht" class="_" draggable="false" /> -->
                                        <!-- <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={mountainDetail_1}  class="_" draggable="false" /> -->
                                        <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={roadIntersectionMap[key].piclink} class="absolute min-lg:-top-20 min-lg:left-3/8_ min-lg:w-2/3 min-lg:-translate-x-1/36" draggable="false" />
                                    {/if}

                                    <div class="relative w-full top-7 text-neutral-900 h-full flex flex-col lg:flex-row">
                                        <div class="basis-1/2 bg-amber-600/50_">
                                             <!-- [ img-placeholder ] -->
                                        </div>
                                        <div class="basis-1/2 flex flex-col place-items-center_ bg-amber-800/50_">
                                            <div class="text-xl font-bold grow mt-6 lg:mt-2 ml-15 uppercase">
                                                {key}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-32">
                                                <span class="uppercase font-semibold text-neutral-50">Category </span> {roadIntersectionMap[key].category}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-35">
                                                <span class="uppercase font-semibold text-neutral-100">Marke </span> {roadIntersectionMap[key].manufacturer}
                                            </div>
                                            <div class="grow text-sm ml-8 lg:ml-38">
                                                <span class="uppercase font-semibold text-neutral-100">Suspension </span> {roadIntersectionMap[key].suspension}
                                            </div>
                                            <div class="grow ml-8 mb-3 lg:ml-38">
                                                <span class="text-xs">{roadIntersectionMap[key].description}</span>
                                            </div>
                                            {#if roadIntersectionMap[key].motor}
                                                <div class="flex-none text-sm ml-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Motortyp </span> {roadIntersectionMap[key].motor}
                                                </div>
                                                <div class="flex-none text-sm ml-8 mb-3 lg:mb-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Leistung </span> {roadIntersectionMap[key].watth}
                                                </div>    
                                            {/if}
                                            
                                            <div class="absolute bottom-4 lg:bottom-14 right-4 lg:right-6 -rotate-32 lg:-rotate-14 font-bold text-2xl lg:text-4xl">
                                               <span class="absolute text-xs font-normal text-neutral-800 -top-2"> ab €: </span> {roadIntersectionMap[key].price}
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                            </li>
                            <!-- {/key} -->
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 3}
                    <ul class="max-h-[75vh] lg:max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500 noscrollbar" bind:this={gravelUlElement} use:dragscroll in:fade={{duration: 200, delay: 500 }} >
                        {#each Object.keys(gravelIntersectionMap) as key (key)}
                            <!-- {#key intersectionMap[key]} -->
                                <li
                                    class="relative font-regular text-white h-[55vh]_ h-115 lg:h-[calc(22vw)] min-w-[400px] min-w-7/8_ lg:min-w-5/8 marker:content-none transition-all {!gravelIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100'} duration-500"
                                    use:intersect={{ threshold: 0.2, root: gravelUlElement }}
                                    onintersect={(event) => (
                                        gravelIntersectionMap[key].visible = event.detail.entries[0].isIntersecting,
                                        console.log(event.detail)
                                        )}
                                >
                                    <svg data-width="1211" data-height="453" viewBox="0 0 1211 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 lg:top-0 left-0 fill-neutral-300/86 max-lg:origin-top max-lg:scale-y-300 max-lg:translate-y-1/3">
                                        <path d="M157.33 52.0575L1089.12 0L1211 400.442L965.033 448.996L0 453L44.3184 91.1005L157.33 52.0575Z" />
                                    </svg>
                                    <svg data-width="547" data-height="353" viewBox="0 0 547 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-5 lg:-top-3 left-1/2 w-3/4 lg:w-1/2 scale-x-50_ -translate-x-1/2 lg:-translate-x-7/8 max-lg:origin-top_ max-lg:scale-y-150_ max-lg:translate-y-1/3 text-white">
                                        <path d="M71 52L491.5 0L546.5 400L435.5 448.5L0 452.5L20 91L71 52Z" fill="currentcolor"/>
                                    </svg>
                                    {#if gravelIntersectionMap[key].category != ""}
                                            <!-- image: {mountainIntersectionMap[key].category}  -->
                                        <!-- <img src="{'/src/lib/assets/images/bikes/heros/' + mountainIntersectionMap[key].category}" alt="Bikes - Hero Shot - Übersicht" class="_" draggable="false" /> -->
                                        <!-- <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={mountainDetail_1}  class="_" draggable="false" /> -->
                                        <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={gravelIntersectionMap[key].piclink} class="absolute min-lg:-top-20 min-lg:left-3/8_ min-lg:w-2/3 min-lg:-translate-x-1/36" draggable="false" />
                                    {/if}

                                    <div class="relative w-full top-7 text-neutral-900 h-full flex flex-col lg:flex-row">
                                        <div class="basis-1/2 bg-amber-600/50_">
                                             <!-- [ img-placeholder ] -->
                                        </div>
                                        <div class="basis-1/2 flex flex-col place-items-center_ bg-amber-800/50_">
                                            <div class="text-xl font-bold grow mt-6 lg:mt-2 ml-15 uppercase">
                                                {key}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-32">
                                                <span class="uppercase font-semibold text-neutral-50">Category </span> {gravelIntersectionMap[key].category}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-35">
                                                <span class="uppercase font-semibold text-neutral-100">Marke </span> {gravelIntersectionMap[key].manufacturer}
                                            </div>
                                            <div class="grow text-sm ml-8 lg:ml-38">
                                                <span class="uppercase font-semibold text-neutral-100">Suspension </span> {gravelIntersectionMap[key].suspension}
                                            </div>
                                            <div class="grow ml-8 mb-3 lg:ml-38">
                                                <span class="text-xs">{gravelIntersectionMap[key].description}</span>
                                            </div>
                                            {#if gravelIntersectionMap[key].motor}
                                                <div class="flex-none text-sm ml-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Motortyp </span> {gravelIntersectionMap[key].motor}
                                                </div>
                                                <div class="flex-none text-sm ml-8 mb-3 lg:mb-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Leistung </span> {gravelIntersectionMap[key].watth}
                                                </div>    
                                            {/if}
                                            
                                            <div class="absolute bottom-4 lg:bottom-14 right-4 lg:right-6 -rotate-32 lg:-rotate-14 font-bold text-2xl lg:text-4xl">
                                               <span class="absolute text-xs font-normal text-neutral-800 -top-2"> ab €: </span> {gravelIntersectionMap[key].price}
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                            </li>
                            <!-- {/key} -->
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 4}
                    <ul class="max-h-[75vh] lg:max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500 noscrollbar" bind:this={cityUlElement} use:dragscroll in:fade={{duration: 200, delay: 500 }} >
                        {#each Object.keys(cityIntersectionMap) as key (key)}
                            <!-- {#key intersectionMap[key]} -->
                                <li
                                    class="relative font-regular text-white h-[55vh]_ h-115 lg:h-[calc(22vw)] min-w-[400px] min-w-7/8_ lg:min-w-5/8 marker:content-none transition-all {!cityIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100'} duration-500"
                                    use:intersect={{ threshold: 0.2, root: cityUlElement }}
                                    onintersect={(event) => (
                                        cityIntersectionMap[key].visible = event.detail.entries[0].isIntersecting,
                                        console.log(event.detail)
                                        )}
                                >
                                    <svg data-width="1211" data-height="453" viewBox="0 0 1211 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 lg:top-0 left-0 fill-neutral-300/86 max-lg:origin-top max-lg:scale-y-300 max-lg:translate-y-1/3">
                                        <path d="M157.33 52.0575L1089.12 0L1211 400.442L965.033 448.996L0 453L44.3184 91.1005L157.33 52.0575Z" />
                                    </svg>
                                    <svg data-width="547" data-height="353" viewBox="0 0 547 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-5 lg:-top-3 left-1/2 w-3/4 lg:w-1/2 scale-x-50_ -translate-x-1/2 lg:-translate-x-7/8 max-lg:origin-top_ max-lg:scale-y-150_ max-lg:translate-y-1/3 text-white">
                                        <path d="M71 52L491.5 0L546.5 400L435.5 448.5L0 452.5L20 91L71 52Z" fill="currentcolor"/>
                                    </svg>
                                    {#if cityIntersectionMap[key].category != ""}
                                            <!-- image: {mountainIntersectionMap[key].category}  -->
                                        <!-- <img src="{'/src/lib/assets/images/bikes/heros/' + mountainIntersectionMap[key].category}" alt="Bikes - Hero Shot - Übersicht" class="_" draggable="false" /> -->
                                        <!-- <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={mountainDetail_1}  class="_" draggable="false" /> -->
                                        <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={cityIntersectionMap[key].piclink} class="absolute min-lg:-top-20 min-lg:left-3/8_ min-lg:w-2/3 min-lg:-translate-x-1/36" draggable="false" />
                                    {/if}

                                    <div class="relative w-full top-7 text-neutral-900 h-full flex flex-col lg:flex-row">
                                        <div class="basis-1/2 bg-amber-600/50_">
                                             <!-- [ img-placeholder ] -->
                                        </div>
                                        <div class="basis-1/2 flex flex-col place-items-center_ bg-amber-800/50_">
                                            <div class="text-xl font-bold grow mt-6 lg:mt-2 ml-15 uppercase">
                                                {key}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-32">
                                                <span class="uppercase font-semibold text-neutral-50">Category </span> {cityIntersectionMap[key].category}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-35">
                                                <span class="uppercase font-semibold text-neutral-100">Marke </span> {cityIntersectionMap[key].manufacturer}
                                            </div>
                                            <div class="grow text-sm ml-8 lg:ml-38">
                                                <span class="uppercase font-semibold text-neutral-100">Suspension </span> {cityIntersectionMap[key].suspension}
                                            </div>
                                            <div class="grow ml-8 mb-3 lg:ml-38">
                                                <span class="text-xs">{cityIntersectionMap[key].description}</span>
                                            </div>
                                            {#if cityIntersectionMap[key].motor}
                                                <div class="flex-none text-sm ml-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Motortyp </span> {cityIntersectionMap[key].motor}
                                                </div>
                                                <div class="flex-none text-sm ml-8 mb-3 lg:mb-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Leistung </span> {cityIntersectionMap[key].watth}
                                                </div>    
                                            {/if}
                                            
                                            <div class="absolute bottom-4 lg:bottom-14 right-4 lg:right-6 -rotate-32 lg:-rotate-14 font-bold text-2xl lg:text-4xl">
                                               <span class="absolute text-xs font-normal text-neutral-800 -top-2"> ab €: </span> {cityIntersectionMap[key].price}
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                            </li>
                            <!-- {/key} -->
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 5}
                    <ul class="max-h-[75vh] lg:max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500 noscrollbar" bind:this={trekkingUlElement} use:dragscroll in:fade={{duration: 200, delay: 500 }} >
                        {#each Object.keys(trekkingIntersectionMap) as key (key)}
                            <!-- {#key intersectionMap[key]} -->
                                <li
                                    class="relative font-regular text-white h-[55vh]_ h-115 lg:h-[calc(22vw)] min-w-[400px] min-w-7/8_ lg:min-w-5/8 marker:content-none transition-all {!trekkingIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100'} duration-500"
                                    use:intersect={{ threshold: 0.2, root: trekkingUlElement }}
                                    onintersect={(event) => (
                                        trekkingIntersectionMap[key].visible = event.detail.entries[0].isIntersecting,
                                        console.log(event.detail)
                                        )}
                                >
                                    <svg data-width="1211" data-height="453" viewBox="0 0 1211 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 lg:top-0 left-0 fill-neutral-300/86 max-lg:origin-top max-lg:scale-y-300 max-lg:translate-y-1/3">
                                        <path d="M157.33 52.0575L1089.12 0L1211 400.442L965.033 448.996L0 453L44.3184 91.1005L157.33 52.0575Z" />
                                    </svg>
                                    <svg data-width="547" data-height="353" viewBox="0 0 547 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-5 lg:-top-3 left-1/2 w-3/4 lg:w-1/2 scale-x-50_ -translate-x-1/2 lg:-translate-x-7/8 max-lg:origin-top_ max-lg:scale-y-150_ max-lg:translate-y-1/3 text-white">
                                        <path d="M71 52L491.5 0L546.5 400L435.5 448.5L0 452.5L20 91L71 52Z" fill="currentcolor"/>
                                    </svg>
                                    {#if trekkingIntersectionMap[key].category != ""}
                                            <!-- image: {mountainIntersectionMap[key].category}  -->
                                        <!-- <img src="{'/src/lib/assets/images/bikes/heros/' + mountainIntersectionMap[key].category}" alt="Bikes - Hero Shot - Übersicht" class="_" draggable="false" /> -->
                                        <!-- <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={mountainDetail_1}  class="_" draggable="false" /> -->
                                        <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={trekkingIntersectionMap[key].piclink} class="absolute min-lg:-top-20 min-lg:left-3/8_ min-lg:w-2/3 min-lg:-translate-x-1/36" draggable="false" />
                                    {/if}

                                    <div class="relative w-full top-7 text-neutral-900 h-full flex flex-col lg:flex-row">
                                        <div class="basis-1/2 bg-amber-600/50_">
                                             <!-- [ img-placeholder ] -->
                                        </div>
                                        <div class="basis-1/2 flex flex-col place-items-center_ bg-amber-800/50_">
                                            <div class="text-xl font-bold grow mt-6 lg:mt-2 ml-15 uppercase">
                                                {key}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-32">
                                                <span class="uppercase font-semibold text-neutral-50">Category </span> {trekkingIntersectionMap[key].category}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-35">
                                                <span class="uppercase font-semibold text-neutral-100">Marke </span> {trekkingIntersectionMap[key].manufacturer}
                                            </div>
                                            <div class="grow text-sm ml-8 lg:ml-38">
                                                <span class="uppercase font-semibold text-neutral-100">Suspension </span> {trekkingIntersectionMap[key].suspension}
                                            </div>
                                            <div class="grow ml-8 mb-3 lg:ml-38">
                                                <span class="text-xs">{trekkingIntersectionMap[key].description}</span>
                                            </div>
                                            {#if trekkingIntersectionMap[key].motor}
                                                <div class="flex-none text-sm ml-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Motortyp </span> {trekkingIntersectionMap[key].motor}
                                                </div>
                                                <div class="flex-none text-sm ml-8 mb-3 lg:mb-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Leistung </span> {trekkingIntersectionMap[key].watth}
                                                </div>    
                                            {/if}
                                            
                                            <div class="absolute bottom-4 lg:bottom-14 right-4 lg:right-6 -rotate-32 lg:-rotate-14 font-bold text-2xl lg:text-4xl">
                                               <span class="absolute text-xs font-normal text-neutral-800 -top-2"> ab €: </span> {trekkingIntersectionMap[key].price}
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                            </li>
                            <!-- {/key} -->
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 6}
                    <div class=" container mx-auto w-full flex flex-col md:flex-row bg-neutral-300/86 font-regular text-sm/5 text-neutral-800" in:fade={{duration: 200, delay: 500 }}>
                        <div class="w-full md:w-75 p-5 bg-neutral-950 content-center"><img src={kubike} alt="kubike Kinderfahrräder Logo"></div>
                        <div class="text-center p-3 content-center justify-items-center w-full"><span class="font-semibold text-base/7 uppercase ">Große Qualität auch für kleine BIKER</span><br><a class="text-hero after:content-['_↗']" href="https://www.kubikes.de/kubikes_shop/" target="_blank">Kubike Bikes</a> gibts bei uns im Laden zu bewundern - schaut einfach vorbei!</div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>