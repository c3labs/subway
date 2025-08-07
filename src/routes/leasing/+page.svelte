<script lang="ts">
	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
	import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';
    import Marqueeck from '@arisbh/marqueeck';
    
    import IconArrowLeft from '@lucide/svelte/icons/chevron-left';
    import IconArrowRight from '@lucide/svelte/icons/chevron-right';

    import lp_bikeleasing from '$lib/assets/images/logo/leasingpartner/bikeleasing-logo.png';
    import lp_businessbike from '$lib/assets/images/logo/leasingpartner/businessbike-logo.png';
    import lp_companybike from '$lib/assets/images/logo/leasingpartner/companybike-logo.png';
    import lp_dd from '$lib/assets/images/logo/leasingpartner/dd-logo.png';
    import lp_dienstradleasing from '$lib/assets/images/logo/leasingpartner/dienstradleasing-logo.png';
    import lp_eleasa from '$lib/assets/images/logo/leasingpartner/eleasa-logo.png';
    import lp_jobrad from '$lib/assets/images/logo/leasingpartner/jobrad-logo.png';
    import lp_leaseabike from '$lib/assets/images/logo/leasingpartner/leaseabike-logo.png';
    import lp_linexo from '$lib/assets/images/logo/leasingpartner/linexo-logo.webp';

    // Source Data
    const steps = [
        { label: 'Step 1', description: 'The description of step 1.' },
        { label: 'Step 2', description: 'The description of step 2.' },
        { label: 'Step 3', description: 'The description of step 3.' },
        { label: 'Step 4', description: 'The description of step 4.' },
        { label: 'Step 5', description: 'The description of step 5.' }
    ];

    // Reactive
    let currentStep = $state(0);
    const isFirstStep = $derived(currentStep === 0);
    const isLastStep = $derived(currentStep === steps.length - 1);

    /** Determine if on the current step. */
    function isCurrentStep(index: number) {
        return currentStep === index;
    }

    /** Jump to a particular step. */
    function setStep(index: number) {
        currentStep = index;
    }

    /** Progress to the previous step. */
    function prevStep() {
        currentStep--;
    }

    /** Progress to the next step. */
    function nextStep() {
        currentStep++;
    }

    onMount(() => {
        animateScroll.scrollToTop({ duration: 1, delay: 250 });
        console.log('[    reset scroll position  # leasing   ] - onMount');
    })

</script>

<div class="relative h-screen" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark">
    <h1 class="container mx-auto px-4 pb-8 z-11 sticky grid-cols-none top-32 lg:top-48 xl:top-44 col-span-6 font-extralight font-headline text-neutral-100 text-sm lg:text-base xl:text-xl text-shadow-sm" in:fade={{duration: 300, delay: 600 }} out:fade>DER KOMFORTABLE WEG ZUM TRAUMRAD | <span class="font-bold"> BIKE LEASING</span></h1>
    <enhanced:img src="/src/lib/assets/images/bikes/heros/bikeHero_overview.jpg?format=avif;webp" alt="Bikes - Hero Shot - Overview" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" in:fade={{duration: 300}} out:fade />
    <!-- <div class="absolute sticky_ top-0 left-0 z-10 h-screen w-full"> -->
        <div class="container mx-auto w-full grid grid-cols-6 gap-2 place-items-center h-full">
            <div class="col-span-2 row-span-2 text-neutral-300 " in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><p>BIKELEASING MADE EASY!!</p></div>
            <div class="col-span-2 text-neutral-300 "><p>............... irgendwas anderes ..............</p></div>
            <div class="col-span-2 text-neutral-300 "><p>BIKELEASING MADE EASY!!</p></div>
            <div class="col-span-4 text-neutral-300 ">
                <div class="w-full">
                <!-- Stepper -->
                    <div class="space-y-24">
                        <!-- Timeline -->
                        <div class="relative">
                        <!-- Numerals -->
                        <div class="flex justify-between items-center gap-4">
                            {#each steps as step, i}
                            <!-- Numeral Button -->
                            <button
                                class="btn-icon btn-icon-sm rounded-full {isCurrentStep(i) ? 'preset-filled-primary-500' : 'preset-filled-surface-200-800'}"
                                onclick={() => setStep(i)}
                                title={step.label}
                            >
                                <span class="font-bold">{i + 1}</span>
                            </button>
                            {/each}
                        </div>
                        <!-- Line -->
                        <hr class="hr !border-surface-200-800 absolute top-[50%] left-0 right-0 z-[-1]" />
                        </div>
                        <!-- Loop all steps -->
                        {#each steps as step, i (step)}
                        <!-- Filter to current step only -->
                        {#if isCurrentStep(i)}
                            <!-- Individual steps -->
                            <div class="card bg-surface-100-900 p-10 space-y-2 text-center">
                            <h2 class="h3">{step.label}</h2>
                            <p>{step.description}</p>
                            </div>
                        {/if}
                        {/each}
                        <!-- Navigation -->
                        <nav class="flex justify-between items-center gap-4">
                        <!-- Back Button -->
                        <button type="button" class="btn preset-tonal hover:preset-filled" onclick={prevStep} disabled={isFirstStep}>
                            <IconArrowLeft size={18} />
                            <span>zurück</span>
                        </button>
                        <!-- Next Button -->
                        <button type="button" class="btn preset-tonal hover:preset-filled" onclick={nextStep} disabled={isLastStep}>
                            <span>weiter</span>
                            <IconArrowRight size={18} />
                        </button>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="col-span-6 text-neutral-300 w-full h-14 mb-10 mix-blend-luminosity hover:mix-blend-normal">
                <Marqueeck options={{ direction: "left", speed: 20, hoverSpeed: 0, brakeDuration: 300, onHover: "stop", gap: 60 }} >
                    <!-- <p> MARQUEE AREA </p> -->
                    <img src={lp_bikeleasing} alt="Logo bikeleasing" class="h-14 object-contain">
                    <img src={lp_businessbike} alt="Logo businessbike" class="h-14 object-contain">
                    <img src={lp_companybike} alt="Logo companybike" class="h-14 object-contain">
                    <img src={lp_dd} alt="Logo deutsche dienstrad" class="h-14 object-contain">
                    <img src={lp_dienstradleasing} alt="Logo kazenmaier dienstradleasing" class="h-14 object-contain">
                    <img src={lp_eleasa} alt="Logo eleasa" class="h-14 object-contain">
                    <img src={lp_jobrad} alt="Logo jobrad" class="h-14 object-contain">
                    <img src={lp_leaseabike} alt="Logo leaseabike" class="h-14 object-contain">
                    <img src={lp_linexo} alt="Logo linexo" class="h-14 object-contain">
                </Marqueeck>
            </div>
        </div>
    <!-- </div> -->
</div>

