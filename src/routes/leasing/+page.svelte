<script lang="ts">
	import { fade, fly, slide } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
	import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';
    import Marqueeck from '@arisbh/marqueeck';
    import { Accordion } from "bits-ui";
    
    import IconArrowLeft from '@lucide/svelte/icons/chevron-left';
    import IconArrowRight from '@lucide/svelte/icons/chevron-right';
    import CaretDown from '@lucide/svelte/icons/chevron-down';
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

    // FAQ - Source Data
    const faqItems = [
        { value: "1", title: "Was ist ein Fahrradleasing über den Arbeitgeber?",
        content: "Fahrradleasing ermöglicht es Dir, Fahrräder bequem und kostengünstig über deinen Arbeitgeber zu beziehen. Diese Fahrräder können nicht nur beruflich, sondern auch privat genutzt werden und die Zahlungen erfolgen über Deine monatliche Gehaltsabrechnung."},
        { value: "2", title: "Wie funktioniert das Leasing über einen Arbeitgeber?",
        content: "Dein Arbeitgeber least ein Fahrrad oder ein E-Bike und überlässt es dir als Arbeitnehmer zur Nutzung. Entscheidend ist hier: Das Rad kann auch privat genutzt werden. Die Leasingraten werden durch eine Gehaltsumwandlung von deinem Bruttogehalt abgezogen, wodurch sich dein Lohnsteueranteil verringert."},
        { value: "3", title: "Was bedeutet Gehaltsumwandlung?",
        content: "Gehaltsumwandlung bedeutet, dass dir ein Teil deines Bruttogehaltes nicht ausgezahlt, sondern in einen Sachbezug gesteckt wird. Im konkreten Fall wäre dies das Fahrrad oder E-Bike. Dadurch verringert sich dein zu versteuerndes Bruttogehalt und deine Steuer- und Sozialabgaben werden weniger."},
        { value: "4", title: "Wie komme ich an mein Traumfahrrad?",
        content: "Du kommst für eine Beratung bei uns vorbei und suchst dir vor Ort gemeinsam mit unserem Team dein Traumfahrrad aus."},
        { value: "5", title: "Wie läuft die Beantragung eines Fahrradleasing ab?",
        content: "Nachdem du dein Wunschfahrrad gefunden hast, kümmern wir uns für dich um die Beantragung des Fahrradleasings. Vorher musst du dich auf dem Leasingportal des Leasinganbieters deines Arbeitgebers registrieren oder hast einen Code für die Beantragung erhalten. Diese Daten fragen wir bei dir ab und stellen anschließend ein Leasingangebot in das entsprechende Portal ein."},
        { value: "6", title: "Über welchen Leasinganbieter läuft das Fahrradleasing?",
        content: "Das hängt von deinem Arbeitgeber ab. Frage hierzu bitte in deiner Firma nach, mit welchem Anbieter zusammengearbeitet wird. Sollte dein Arbeitgeber noch keinen Rahmenvertrag abgeschlossen haben, beraten wir dich gerne über die Unterschiede der einzelnen Anbieter."},
        { value: "7", title: "Wie lange läuft das Fahrradleasing über den Arbeitgeber?",
        content: "Das Fahrradleasing läuft immer über 36 Monate. Danach erhältst du in der Regel ein Angebot zur Übernahme des Fahrrades von deinem Leasinganbieter."},
        { value: "8", title: "Wann kann ich mein Fahrrad abholen und losfahren?",
        content: "Bevor du das Rad abholen und losfahren kannst, muss der Leasingantrag freigegeben werden. Dies erfolgt durch eine vertraglich geregelte Übernahme des Fahrrades oder E-Bikes mit deinem Arbeitgeber. Sobald dies erfolgt ist und wir dein Rad fahrbereit gemacht haben, erhältst du einen Anruf von uns und wir vereinbaren gemeinsam einen Abholtermin."
        }        
    ];

    // Stepper - Source Data
    const steps = [
        { label: 'Rücksprache mit dem Arbeitgeber', description: 'Gibt es schon einen Leasingpartner? <b>Wenn nein:</b> Termin bei uns ausmachen und Informationen über die Leasinganbeiter einholen.' },
        { label: 'Traumbike auswählen', description: 'Schau dich bei uns um und such dir dein Traumrad aus. Wir haben für jeden Einsatzbereich das passende Bike.' },
        { label: 'Angebot einholen', description: 'Wir erstellen gemeinsam mit Dir ein individuelles Angebot und laden es auf dem Portal des Leasinganbieters deiner Firma hoch.' },
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

<svelte:head>
	<title>BIKE LEASING | SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>

<div class="relative h-screen" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="light">
    <h1 class="container mx-auto px-4 pb-8 z-11 sticky grid-cols-none top-32 lg:top-48 xl:top-44 col-span-6 font-extralight font-headline text-neutral-100 text-sm lg:text-base xl:text-xl text-shadow-sm" in:fade={{duration: 300, delay: 600 }} out:fade>DER KOMFORTABLE WEG ZUM TRAUMRAD | <span class="font-bold"> BIKE LEASING</span></h1>
    <enhanced:img src="/src/lib/assets/images/leasing/hero_leasing.jpg?format=avif;webp" alt="Bikes - Hero Shot - Bike-Leasing" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" in:fade={{duration: 300}} out:fade />
    <!-- <div class="absolute sticky_ top-0 left-0 z-10 h-screen w-full"> -->
        <div class="container mx-auto w-full grid grid-cols-6 gap-2 place-items-center h-full px-4">
            <div class="col-span-6 lg:col-span-2 text-neutral-300 font-regular text-base self-center" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>
                <h2 class="container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center_ font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-white">NUR
					<span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
						<span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold"># 6 SCHRITTE</span>
					</span>
					UND SCHON GEHTS LOS!
				</h2>
            </div>
            <div class="col-span-6 lg:col-span-4 text-neutral-300 lg:w-3/4 self-end">
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
                                    class="btn-icon btn-icon-2xl rounded-full border-2 cursor-pointer {isCurrentStep(i) ? 'bg-stepper border-stepper' : 'bg-neutral-800/50 border-neutral-500/50'} {currentStep > i ? 'bg-stepper/70 border-stepper' : ''}"
                                    onclick={() => setStep(i)}
                                    title={step.label}
                                >
                                    <span class="font-bold {currentStep < i ? 'text-neutral-300/50' : 'text-neutral-100 '}">
                                        {#if currentStep > i }
                                            <CheckMark size={24} strokeWidth={3}/>    
                                        {:else}
                                            {i + 1}
                                        {/if}
                                        
                                    </span>
                                </button>
                                <!-- Line -->
                                {#if i < steps.length-1}
                                    <div class=" {currentStep < i+1 ? 'bg-neutral-500/50' : 'bg-stepper'} h-0.5 grow scroll-ms-2_"></div>
                                {/if}
                                {/each}
                            </div>
                        </div>
                        <!-- Loop all steps -->
                        {#each steps as step, i (step)}
                        <!-- Filter to current step only -->
                        {#if isCurrentStep(i)}
                            <!-- Individual steps -->
                            <div class="rounded-2xl bg-neutral-800 p-10 h-80 lg:h-60 space-y-8 text-center">
                                <h2 class="font-headline text-2xl uppercase"><span class=" text-neutral-600 font-bold text-6xl mr-2"># {i+1} | </span> {@html step.label}</h2>
                                <p class="font-regular text-base">{@html step.description }</p>
                            </div>
                        {/if}
                        {/each}
                        <!-- Navigation -->
                        <nav class="flex justify-between items-center gap-4">
                            <!-- Back Button -->
                            <button type="button" class="btn preset-tonal hover:preset-filled flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-all text-[var(--bg-state-color)]/77 bg-[var(--bg-menu-color)]/38 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 {isLastStep ? 'outline-5 outline-offset-2 outline-hero/65 z-20 outline-dashed' : 'outline-1 outline-offset-0 outline-hero/0 outline-dashed'} cursor-pointer disabled:cursor-not-allowed disabled:opacity-35 duration-300" onclick={prevStep} disabled={isFirstStep}>
                                <IconArrowLeft size={18} strokeWidth={3} />
                                <span>zurück</span>
                            </button>
                            <!-- Next Button -->
                            <button type="button" class="btn preset-tonal hover:preset-filled flex min-w-[177px] items-center justify-center overflow-hidden whitespace-nowrap rounded-special px-6 py-3.5 backdrop-blur-sm transition-all text-[var(--bg-state-color)]/77 bg-[var(--bg-menu-color)]/38 hover:text-[var(--bg-state-color)]/100 hover:bg-[var(--bg-menu-color)]/60 active:bg-[var(--bg-menu-color)]/60 {isFirstStep ? 'outline-5 outline-offset-2 outline-hero/65 z-20 outline-dashed' : 'outline-1 outline-offset-0 outline-hero/0 outline-dashed'} cursor-pointer disabled:cursor-not-allowed disabled:opacity-35 duration-300" onclick={nextStep} disabled={isLastStep}>
                                <span>weiter</span>
                                <IconArrowRight size={18} />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="col-span-6 text-neutral-300 w-full h-14 mb-10 mix-blend-luminosity hover:mix-blend-normal overflow-hidden">
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
<div class="relative h-[215vh] lg:h-[115vh]" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="light">
    <h1 class="container mx-auto px-4 pb-8 pt-4 z-11 sticky top-28 lg:top-44 xl:top-40 font-extralight font-headline text-neutral-100 text-sm lg:text-base xl:text-xl" in:fade={{duration: 300, delay: 600 }} out:fade>ALLES WAS DU SONST NOCH WISSEN WOLLTEST | <span class="font-bold"> BIKE LEASING</span></h1>
        <div class="sticky top-0 left-0 z-10 h-[200vh] lg:h-screen w-full bg-neutral-800" in:fade={{duration: 300, delay: 500 }} out:fade>
            <div class="container mx-auto grid grid-cols-6 gap-2 place-items-center h-full lg:h-screen">
                <div class="col-span-6 lg:col-span-3 pt-50 px-4 max-lg:full text-neutral-600 text-2xl font-regular font-extralight text-right" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>Als Fachhändler sind wir gerne dein erster Ansprechpartner, wenn es um das Thema <span class="text-neutral-400">Fahrrad-Mitarbeiterleasing</span> geht. Von der Erstberatung zu den grundsätzlichen Abläufen eines Leasings, über die <span class="text-neutral-400">professionelle Beratung</span> bei der Suche nach deinem <span class="text-neutral-400">Traumbike</span>, bis hin zur unkomplizierten Abwicklung von <span class="text-neutral-400">Serviceaufträgen</span> im Rahmen deines Leasings - wir sind stets an deiner Seite und unterstützen dich bei <span class="text-neutral-400">allen Fragen</span>.</div>
                <Accordion.Root class="w-full sm:max-w-[70%]_ max-lg:h-full pt-30 pl-0 lg:pl-14 xl:pl-10 col-span-6 lg:col-span-3 text-neutral-400 font-regular" type="single">
                    {#each faqItems as item (item.value)}
                        <Accordion.Item
                        value={item.value}
                        class="border-dark-10 text-neutral-700 group border-b px-1.5"
                        >
                        <Accordion.Header>
                            <Accordion.Trigger
                            class="flex w-full flex-1 select-none items-center justify-between py-5 text-neutral-500 hover:text-neutral-200 text-lg font-medium uppercase transition-all duration-500 cursor-pointer [&[data-state=open]>span>svg]:rotate-180"
                            >
                            <span class="w-full text-left">
                                {item.title}
                            </span>
                            <span
                                class="hover:bg-neutral-900 inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent"
                            >
                                <CaretDown class="size-[18px] transition-transform duration-500" />
                            </span>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content
                            forceMount={true} 
                            class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm tracking-[-0.01em] text-neutral-400"
                        >
                            {#snippet child({ props, open })}
                                {#if open}
                                    <div {...props} transition:slide={{ duration: 500 }}>
                                    <div class="pb-[25px]">
                                        {item.content}
                                    </div>
                                    </div>
                                {/if}
                            {/snippet}
                        </Accordion.Content>
                        </Accordion.Item>
                    {/each}
                </Accordion.Root>
            </div>
        </div>
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
    font-size: var(--text-xl);
    width: var(--text-2xl);
    height: var(--text-2xl);
    padding: calc(var(--spacing) * 1.5);
}

</style>