<script lang="ts">
	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
	import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';
    import Marqueeck from '@arisbh/marqueeck';
    
    import IconArrowLeft from '@lucide/svelte/icons/chevron-left';
    import IconArrowRight from '@lucide/svelte/icons/chevron-right';
    import CheckMark from '@lucide/svelte/icons/check';

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
        { label: 'Rücksprache mit dem Arbeitgeber', description: 'Gibt es schon einen Leasingpartner? <b>Wenn nein:</b> Termin bei uns ausmachen und Informationen über die Leasinganbeiter einholen.' },
        { label: 'Traumbike auswählen', description: 'Schau dich bei uns um und such dir dein Traumrad aus unserem Line-up aus. Wir haben für jeden deiner Trails das passende Bike.' },
        { label: 'Angebot einholen', description: 'Wir erstellen Dir ein individuelles Angebot und laden es auf dem Portal des Leasinganbieters deiner Firma hoch.' },
        { label: 'Abschluss Leasingvertrag', description: 'Du bestätigst das Angebot und lässt es Dir von deinem Arbeitgeber freigeben.' },
        { label: 'Vertragsübergabe an Subway', description: 'Nachdem der Leasingvertrag bestätigt wurde, wird dieser an uns übergeben und wir starten mit dem Aufbau deines Bikes.' },
        { label: 'Dein Fahrrad ist abholbereit', description: 'Dein Fahrrad ist nun abholbereit und startklar! Du kannst es bei uns abholen und bekommst eine fachmännische Übergabe.' }
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
    <enhanced:img src="/src/lib/assets/images/leasing/hero_leasing.jpg?format=avif;webp" alt="Bikes - Hero Shot - Bike-Leasing" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" in:fade={{duration: 300}} out:fade />
    <!-- <div class="absolute sticky_ top-0 left-0 z-10 h-screen w-full"> -->
        <div class="container mx-auto w-full grid grid-cols-6 gap-2 place-items-center h-full">
            <div class="col-span-2 row-span-2 text-neutral-300 " in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><p>Als Fachhändler sind wir gerne dein erster Ansprechpartner, wenn es um das Thema Fahrrad-Mitarbeiterleasing geht. Von der Erstberatung zu den grundsätzlichen Abläufen eines Leasings, über die professionelle Beratung bei der Suche nach deinem Traumbike, bis hin zur unkomplizierten Abwicklung von Service- und Reparaturaufträgen im Rahmen deines Leasings - wir sind stets an deiner Seite und unterstützen dich bei allen Fragen.</p></div>
            <div class="col-span-2 text-neutral-300 "><p>............... irgendwas anderes ..............</p></div>
            <div class="col-span-2 text-neutral-300 "><p>BIKELEASING MADE EASY!!</p></div>
            <div class="col-span-4 text-neutral-300 w-3/4">
                <div class="w-full">
                <!-- Stepper -->
                    <div class="space-y-8 w-[600px]_">
                        <!-- Timeline -->
                        <div class="relative">
                            <!-- Numerals -->
                            <div class="flex justify-between items-center gap-0">
                                {#each steps as step, i}
                                <!-- Numeral Button -->
                                <button
                                    class="btn-icon btn-icon-2xl rounded-full border-3 cursor-pointer {isCurrentStep(i) ? 'bg-stepper border-stepper' : 'bg-neutral-800/40 border-neutral-100/50'} {currentStep > i ? 'bg-stepper/90 border-stepper' : ''}"
                                    onclick={() => setStep(i)}
                                    title={step.label}
                                >
                                    <span class="font-bold {currentStep < i ? 'text-neutral-100/50' : 'text-neutral-100 '}">
                                        {#if currentStep > i }
                                            <CheckMark size={20} strokeWidth={4}/>    
                                        {:else}
                                            {i + 1}
                                        {/if}
                                        
                                    </span>
                                </button>
                                <!-- Line -->
                                {#if i < steps.length-1}
                                    <div class=" {currentStep < i+1 ? 'bg-neutral-100/50' : 'bg-stepper'} h-1 grow scroll-ms-2_"></div>
                                {/if}
                                {/each}
                            </div>
                        </div>
                        <!-- Loop all steps -->
                        {#each steps as step, i (step)}
                        <!-- Filter to current step only -->
                        {#if isCurrentStep(i)}
                            <!-- Individual steps -->
                            <div class="rounded-2xl bg-neutral-800 p-10 space-y-8 text-center">
                                <h2 class="font-headline text-2xl uppercase"><span class=" text-neutral-600 font-bold text-6xl mr-2"># {i+1} | </span> {@html step.label}</h2>
                                <p class="font-regular text-base">{@html step.description }</p>
                            </div>
                        {/if}
                        {/each}
                        <!-- Navigation -->
                        <nav class="flex justify-between items-center gap-4">
                            <!-- Back Button -->
                            <button type="button" class="btn preset-tonal hover:preset-filled flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-all text-[var(--bg-state-color)]/77 bg-[var(--bg-menu-color)]/38 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 cursor-pointer disabled:cursor-not-allowed disabled:opacity-35 duration-300" onclick={prevStep} disabled={isFirstStep}>
                                <IconArrowLeft size={18} strokeWidth={3} />
                                <span>zurück</span>
                            </button>
                            <!-- Next Button -->
                            <button type="button" class="btn preset-tonal hover:preset-filled flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-all text-[var(--bg-state-color)]/77 bg-[var(--bg-menu-color)]/38 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 cursor-pointer disabled:cursor-not-allowed disabled:opacity-35 duration-300" onclick={nextStep} disabled={isLastStep}>
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

<style>

.btn-icon {
    box-sizing: content-box;
    white-space: nowrap;
    /* font-size: var(--text-base); */
    width: var(--text-base);
    height: var(--text-base);
    padding: calc(var(--spacing) * 2);
    justify-content: center;
    align-items: center;
    text-decoration-line: none;
    display: inline-flex;
}

.btn-icon-2xl {
    font-size: var(--text-2xl);
    width: var(--text-2xl);
    height: var(--text-2xl);
    padding: calc(var(--spacing) * 1.5);
}

</style>