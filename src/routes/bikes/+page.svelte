<script lang="ts">
	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
    import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';

	let ebikeUlElement: HTMLUListElement | undefined = $state();
    let racerUlElement: HTMLUListElement | undefined = $state();
    let gravelUlElement: HTMLUListElement | undefined = $state();
    

    interface bikeInfo {
        price: string;
        manufacturer: string;
        visible: boolean;
    }

	let ebikeIntersectionMap: Record<string, bikeInfo> = $state({
		"Rail+": { price: "2.899", manufacturer: "Trek", visible: false},
		"Powerfly+ Gen4": { price: "1.999", manufacturer: "Trek", visible: false},
		"Powerfly+ FS": { price: "2.699", manufacturer: "Trek", visible: false},
		"Powerfly EQ": { price: "2.999", manufacturer: "Trek", visible: false},
		"Powerfly": { price: "3.999", manufacturer: "Trek", visible: false},
		"Stereo Hybrid One44": { price: "4.999", manufacturer: "Cube", visible: false},
		"Reaction Hybrid PRO": { price: "3.199", manufacturer: "Cube", visible: false},
		"Reaction Hybrid RACE": { price: "3.599", manufacturer: "Cube", visible: false},
		"Reaction Hybrid ALLROAD": { price: "4.199", manufacturer: "Cube", visible: false},
	});

    let racerIntersectionMap: Record<string, bikeInfo> = $state({
        "Madone": { price: "9.899", manufacturer: "Trek", visible: false},
		"Speed Conceot": { price: "9.899", manufacturer: "Trek", visible: false},
		"Domane SLR": { price: "10.699", manufacturer: "Trek", visible: false},
		"Domane+ SLR": { price: "13.999", manufacturer: "Trek", visible: false},
		"Checkmate SLR": { price: "12.999", manufacturer: "Trek", visible: false},
	});

    let gravelIntersectionMap: Record<string, bikeInfo> = $state({
        "Checkpoint": { price: "6.899", manufacturer: "Trek", visible: false},
		"Checkmate SLR": { price: "7.999", manufacturer: "Trek", visible: false},
	});

    let sectionMap: Record<number, boolean> = $state({
        1: false,
        2: false,
        3: false,
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
</script>

<div class="relative h-screen" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark">
    <div class="sticky top-0 left-0 z-10 h-screen w-full">
        <h1 class="container mx-auto px-4 pb-8 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-neutral-800 text-sm lg:text-base xl:text-xl text-shadow-sm" in:fade={{duration: 300, delay: 600 }} out:fade>WIR HABEN FÜR JEDEN DEINER TRAILS DAS PASSENDE BIKE | <span class="font-bold"> TECH/BIKES</span></h1>
        {#if sectionStep === 0}
            <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_4.jpg?format=avif;webp" alt="Bikes - Hero Shot - Übersicht" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade />
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
        <div class="container mx-auto grid grid-cols-6 gap-2 place-items-center h-screen">
            <div class="col-span-6 w-full" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>
                <p>
                    <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer text-neutral-300" onclick={() => { setSection(1) }}> E-BIKES </button>
                    <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer text-neutral-300" onclick={() => { setSection(2) }}> RENNRAD </button>
                    <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer text-neutral-300" onclick={() => { setSection(3) }}> GRAVELBIKES </button>
                </p>

                <ul class="{sectionMap[1] ? 'max-h-[50vh]' : 'max-h-[1px]'} w-full space-y-4 overflow-hidden overflow-y-auto p-4 col-span-6 transition-all duration-500" bind:this={ebikeUlElement} >
                    {#each Object.keys(ebikeIntersectionMap) as key (key)}
                        <!-- {#key intersectionMap[key]} -->
                            <li
                                class=" odd:bg-neutral-100 even:bg-hero h-[200px] marker:content-none transition-opacity {!ebikeIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100"'} duration-500"
                                use:intersect={{ threshold: 0.99, root: ebikeUlElement }}
                                onintersect={(event) => (
                                    ebikeIntersectionMap[key].visible = event.detail.entries[0].isIntersecting,
                                    console.log(event.detail)
                                    )}
                            >Bike Detail: {key} | {ebikeIntersectionMap[key].price} | {ebikeIntersectionMap[key].manufacturer}</li>
                        <!-- {/key} -->
                    {/each}
                </ul>
                <ul class="{sectionMap[2] ? 'max-h-[50vh]' : 'max-h-[1px]'} w-full space-y-4 overflow-hidden overflow-y-auto p-4 col-span-6 transition-all duration-500" bind:this={racerUlElement} >
                    {#each Object.keys(racerIntersectionMap) as key (key)}
                        <!-- {#key intersectionMap[key]} -->
                            <li
                                class=" odd:bg-neutral-100 even:bg-hero h-[200px] marker:content-none transition-opacity {!racerIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100"'} duration-500"
                                use:intersect={{ threshold: 0.99, root: racerUlElement }}
                                onintersect={(event) => (
                                    racerIntersectionMap[key].visible = event.detail.entries[0].isIntersecting
                                    )}
                            >Bike Detail: {key} | {racerIntersectionMap[key].price} | {racerIntersectionMap[key].manufacturer}</li>
                        <!-- {/key} -->
                    {/each}
                </ul>
                <ul class="{sectionMap[3] ? 'max-h-[50vh]' : 'max-h-[1px]'} w-full space-y-4 overflow-hidden overflow-y-auto p-4 col-span-6 transition-all duration-500" bind:this={gravelUlElement} >
                    {#each Object.keys(gravelIntersectionMap) as key (key)}
                        <!-- {#key intersectionMap[key]} -->
                            <li
                                class=" odd:bg-neutral-100 even:bg-hero h-[200px] marker:content-none transition-opacity {!gravelIntersectionMap[key].visible ? 'opacity-0' : 'opacity-100"'} duration-500"
                                use:intersect={{ threshold: 0.99, root: gravelUlElement }}
                                onintersect={(event) => (
                                    gravelIntersectionMap[key].visible = event.detail.entries[0].isIntersecting
                                    )}
                            >Bike Detail: {key} | {gravelIntersectionMap[key].price} | {gravelIntersectionMap[key].manufacturer}</li>
                        <!-- {/key} -->
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>