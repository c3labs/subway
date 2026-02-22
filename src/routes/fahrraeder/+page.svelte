<script lang="ts">
    import mountainDetail_1 from '$lib/assets/images/bikes/mountain/trek_26_PowerflyPlus6.png?enhanced';
    import mountainDetail_2 from '$lib/assets/images/bikes/mountain/trek_26_PowerflyFS4Equipped.png?enhanced';
    import mountainDetail_3 from '$lib/assets/images/bikes/mountain/trek_26_Marlin5.png?enhanced';
    import mountainDetail_4 from '$lib/assets/images/bikes/mountain/cube_26_ReactionHybridProFE.png?enhanced';
    import mountainDetail_5 from '$lib/assets/images/bikes/mountain/cube_26_StereoHybridONE22.png?enhanced';
    import mountainDetail_6 from '$lib/assets/images/bikes/mountain/trek_26_Rail99XOAXS.png?enhanced';
    import mountainDetail_7 from '$lib/assets/images/bikes/mountain/trek_26_TopFuel99.png?enhanced';
    import mountainDetail_8 from '$lib/assets/images/bikes/mountain/trek_26_FuelPlusEX98.png?enhanced';
    import mountainDetail_9 from '$lib/assets/images/bikes/mountain/trek_26_FuelEX98.png?enhanced';
    import mountainDetail_10 from '$lib/assets/images/bikes/mountain/trek_26_Procaliber97.png?enhanced';
    import mountainDetail_11 from '$lib/assets/images/bikes/mountain/cube_26_AimPro.png?enhanced';

    import roadDetail_1 from '$lib/assets/images/bikes/road/trek_26_MadoneSL7.png?enhanced';
    import roadDetail_2 from '$lib/assets/images/bikes/road/trek_26_DomaneSL7.png?enhanced';
    import roadDetail_3 from '$lib/assets/images/bikes/road/trek_26_DomanePlusSLR7.png?enhanced';
    
    import gravelDetail_1 from '$lib/assets/images/bikes/gravel/trek_26_CheckpointSL5AXS.png?enhanced';
    import gravelDetail_2 from '$lib/assets/images/bikes/gravel/trek_26_CheckpointPlusSL5.png?enhanced';
    import gravelDetail_3 from '$lib/assets/images/bikes/gravel/trek_26_CheckmateSLR7AXS.png?enhanced';
    import gravelDetail_4 from '$lib/assets/images/bikes/gravel/trek_26_FXSport5Carbon.png?enhanced';

    import citytrekDetail_1 from '$lib/assets/images/bikes/citytrek/diamant_26_Suvea.png?enhanced';
    import citytrekDetail_2 from '$lib/assets/images/bikes/citytrek/diamant_26_ZingTripPlusLS400wh.png?enhanced';
    import citytrekDetail_3 from '$lib/assets/images/bikes/citytrek/diamant_26_ZingTripCoreMS400wh.png?enhanced';
    import citytrekDetail_4 from '$lib/assets/images/bikes/citytrek/cube_26_KathmanduHybridPro.png?enhanced';
    import citytrekDetail_5 from '$lib/assets/images/bikes/citytrek/trek_26_DistrictPlus3LowstepBelt.png?enhanced';
    import citytrekDetail_6 from '$lib/assets/images/bikes/citytrek/diamant_26_MahonTripCoreSO.png?enhanced';
    import citytrekDetail_7 from '$lib/assets/images/bikes/citytrek/cube_26_NatureEXCAllroud.png?enhanced';
    
    import kubike from '$lib/assets/images/logo/manufacturer/logo_kubikes_transparent_logo_logo.png';
    import ExternalLink from '@lucide/svelte/icons/external-link';

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
    let citytrekUlElement: HTMLUListElement | undefined = $state();

    let scrollY = $state(0);
	let scrollQuot = $state(0);
    let scrollYWidth: number = $state(0);

    // @ts-ignore
    type enhPicture = Picture;

    interface bikeInfo {
        price: string;
        manufacturer: string;
        motor: string;
        watth: string;
        category: string;
        suspension: string;
        description: string;
        prodlink: string;
        piclink: enhPicture;
        visible: boolean;
    }

	let mountainIntersectionMap: Record<string, bikeInfo> = $state({
        "Powerfly+": { price: "3.999,-", manufacturer: "Trek", suspension: "", motor: "Bosch Performance Line CX", watth: "Bis zu 800 Wh", category: "E-MTB", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/mountainbikes/e-mountainbikes/powerfly/c/B337/", piclink: mountainDetail_1, visible: false},
        "Powerfly+ FS": { price: "4.799,-", manufacturer: "Trek", suspension: "", motor: "Bosch Performance Line CX", watth: "Bis zu 800 Wh", category: "Fullsuspension E-MTB", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/mountainbikes/e-mountainbikes/powerfly/c/B337/", piclink: mountainDetail_2, visible: false},
        "Marlin": { price: "679,-", manufacturer: "Trek", suspension: "", motor: "", watth: "", category: "Hardtail", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/mountainbikes/crosscountry-mountainbikes/marlin/c/B321/", piclink: mountainDetail_3, visible: false},
        "Reaction Hybrid": { price: "3.399,-", manufacturer: "Cube", suspension: "", motor: "Bosch Performance Line CX", watth: "600-800 Wh", category: "E-MTB", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.cube.eu/e-bikes/mountainbike/hardtail/reaction-hybrid?p=1&properties=50007c1c87def5a29c9dbef5ecde3a12", piclink: mountainDetail_4, visible: false},
        "Stereo Hybrid": { price: "3.999,-", manufacturer: "Cube", suspension: "", motor: "Bosch Performance Line CX/CX-R", watth: "800 Wh", category: "Fullsuspension E-MTB", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.cube.eu/e-bikes/mountainbike/fullsuspension/stereo-hybrid-one44", piclink: mountainDetail_5, visible: false},
        "Rail+": { price: "4.999,-", manufacturer: "Trek", suspension: "", motor: "Bosch Performance Line CX", watth: "800 Wh", category: "Fullsuspension E-MTB", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/mountainbikes/e-mountainbikes/rail/c/B344/", piclink: mountainDetail_6, visible: false},
        "Top Fuel": { price: "8.499,-", manufacturer: "Trek", suspension: "", motor: "", watth: "", category: "Fullsuspension", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/mountainbikes/trail-mountainbikes/topfuel/c/B311/", piclink: mountainDetail_7, visible: false},
        "Fuel+": { price: "8.499,-", manufacturer: "Trek", suspension: "", motor: "TQ HPR60", watth: "580 Wh", category: "Fullsuspension E-MTB", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/mountainbikes/e-mountainbikes/fuel/c/B370/", piclink: mountainDetail_8, visible: false},
        "Fuel": { price: "6.499,-", manufacturer: "Trek", suspension: "", motor: "", watth: "", category: "Fullsuspension", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/mountainbikes/trail-mountainbikes/all-mountain-bikes/fuel/c/B360/", piclink: mountainDetail_9, visible: false},
        "Procaliber": { price: "1.199,-", manufacturer: "Trek", suspension: "", motor: "", watth: "", category: "Fullsuspension", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/mountainbikes/crosscountry-mountainbikes/procaliber/c/B312/", piclink: mountainDetail_10, visible: false},
        "Aim": { price: "599,-", manufacturer: "Cube", suspension: "", motor: "", watth: "", category: "Hardtail", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.cube.eu/bikes/mountainbike/hardtail/aim", piclink: mountainDetail_11, visible: false},
	});

    let roadIntersectionMap: Record<string, bikeInfo> = $state({
        "Madone": { price: "5.999,-", manufacturer: "Trek", suspension: "", motor: "", watth: "", category: "Aero-Rennrad", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/rennräder/performance-rennräder/madone/c/B213/", piclink: roadDetail_1, visible: false},
		"Domane": { price: "5.499,-", manufacturer: "Trek", suspension: "", motor: "", watth: "", category: "Endurance-Rennrad", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/rennräder/performance-rennräder/domane/c/B221/", piclink: roadDetail_2, visible: false},
		"Domane+": { price: "8.999,-", manufacturer: "Trek", suspension: "", motor: "TQ", watth: "360 Wh", category: "E-Rennrad", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/e-bikes/e-rennräder/domane-slr/c/B221-11/", piclink: roadDetail_3, visible: false},
	});

    let gravelIntersectionMap: Record<string, bikeInfo> = $state({
        "Checkpoint": { price: "2.999,-", manufacturer: "Trek", suspension: "", motor: "", watth: "", category: "Gravelbike", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/touren-und-bikepacking-fahrräder/checkpoint/c/B224/", piclink: gravelDetail_1, visible: false},
		"Checkpoint+": { price: "4.999,-", manufacturer: "Trek", suspension: "", motor: "TQ", watth: "360 Wh", category: "E-Gravelbike", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/rennräder/gravelbikes/e-gravelbikes/checkpoint/c/B224-5/", piclink: gravelDetail_2, visible: false},
        "Checkmate": { price: "7.499,-", manufacturer: "Trek", suspension: "", motor: "", watth: "", category: "Gravel-Racebike", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/rennräder/gravelbikes/gravelbikes-mit-rennlenker/checkmate/c/B225/", piclink: gravelDetail_3, visible: false},
        "FX": { price: "1.999,-", manufacturer: "Trek", suspension: "", motor: "", watth: "", category: "Fitnessbike", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/alltagsräder/fitnessräder/fx/fxsport/c/B421-1/", piclink: gravelDetail_4, visible: false},
	});

    let citytrekIntersectionMap: Record<string, bikeInfo> = $state({
        "Suvea": { price: "4.599,-", manufacturer: "Diamant", suspension: "", motor: "Bosch Mittelmotor", watth: "Bis zu 800 Wh", category: "E-SUV", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/diamant-fahrräder/diamant-e-bikes/diamant-suvea/c/DB365/", piclink: citytrekDetail_1, visible: false},
		"Zing Trip Plus Lowstep": { price: "3.349,-", manufacturer: "Diamant", suspension: "", motor: "Bosch Mittelmotor", watth: "Bis zu 800 Wh", category: "E-Trekking", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/diamant-fahrräder/diamant-trekking/diamant-zing/c/DB450/", piclink: citytrekDetail_2, visible: false},
        "Zing Trip Core Midstep": { price: "3.149,-", manufacturer: "Diamant", suspension: "", motor: "Bosch Mittelmotor", watth: "Bis zu 800 Wh", category: "E-Trekking", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/diamant-fahrräder/diamant-trekking/diamant-zing/c/DB450/", piclink: citytrekDetail_3, visible: false},
        "Kathmandu Hybrid": { price: "3.599,-", manufacturer: "Cube", suspension: "", motor: "Bosch CX", watth: "800 Wh", category: "E-Trekking", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.cube.eu/e-bikes/trekking/tour/kathmandu-hybrid?p=1&properties=50007c1c87def5a29c9dbef5ecde3a12", piclink: citytrekDetail_4, visible: false},
        "District+": { price: "3.349,-", manufacturer: "Trek", suspension: "", motor: "Bosch Mittelmotor", watth: "Bis zu 800 Wh", category: "E-Citybike", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/alltagsräder/elektrische-alltagsräder/district/c/B474/", piclink: citytrekDetail_5, visible: false},
        "Mahon": { price: "1.199,-", manufacturer: "Diamant", suspension: "", motor: "", watth: "", category: "Trekking", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.trekbikes.com/de/de_DE/bikes/diamant-fahrräder/diamant-bikes-ohne-motor/diamant-mahon/c/DB385/", piclink: citytrekDetail_6, visible: false},
        "Nature": { price: "1.199,-", manufacturer: "Cube", suspension: "", motor: "", watth: "", category: "Trekking", description: "Dieses Model führen wir in mehreren Varianten, Details bei uns im Laden oder auf der ", prodlink: "https://www.cube.eu/bikes/trekking/tour/nature?p=1&properties=50007c1c87def5a29c9dbef5ecde3a12", piclink: citytrekDetail_7, visible: false},
	});
    
    let sectionMap: Record<number, boolean> = $state({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
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

        if (scrollSection >= -1 && scrollSection < 5) {
            if (prevStep != 0) {
                setSection(0);
            }
        } else if (scrollSection >= 5 && scrollSection < 23) {
            if (prevStep != 1) {
                setSection(1);
            }
        } else if (scrollSection >= 23 && scrollSection < 44) {
            if (prevStep != 2) {
                setSection(2);
            }
        } else if (scrollSection >= 44 && scrollSection < 70) {
            if (prevStep != 3) {
                setSection(3);
            }
        } else if (scrollSection >= 70 && scrollSection < 94) {
            if (prevStep != 4) {
                setSection(4);
            }
        } else {
            if (prevStep != 5) {
                setSection(5);
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
	<title>FAHRRÄDER | SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>
<svelte:window bind:scrollY />

<div class="relative h-[600vh]" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" id="techstage" in:fade={{duration: 300, delay: 250}} out:fade >
    <div class="sticky top-0 left-0 z-10 h-screen w-full">
        <h1 class="container mx-auto px-4 pb-8 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-neutral-50 text-sm lg:text-base xl:text-xl text-shadow-sm" in:fade={{duration: 300, delay: 600 }} out:fade>WIR HABEN FÜR JEDEN DEINER TRAILS DAS PASSENDE BIKE | <span class="font-bold"> FAHRRÄDER</span></h1>
        {#if sectionStep === 0}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_overview.jpg?format=avif;webp" alt="Bikes - Hero Shot - Overview" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center brightness-120 contrast-115" in:fade={{duration: 300}} out:fade />
        {/if}
        {#if sectionStep === 1}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_mountain.jpg?format=avif;webp" alt="Bikes - Hero Shot - MOUNTAIN" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 2}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_road.jpg?format=avif;webp" alt="Bikes - Hero Shot - ROAD" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 3}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_gravel.jpg?format=avif;webp" alt="Bikes - Hero Shot - Gravel" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 4}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_city.jpg?format=avif;webp" alt="Bikes - Hero Shot - City" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 5}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_kids.jpg?format=avif;webp" alt="Bikes - Hero Shot - Kids" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
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
            <div class="absolute flex gap-20 lg:gap-120 w-full h-40 lg:h-70 top-1/2_ bottom-0 overflow-hidden overflow-x-scroll_ noscrollbar" id="scrollyStage" in:fly={{x: 200, duration: 300, delay: 600}} out:fade >    
                <button class="font-headline font-bold {sectionStep === 1 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase tracking-tighter z-11 pl-80 lg:pl-220">Mountain</button>
                <button class="font-headline font-bold {sectionStep === 2 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.05em] z-11">Road</button>
                <button class="font-headline font-bold {sectionStep === 3 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11">Gravel</button>
                <button class="font-headline font-bold {sectionStep === 4 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.06em] z-11">City/Trekking</button>
                <button class="font-headline font-bold {sectionStep === 5 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11 pr-20 lg:pr-120">Kids</button>
            </div>
        </div>
        <div class="+container +mx-auto w-full absolute top-0 grid grid-cols-6 gap-2 place-items-center h-screen">
            <div class="col-span-6 w-full" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>
                {#if sectionStep === 1}
                    <ul class="max-h-[75vh] lg:max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500 noscrollbar" bind:this={mountainUlElement} use:dragscroll in:fade={{duration: 200, delay: 500 }} >
                        {#each Object.keys(mountainIntersectionMap) as key (key)}
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
                                    {#if mountainIntersectionMap[key].piclink != ""}
                                        <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={mountainIntersectionMap[key].piclink} class="absolute -top-15 min-lg:-top-25 min-lg:w-2/3 min-lg:-translate-x-1/36 min-lg:-translate-y-1/24 select-none" draggable="false" />
                                    {/if}
                                    <div class="relative w-full top-7 text-neutral-900 h-full flex flex-col lg:flex-row">
                                        <div class="basis-1/2 bg-amber-600/50_">
                                             <!-- [ img-placeholder ] -->
                                        </div>
                                        <div class="basis-1/2 flex flex-col place-items-center_ bg-amber-800/50_ select-none">
                                            <div class="text-xl font-bold grow mt-6 lg:mt-2 ml-15 uppercase">
                                                {key}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-32">
                                                <span class="uppercase font-semibold text-neutral-50">Kategorie </span> {mountainIntersectionMap[key].category}
                                            </div>
                                            <div class="grow text-sm ml-8 lg:ml-35">
                                                <span class="uppercase font-semibold text-neutral-100">Hersteller </span> {mountainIntersectionMap[key].manufacturer}
                                            </div>
                                            {#if mountainIntersectionMap[key].suspension}
                                                <div class="grow text-sm ml-8 lg:ml-38">
                                                    <span class="uppercase font-semibold text-neutral-100">Suspension </span> {mountainIntersectionMap[key].suspension}
                                                </div>
                                            {/if}
                                            <div class="grow-2 ml-8 mb-3 lg:ml-38 mr-14 leading-5 text-sm">
                                                <span class="_text-sm">{mountainIntersectionMap[key].description}<a class="text-hero inline-flex" href="{mountainIntersectionMap[key].prodlink}" target="_blank">Herstellerseite  <ExternalLink size={18} strokeWidth={2.25} class="pl-0.5"/></a></span>
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
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 2}
                    <ul class="max-h-[75vh] lg:max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500 noscrollbar" bind:this={racerUlElement} use:dragscroll in:fade={{duration: 200, delay: 500 }} >
                        {#each Object.keys(roadIntersectionMap) as key (key)}
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
                                    {#if roadIntersectionMap[key].piclink != ""}
                                        <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={roadIntersectionMap[key].piclink} class="absolute -top-15 min-lg:-top-20 min-lg:left-3/8_ min-lg:w-2/3 min-lg:-translate-x-1/36 min-lg:-translate-y-1/24 select-none" draggable="false" />
                                    {/if}
                                    <div class="relative w-full top-7 text-neutral-900 h-full flex flex-col lg:flex-row">
                                        <div class="basis-1/2 bg-amber-600/50_">
                                             <!-- [ img-placeholder ] -->
                                        </div>
                                        <div class="basis-1/2 flex flex-col place-items-center_ bg-amber-800/50_ select-none">
                                            <div class="text-xl font-bold grow mt-6 lg:mt-2 ml-15 uppercase">
                                                {key}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-32">
                                                <span class="uppercase font-semibold text-neutral-50">Kategorie </span> {roadIntersectionMap[key].category}
                                            </div>
                                            <div class="grow text-sm ml-8 lg:ml-35">
                                                <span class="uppercase font-semibold text-neutral-100">Hersteller </span> {roadIntersectionMap[key].manufacturer}
                                            </div>
                                            {#if roadIntersectionMap[key].suspension}
                                                <div class="grow text-sm ml-8 lg:ml-38">
                                                    <span class="uppercase font-semibold text-neutral-100">Suspension </span> {roadIntersectionMap[key].suspension}
                                                </div>
                                            {/if}
                                            <div class="grow-2 ml-8 mb-3 lg:ml-38 mr-14 leading-5 text-sm">
                                                <span class="_text-sm">{roadIntersectionMap[key].description}<a class="text-hero inline-flex" href="{roadIntersectionMap[key].prodlink}" target="_blank">Herstellerseite  <ExternalLink size={18} strokeWidth={2.25} class="pl-0.5"/></a></span>
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
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 3}
                    <ul class="max-h-[75vh] lg:max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500 noscrollbar" bind:this={gravelUlElement} use:dragscroll in:fade={{duration: 200, delay: 500 }} >
                        {#each Object.keys(gravelIntersectionMap) as key (key)}
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
                                    {#if gravelIntersectionMap[key].piclink != ""}
                                        <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={gravelIntersectionMap[key].piclink} class="absolute min-lg:-top-20 min-lg:left-3/8_ min-lg:w-2/3 min-lg:-translate-x-1/36 select-none" draggable="false" />
                                    {/if}

                                    <div class="relative w-full top-7 text-neutral-900 h-full flex flex-col lg:flex-row">
                                        <div class="basis-1/2 bg-amber-600/50_">
                                             <!-- [ img-placeholder ] -->
                                        </div>
                                        <div class="basis-1/2 flex flex-col place-items-center_ bg-amber-800/50_ select-none">
                                            <div class="text-xl font-bold grow mt-6 lg:mt-2 ml-15 uppercase">
                                                {key}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-32">
                                                <span class="uppercase font-semibold text-neutral-50">Kategorie </span> {gravelIntersectionMap[key].category}
                                            </div>
                                            <div class="grow text-sm ml-8 lg:ml-35">
                                                <span class="uppercase font-semibold text-neutral-100">Hersteller </span> {gravelIntersectionMap[key].manufacturer}
                                            </div>
                                            {#if gravelIntersectionMap[key].suspension}
                                                <div class="grow text-sm ml-8 lg:ml-38">
                                                    <span class="uppercase font-semibold text-neutral-100">Suspension </span> {gravelIntersectionMap[key].suspension}
                                                </div>
                                            {/if}
                                            <div class="grow-2 ml-8 mb-3 lg:ml-38 mr-14 leading-5 text-sm">
                                                <span class="_text-sm">{gravelIntersectionMap[key].description}<a class="text-hero inline-flex" href="{gravelIntersectionMap[key].prodlink}" target="_blank">Herstellerseite  <ExternalLink size={18} strokeWidth={2.25} class="pl-0.5"/></a></span>
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
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 4}
                    <ul class="max-h-[75vh] lg:max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500 noscrollbar" bind:this={citytrekUlElement} use:dragscroll in:fade={{duration: 200, delay: 500 }} >
                        {#each Object.keys(citytrekIntersectionMap) as key (key)}
                                <li
                                    class="relative font-regular text-white h-[55vh]_ h-115 lg:h-[calc(22vw)] min-w-[400px] min-w-7/8_ lg:min-w-5/8 marker:content-none transition-all {!citytrekIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100'} duration-500"
                                    use:intersect={{ threshold: 0.2, root: citytrekUlElement }}
                                    onintersect={(event) => (
                                        citytrekIntersectionMap[key].visible = event.detail.entries[0].isIntersecting,
                                        console.log(event.detail)
                                        )}
                                >
                                    <svg data-width="1211" data-height="453" viewBox="0 0 1211 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 lg:top-0 left-0 fill-neutral-300/86 max-lg:origin-top max-lg:scale-y-300 max-lg:translate-y-1/3">
                                        <path d="M157.33 52.0575L1089.12 0L1211 400.442L965.033 448.996L0 453L44.3184 91.1005L157.33 52.0575Z" />
                                    </svg>
                                    <svg data-width="547" data-height="353" viewBox="0 0 547 453" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-5 lg:-top-3 left-1/2 w-3/4 lg:w-1/2 scale-x-50_ -translate-x-1/2 lg:-translate-x-7/8 max-lg:origin-top_ max-lg:scale-y-150_ max-lg:translate-y-1/3 text-white">
                                        <path d="M71 52L491.5 0L546.5 400L435.5 448.5L0 452.5L20 91L71 52Z" fill="currentcolor"/>
                                    </svg>
                                    {#if citytrekIntersectionMap[key].piclink != ""}
                                        <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={citytrekIntersectionMap[key].piclink} class="absolute min-lg:-top-20 min-lg:left-3/8_ min-lg:w-2/3 min-lg:-translate-x-1/36 select-none" draggable="false" />
                                    {/if}

                                    <div class="relative w-full top-7 text-neutral-900 h-full flex flex-col lg:flex-row">
                                        <div class="basis-1/2 bg-amber-600/50_">
                                             <!-- [ img-placeholder ] -->
                                        </div>
                                        <div class="basis-1/2 flex flex-col place-items-center_ bg-amber-800/50_ select-none">
                                            <div class="text-xl font-bold grow mt-6 lg:mt-2 ml-15 uppercase">
                                                {key}
                                            </div>
                                            <div class="flex-none text-sm ml-8 lg:ml-32">
                                                <span class="uppercase font-semibold text-neutral-50">Kategorie </span> {citytrekIntersectionMap[key].category}
                                            </div>
                                            <div class="grow text-sm ml-8 lg:ml-35">
                                                <span class="uppercase font-semibold text-neutral-100">Hersteller </span> {citytrekIntersectionMap[key].manufacturer}
                                            </div>
                                            {#if citytrekIntersectionMap[key].suspension}
                                                <div class="grow text-sm ml-8 lg:ml-38">
                                                    <span class="uppercase font-semibold text-neutral-100">Suspension </span> {citytrekIntersectionMap[key].suspension}
                                                </div>
                                            {/if}
                                            <div class="grow-2 ml-8 mb-3 lg:ml-38 mr-14 leading-5 text-sm">
                                                <span class="_text-sm">{citytrekIntersectionMap[key].description}<a class="text-hero inline-flex" href="{citytrekIntersectionMap[key].prodlink}" target="_blank">Herstellerseite  <ExternalLink size={18} strokeWidth={2.25} class="pl-0.5"/></a></span>
                                            </div>
                                            {#if citytrekIntersectionMap[key].motor}
                                                <div class="flex-none text-sm ml-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Motortyp </span> {citytrekIntersectionMap[key].motor}
                                                </div>
                                                <div class="flex-none text-sm ml-8 mb-3 lg:mb-8 lg:ml-32">
                                                    <span class="uppercase font-semibold text-neutral-100">Leistung </span> {citytrekIntersectionMap[key].watth}
                                                </div>    
                                            {/if}
                                            <div class="absolute bottom-4 lg:bottom-14 right-4 lg:right-6 -rotate-32 lg:-rotate-14 font-bold text-2xl lg:text-4xl">
                                               <span class="absolute text-xs font-normal text-neutral-800 -top-2"> ab €: </span> {citytrekIntersectionMap[key].price}
                                            </div>
                                        </div>
                                    </div>
                            </li>
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 5}
                    <div class=" container mx-auto w-full flex flex-col md:flex-row bg-neutral-300/86 font-regular text-sm/5 text-neutral-800" in:fade={{duration: 200, delay: 500 }}>
                        <div class="w-full md:w-75 p-5 bg-neutral-950 content-center"><img src={kubike} alt="kubike Kinderfahrräder Logo"></div>
                        <div class="text-center p-3 content-center justify-items-center w-full"><span class="font-semibold text-base/7 uppercase ">Große Qualität auch für kleine BIKER</span><br><a class="text-hero inline-flex" href="https://www.kubikes.de/kubikes_shop/" target="_blank">Kubike Bikes  <ExternalLink size={18} strokeWidth={2.25} class="pl-0.5"/></a> gibts bei uns im Laden zu bewundern - schaut einfach vorbei!</div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>