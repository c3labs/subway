<script lang="ts">
    import mountainPic_1 from '$lib/assets/images/bikes/heros/bikeHero_0.jpg?enhanced';
    import mountainPic_4 from '$lib/assets/images/bikes/heros/bikeHero_4.jpg?enhanced';

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
        watt: string;
        imgpath: string;
        piclink: enhPicture;
        visible: boolean;
    }

	let mountainIntersectionMap: Record<string, bikeInfo> = $state({
		"Rail+": { price: "7.499", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watt: "800W", imgpath: "bikeHero_0.jpg", piclink: mountainPic_1, visible: false},
		"Slash+": { price: "6.999", manufacturer: "Trek", suspension: "FULL - F: 170 - B: 170", motor: "Bosch", watt: "800W", imgpath: "bikeHero_0.jpg", piclink: mountainPic_4, visible: false},
		"Powerfly+ FS": { price: "5.299", manufacturer: "Trek", suspension: "FULL - F: 130 - B: 120", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Powerfly+ Equipped": { price: "4.799", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watt: "600W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Powerfly FS+ Gen4": { price: "3.999", manufacturer: "Trek", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Stereo Hybrid One44": { price: "4.999", manufacturer: "Cube", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Reaction Hybrid PRO": { price: "3.199", manufacturer: "Cube", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Reaction Hybrid RACE": { price: "3.599", manufacturer: "Cube", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Reaction Hybrid ALLROAD": { price: "4.199", manufacturer: "Cube", suspension: "FULL - F: xxx - B: xxx", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
	});

    let roadIntersectionMap: Record<string, bikeInfo> = $state({
        "Madone": { price: "9.899", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Speed Conceot": { price: "9.899", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Domane SLR": { price: "10.699", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Domane+ SLR": { price: "13.999", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Checkmate SLR": { price: "12.999", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
	});

    let gravelIntersectionMap: Record<string, bikeInfo> = $state({
        "Checkpoint": { price: "6.899", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
		"Checkmate SLR": { price: "7.999", manufacturer: "Trek", suspension: "FULL - F: 160 - B: 160", motor: "Bosch", watt: "800W", imgpath: "", piclink: mountainPic_1, visible: false},
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

<div class="relative h-[400vh] _h-screen" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" id="techstage" in:fade={{duration: 300, delay: 250}} out:fade >
    <div class="sticky top-0 left-0 z-10 h-screen w-full bg-hero_">
        <h1 class="container mx-auto px-4 pb-8 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-neutral-800 text-sm lg:text-base xl:text-xl text-shadow-sm" in:fade={{duration: 300, delay: 600 }} out:fade>WIR HABEN FÜR JEDEN DEINER TRAILS DAS PASSENDE BIKE | <span class="font-bold"> TECH/BIKES</span></h1>
        {#if sectionStep === 0}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_4.jpg?format=avif;webp" alt="Bikes - Hero Shot - Übersicht" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center _mix-blend-multiply brightness-120 contrast-115" in:fade={{duration: 300}} out:fade />
        {/if}
        {#if sectionStep === 1}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_1.jpg?format=avif;webp" alt="Bikes - Hero Shot - E-Bikes" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 2}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_2.jpg?format=avif;webp" alt="Bikes - Hero Shot - Rennräder" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        {#if sectionStep === 3}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_3.jpg?format=avif;webp" alt="Bikes - Hero Shot - Gravelbikes" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
        {/if}
        <div class="absolute left-0 {sectionStep === 0 ? 'bottom-1/4' : 'bottom-0'} overflow-hidden h-40 lg:h-80 w-full transition-all duration-1000 ease-in-out">
            {#if sectionStep === 0}
                <h2 class="relative left-[50%] lg:left-[30%] top-[45%] lg:top-10 -translate-1/2 z-12 container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-white uppercase _text-shadow-lg" in:fly={{ y:50, duration: 300, delay: 600 }} out:fade >WELCHEN
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
                        <span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold text-shadow-none">TRAIL</span>
                    </span>
                    NIMMST DU HEUTE?
                </h2>
            {/if}
            <div class="absolute top-0 left-0 bg-hero w-full h-full mix-blend-multiply z-10 -rotate-6_ scale-60_" in:fade={{duration: 300, delay: 600}} out:fade ></div>
            <div class="absolute flex gap-20 lg:gap-40 w-full h-40 lg:h-80 top-1/2_ bottom-0 overflow-hidden overflow-x-scroll_ noscrollbar" id="scrollyStage" in:fly={{x: 200, duration: 300, delay: 800}} out:fade >    
                <button class="font-headline font-bold {sectionStep === 1 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase tracking-tighter z-11 pl-80 lg:pl-220">Mountain</button>
                <button class="font-headline font-bold {sectionStep === 2 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.05em] z-11">Road</button>
                <button class="font-headline font-bold {sectionStep === 3 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11">Gravel</button>
                <button class="font-headline font-bold {sectionStep === 4 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11">City</button>
                <button class="font-headline font-bold {sectionStep === 5 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11">Trekking</button>
                <button class="font-headline font-bold {sectionStep === 6 ? 'text-white' : 'text-neutral-900'} text-8xl lg:text-[240px] uppercase -tracking-[.03em] z-11 pr-20 lg:pr-70">Kids</button>
            </div>
        </div>
        <div class="container mx-auto grid grid-cols-6 gap-2 place-items-center h-screen">
            <div class="col-span-6 w-full" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>
                <!-- <p>
                    <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer text-neutral-300" onclick={() => { setSection(1) }}> E-BIKES </button>
                    <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer text-neutral-300" onclick={() => { setSection(2) }}> RENNRAD </button>
                    <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer text-neutral-300" onclick={() => { setSection(3) }}> GRAVELBIKES </button>
                </p> -->
                {#if sectionStep === 1}
                    <ul class="max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500" bind:this={mountainUlElement} use:dragscroll >
                        {#each Object.keys(mountainIntersectionMap) as key (key)}
                            <!-- {#key intersectionMap[key]} -->
                                <li
                                    class="bg-neutral-100 h-[400px] min-w-[400px] marker:content-none transition-all {!mountainIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100'} duration-500"
                                    use:intersect={{ threshold: 0.4, root: mountainUlElement }}
                                    onintersect={(event) => (
                                        mountainIntersectionMap[key].visible = event.detail.entries[0].isIntersecting,
                                        console.log(event.detail)
                                        )}
                                >
                                {#if mountainIntersectionMap[key].imgpath != ""}
                                        image: {mountainIntersectionMap[key].imgpath} 
                                    <!-- <img src="{'/src/lib/assets/images/bikes/heros/' + mountainIntersectionMap[key].imgpath}" alt="Bikes - Hero Shot - Übersicht" class="_" draggable="false" /> -->
                                    <!-- <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={mountainPic_1}  class="_" draggable="false" /> -->
                                    <enhanced:img alt="Bikes - Hero Shot - Übersicht" src={mountainIntersectionMap[key].piclink}  class="_" draggable="false" />
                                {/if}
                                    <div>Detail: {key} | {mountainIntersectionMap[key].price} | {mountainIntersectionMap[key].manufacturer}</div>
                            </li>
                            <!-- {/key} -->
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 2}
                    <ul class="max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500" bind:this={racerUlElement} use:dragscroll >
                        {#each Object.keys(roadIntersectionMap) as key (key)}
                            <!-- {#key intersectionMap[key]} -->
                                <li
                                    class="bg-neutral-100 h-[400px] min-w-[400px] marker:content-none transition-all {!roadIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100'} duration-500"
                                    use:intersect={{ threshold: 0.6, root: racerUlElement }}
                                    onintersect={(event) => (
                                        roadIntersectionMap[key].visible = event.detail.entries[0].isIntersecting
                                        )}
                                >Bike Detail: {key} | {roadIntersectionMap[key].price} | {roadIntersectionMap[key].manufacturer}</li>
                            <!-- {/key} -->
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 3}
                    <ul class="max-h-[50vh] w-full space-y-4 flex gap-10 overflow-hidden overflow-x-auto p-4 col-span-6 transition-all duration-500" bind:this={gravelUlElement} use:dragscroll >
                        {#each Object.keys(gravelIntersectionMap) as key (key)}
                            <!-- {#key intersectionMap[key]} -->
                                <li
                                    class="bg-neutral-100 h-[400px] min-w-[400px] marker:content-none transition-all {!gravelIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100'} duration-500"
                                    use:intersect={{ threshold: 0.6, root: gravelUlElement }}
                                    onintersect={(event) => (
                                        gravelIntersectionMap[key].visible = event.detail.entries[0].isIntersecting
                                        )}
                                >Bike Detail: {key} | {gravelIntersectionMap[key].price} | {gravelIntersectionMap[key].manufacturer}</li>
                            <!-- {/key} -->
                        {/each}
                    </ul>
                {/if}
                {#if sectionStep === 4}
                    CITY
                {/if}
                {#if sectionStep === 5}
                    TREKKING
                {/if}
                {#if sectionStep === 6}
                    KIDS
                {/if}
            </div>
        </div>
    </div>
</div>