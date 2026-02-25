<script lang="ts">
	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
	import { onMount } from "svelte";
	import { animateScroll } from "svelte-scrollto-element";
	import Marqueeck from "@arisbh/marqueeck";
	import { Wrench, InspectionPanel, Info } from "@lucide/svelte";
    

    onMount(() => {
		animateScroll.scrollToTop({ duration: 1, delay: 250 });
        // animateScroll.scrollToTop({ duration: 1, delay: 250, offset: 20 });
    });
</script>

<svelte:head>
	<title>SERVICE/WORKBENCH | SUBWAY - Radsport Wagner | We just ride!</title>
    <meta name="description" content="In unserer Werkstatt kümmern wir uns mit Leidenschaft um dein Fahrrad" />

    <meta property="twitter:description" content="In unserer Werkstatt kümmern wir uns mit Leidenschaft um dein Fahrrad" />
    <meta property="twitter:title" content="Service/Workbench| SUBWAY" />

    <meta property="og:description" content="In unserer Werkstatt kümmern wir uns mit Leidenschaft um dein Fahrrad" />
    <meta property="og:title" content="Service/Workbench | SUBWAY" />
</svelte:head>

<div class="relative _h-screen" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark">
    <div class="sticky top-0 left-0 z-10 _h-screen w-full bg-neutral-600" in:fade={{duration: 300, delay: 500 }} out:fade>
        <h1 class="container mx-auto px-4 pb-8 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-neutral-50 text-sm lg:text-base xl:text-xl text-shadow-sm" in:fade={{duration: 300, delay: 600 }} out:fade>WILLKOMMEN IN UNSERER WERKSTATT | <span class="font-bold"> SERVICE/WORKBENCH</span></h1>
        <div class="col-span-1 lg:col-span-6 text-neutral-200/15 w-full mt-20 _mix-blend-luminosity _hover:mix-blend-normal overflow-hidden">
            <Marqueeck options={{ direction: "left", speed: 40, hoverSpeed: 10, brakeDuration: 1000, onHover: "stop", gap: 120 }} class="select-none font-headline _font-light _font-bold font-semibold text-[13em] lg:text-[18em] xl:text-[23em] uppercase tracking-tighter" >
                <p>inspektion </p>
                <!-- <p>-</p> -->
                <p>kundendienst</p>
                <p>feineinstellung</p>
                <p>service</p>
                <p>beratung</p>
            </Marqueeck>
        </div>
        <div class="container mx-auto grid grid-cols-1 lg:grid-cols-6 lg:gap-2 place-items-center px-4">
            <div class="col-span-1 lg:row-span-2 lg:col-span-3 lg:col-start-1 text-neutral-200 font-regular font-extralight text-xl/10_ text-2xl text-right self-start mb-30" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><Wrench size={120} strokeWidth={0.45} class="place-self-end"/><p>In unserer Werkstatt kümmern wir uns mit Leidenschaft um dein Fahrrad - egal ob Kundendienst oder Feineinstellung. Unser Team arbeitet präzise, transparent und kundenorientiert, damit dein Fahrrad zuverlässig und sicher bleibt.</p></div>
            <div class="col-span-1 lg:col-span-2 lg:col-start-5 text-neutral-900/80 font-regular font-normal text-base xl:text-xl/7 self-start mb-10" in:fly={{ y :100, duration: 300, delay: 750 }} out:fade><InspectionPanel size={35} strokeWidth={1.75} class="w-5 xl:w-9" /><p>Wir bieten Inspektionen für jede Art von Fahrrad - egal ob klassisches Fahrrad oder E-Bike (pedelec)</p></div>
            <div class="col-span-1 lg:col-span-2 lg:col-start-5 text-neutral-900/80 font-regular font-normal text-base xl:text-xl/7 self-start mb-10" in:fly={{ y :100, duration: 300, delay: 1000 }} out:fade><Info size={35} strokeWidth={1.75} class="w-5 xl:w-9" /><p>Bei Fragen zum Service am Fahrrad sind wir gerne telefonisch für dich erreichbar.</p></div>
        </div>
    </div>
</div>

<style>
/* .marque {
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  background-clip: text;
  color: rgb(0 0 0 / 20%);
} */
</style>