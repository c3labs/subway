<script lang="ts">

    import projectOne01 from '$lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 7.jpeg';
	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
    import { dragscroll } from '@svelte-put/dragscroll';
	import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from "svelte";

    let postep = $state(0);

    onMount(() => {
        animateScroll.scrollToTop({ duration: 1, delay: 300 });
        console.log('[    reset scroll position  # projectOne   ] - onMount');
    })

</script>

<svelte:head>
	<title>ProjectOne - SUBWAY - Radsport Wagner | We just ride!</title>
</svelte:head>

<!-- <div class="c3:outher_box"> -->
    <div class="relative h-[100vh]" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="light">
        <div class="sticky top-0 left-0 z-10 h-[75vh] w-full bg-neutral-800" in:fade={{ duration: 300, delay: 500 }} out:fade>
            <h1 class="container mx-auto px-4 pb-8 z-11 sticky top-32 lg:top-48 xl:top-44 font-extralight font-headline text-neutral-100 text-sm lg:text-base xl:text-xl text-shadow-sm" in:fade={{duration: 300, delay: 600 }} out:fade>IN NUR FÜNF STEPS ZU DEINEM COSTOM BIKE | <span class="font-bold"> TREK - PROJECT ONE</span></h1>
            {#if postep === 0}
                <enhanced:img src="../../lib/assets/images/bikes/projectOne/MY25_ProjectOne_step_0.jpg?format=avif;webp" alt="Project One - Madone Hero Shot" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" out:fade />
            {/if}
            {#if postep === 1} 
                <enhanced:img src="../../lib/assets/images/bikes/projectOne/MY25_ProjectOne.jpg?format=avif;webp" alt="Project One - Step 1 #" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" out:fade use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" />
            {/if}
            {#if postep === 2} 
                <enhanced:img src="../../lib/assets/images/bikes/projectOne/MY25_ProjectOne_step_2.jpg?format=avif;webp" alt="Project One - Step 2 #" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" />
            {/if}
            {#if postep === 3} 
                <enhanced:img src="../../lib/assets/images/bikes/projectOne/MY25_ProjectOne_step_3.jpg?format=avif;webp" alt="Project One - Step 3 #" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="light" />
            {/if}
            {#if postep === 4} 
                <enhanced:img src="../../lib/assets/images/bikes/projectOne/MY25_ProjectOne_step_4.jpg?format=avif;webp" alt="Project One - Step 4 #" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" />
            {/if}
            {#if postep === 5} 
                <enhanced:img src="../../lib/assets/images/bikes/projectOne/MY25_ProjectOne_step_5.jpg?format=avif;webp" alt="Project One - Step 5 #" sizes="min(1280px, 100vw)" class="absolute left-0 top-0 -z-50 h-full w-full overflow-hidden object-cover object-center" transition:fade  use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="light" />
            {/if}
            <div class="absolute h-full w-full top-0">
                {#if postep === 0}
                <h2 class="absolute left-[50%] top-[55%] -translate-1/2 container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-neutral-800 uppercase text-shadow-lg" transition:fade>DU BIST EINZIGARTIG.
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
                        <span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold text-shadow-none">UND DEIN BIKE</span>
                    </span>
                    SOLLTE ES AUCH SEIN.
                </h2>
                <div class="_bg-neutral-100 text-neutral-500 w-full text-right font-regular text-base rounded-xl absolute left-[50%] _top-[70%] -bottom-[25%] -translate-x-1/2 container mx-auto px-4 pb-6 pt-12" transition:fade>
                    Hebe dich mit einem unverwechselbaren Custombike von Project One von der Masse ab.
                    <!-- Jedes TREK Project One Bike wird von einem Team aus talentierten Künstlern und erfahrenen Bikebuildern einzeln von Hand lackiert und aufgebaut.  -->
                    <!-- Du wählst aus den branchenweit besten Komponenten und passt dein Bike perfekt an deine Wünsche und Ansprüche an. -->
                </div>
                {/if}
                {#if postep === 1}
                <h2 class="absolute left-[50%] top-[40%] -translate-1/2 container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-neutral-100 uppercase text-shadow-lg" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><span class="absolute text-lg font-bold text-neutral-900/70 translate-x-0.5 -translate-y-4 text-shadow-none">Step 1 # </span> Such dir  
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
                        <span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold text-shadow-none">deine Rennmaschine</span>
                    </span>
                    aus dem TREK RENNRAD LINEUP.
                </h2>
                <div class="_bg-neutral-100 text-neutral-500 w-full text-right font-regular text-base rounded-xl absolute left-[50%] _top-[70%] -bottom-[25%] -translate-x-1/2 container mx-auto px-4 pb-6 pt-12" transition:fade>
                    Mit Project One kannst du dein Traumbike genau nach deinen Vorstellungen, Wünschen und Anforderungen erschaffen. Zur Auswahl stehen dir: Madone - Domane - Domane+ - Checkmate - Speed Concept
                    <!-- Jedes TREK Project One Bike wird von einem Team aus talentierten Künstlern und erfahrenen Bikebuildern einzeln von Hand lackiert und aufgebaut.  -->
                    <!-- Du wählst aus den branchenweit besten Komponenten und passt dein Bike perfekt an deine Wünsche und Ansprüche an. -->
                </div>
                {/if}
                {#if postep === 2}
                <h2 class="absolute left-[50%] top-[70%] -translate-1/2 container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-neutral-100 uppercase text-shadow-lg" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><span class="absolute text-lg font-bold text-neutral-900/70 translate-x-0.5 -translate-y-4 text-shadow-none">Step 2 # </span> Wähle deinen STYLE aus einer nahezu   
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
                        <span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold text-shadow-none">endlosen Palette</span>
                    </span>
                    an Lackierungen und DESIGNS.
                </h2>
                <div class="_bg-neutral-100 text-neutral-500 w-full text-right font-regular text-base rounded-xl absolute left-[50%] _top-[70%] -bottom-[25%] -translate-x-1/2 container mx-auto px-4 pb-6 pt-12" transition:fade>
                    <!-- Hebe dich mit einem unverwechselbaren Custombike von Project One von der Masse ab. -->
                    Jedes TREK Project One Bike wird von einem Team aus talentierten Künstlern und erfahrenen Bikebuildern einzeln von Hand lackiert und aufgebaut. 
                    <!-- Du wählst aus den branchenweit besten Komponenten und passt dein Bike perfekt an deine Wünsche und Ansprüche an. -->
                </div>
                {/if}
                {#if postep === 3}
                <h2 class="absolute left-[50%] top-[65%] -translate-1/2 container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-neutral-100 uppercase text-shadow-lg" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><span class="absolute text-lg font-bold text-neutral-900/70 translate-x-0.5 -translate-y-4 text-shadow-none">Step 3 # </span> Bestücke dein Traumbike mit   
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
                        <span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold text-shadow-none">TOP Komponenten</span>
                    </span>
                    von TREK, SRAM und SHIMANO.
                </h2>
                <div class="_bg-neutral-100 text-neutral-500 w-full text-right font-regular text-base rounded-xl absolute left-[50%] _top-[70%] -bottom-[25%] -translate-x-1/2 container mx-auto px-4 pb-6 pt-12" transition:fade>
                    <!-- Hebe dich mit einem unverwechselbaren Custombike von Project One von der Masse ab. -->
                    <!-- Jedes TREK Project One Bike wird von einem Team aus talentierten Künstlern und erfahrenen Bikebuildern einzeln von Hand lackiert und aufgebaut.  -->
                    Du wählst aus den branchenweit besten Komponenten und passt dein Bike perfekt an deine Wünsche und Ansprüche an.
                </div>
                {/if}
                {#if postep === 4}
                <h2 class="absolute left-[50%] top-[80%] -translate-1/2 container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-neutral-900 uppercase text-shadow-lg" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><span class="absolute text-lg font-bold text-neutral-100/70 translate-x-0.5 -translate-y-4 text-shadow-none">Step 4 # </span> Stimme deine
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
                        <span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold text-shadow-none">perfekte Passform</span>
                    </span>
                    mit uns ab.
                </h2>
                <div class="_bg-neutral-100 text-neutral-500 w-full text-right font-regular text-base rounded-xl absolute left-[50%] _top-[70%] -bottom-[25%] -translate-x-1/2 container mx-auto px-4 pb-6 pt-12" transition:fade>
                    <!-- Hebe dich mit einem unverwechselbaren Custombike von Project One von der Masse ab. -->
                    <!-- Jedes TREK Project One Bike wird von einem Team aus talentierten Künstlern und erfahrenen Bikebuildern einzeln von Hand lackiert und aufgebaut.  -->
                    Wenn du dir schon ein einzigartiges Bike aufbauen läßt, dann sollte es dir auch perfekt passen – von der Kurbelarmlänge über die Kassette bis hin zum Cockpit und zur Sattelstütze. Wir stellen sicher, dass dein Traumbike genauso gut passt wie es aussieht.
                </div>
                {/if}
                {#if postep === 5}
                <h2 class="absolute left-[50%] top-[70%] -translate-1/2 container mx-auto px-4 landscape:max-lg:translate-y-6 text-right lg:text-center font-headline font-extralight text-3xl/12 landscape:max-lg:text-3xl md:text-4xl text-neutral-100 uppercase text-shadow-lg" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><span class="absolute text-lg font-bold text-neutral-900/70 translate-x-0.5 -translate-y-4 text-shadow-none">Step 5 # </span> Jetzt darfst du dich 
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-hero/70">
                        <span class="relative text-white text-4xl landscape:max-lg:text-4xl md:text-5xl font-bold text-shadow-none">vier Wochen</span>
                    </span>
                    auf dein Traumbike freuen.
                </h2>
                <div class="_bg-neutral-100 text-neutral-500 w-full text-right font-regular text-base rounded-xl absolute left-[50%] _top-[70%] -bottom-[28%] -translate-x-1/2 container mx-auto px-4 pb-6 pt-12" transition:fade>
                    <!-- Hebe dich mit einem unverwechselbaren Custombike von Project One von der Masse ab. -->
                    <!-- Jedes TREK Project One Bike wird von einem Team aus talentierten Künstlern und erfahrenen Bikebuildern einzeln von Hand lackiert und aufgebaut.  -->
                    Nach nur vier Wochen treffen wir uns hier wieder und machen ein nettes Bild mit dir und deinem Traumbike für unsere Project One Show. Übrigens gibts da auch eine tolle Funktion auf der TREK Website wo man sich seine Konfiguration als link speichern kann falls du dich schon ausführlich mit einem Custom Bike beschäftigt hast.
                </div>
                {/if}
            </div>
            <div class="absolute _-bottom-[25%] bottom-2 left-[50%] -translate-x-1/2 container mx-auto px-4 text-center">
                <!-- <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer" onclick={() => {postep++}}>NEXT STEP: {postep}</button> -->
                <div class="text-neutral-100 font-headline font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl" transition:fade>
                    <button class="transition-colors px-2 py-2 cursor-pointer {postep === 1 ? 'text-neutral-100 hover:text-neutral-100' : 'text-neutral-900/70 hover:text-neutral-100/40'} active:text-neutral-100/50" onclick={() => {postep = 1}}>1</button> - 
                    <button class="transition-colors px-2 py-2 cursor-pointer {postep === 2 ? 'text-neutral-100 hover:text-neutral-100' : 'text-neutral-900/70 hover:text-neutral-100/40'} active:text-neutral-100/50" onclick={() => {postep = 2}}>2</button> - 
                    <button class="transition-colors px-2 py-2 cursor-pointer {postep === 3 ? 'text-neutral-100 hover:text-neutral-100' : 'text-neutral-900/70 hover:text-neutral-100/40'} active:text-neutral-100/50" onclick={() => {postep = 3}}>3</button> - 
                    <button class="transition-colors px-2 py-2 cursor-pointer {postep === 4 ? 'text-neutral-100 hover:text-neutral-100' : 'text-neutral-900/70 hover:text-neutral-100/40'} active:text-neutral-100/50" onclick={() => {postep = 4}}>4</button> - 
                    <button class="transition-colors px-2 py-2 cursor-pointer {postep === 5 ? 'text-neutral-100 hover:text-neutral-100' : 'text-neutral-900/70 hover:text-neutral-100/40'} active:text-neutral-100/50" onclick={() => {postep = 5}}>5</button>
                </div>
            </div>
        </div>
    </div>
    <div class="relative h-[110vh]" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark" data-uiwidth="50">
        <div class="sticky top-0 left-0 z-10 h-screen w-full bg-neutral-100" out:fade>
            <h1 class="container mx-auto px-4 pb-8 pt-4 z-11 sticky top-28 lg:top-44 xl:top-40 font-extralight font-headline text-neutral-800 text-sm lg:text-base xl:text-xl" in:fade={{duration: 300, delay: 600 }} out:fade>UNSERE BIKE VISIONEN - SO INDIVIDUELL WIE IHRE BESITZER | <span class="font-bold">PROJECT ONE OWNERS CLUB</span></h1>
            <div class="noscrollbar lg:scroll-smooth_ flex h-full cursor-grab touch-pan-y touch-pinch-zoom select-none overflow-x-scroll max-sm:touch-pan-x snap-x_ snap-proximity_" use:dragscroll id="scrollstage">
                <!-- <div class=" relative h-full shrink-0 overflow-hidden transition-[width] duration-700 ease-in-out {uiobserver.wchange ? 'w-[85vw] lg:w-[60vw]' : 'w-full'}  pb-[15vh] pt-[15vh] snap-start">
                    <div class="text-neutral-900" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage1">ProjectONE - second section part #1- brief explainer how to get one of these projektONEs implemented as horizontal slider
                        <p>
                            <button onclick={() => animateScroll.scrollTo({element: '#stage2', scrollX: true, container: '#scrollstage'})}> Scroll to stage2 </button>
                        </p>
                        <p>
                            <button onclick={() => animateScroll.scrollToTop()}> Scroll to top </button>
                        </p>
                    </div>
                </div> -->
                <div class="flex h-full w-max transform gap-4 px-4 lg:gap-8 lg:px-8 pb-[20vh] pt-[18vh] lg:pb-[15vh] lg:pt-[15vh] shrink-0 grow-0">
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage2">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 3.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                        <!-- <div class="w-[414px]">
                            ProjectONE - second section part #2 - sections #1 how to do it
                            <p>
                                <button onclick={() => animateScroll.scrollTo({element: '#stage3', scrollX: true, container: '#scrollstage',})}> Scroll to stage3 </button>
                            </p>
                        </div> -->
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage3">
                        <!-- <div class="w-[100vh]"> -->
                            <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 1.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                             <!-- <img src={projectOne01} alt="nettes Bild" class="h-full w-full object-cover object-center _aspect-4/9"> -->
                            <!-- ProjectONE - second section part #2 - sections #2 how to do it
                            <p>
                                <button onclick={() => animateScroll.scrollTo({element: '#stage4', scrollX: true, container: '#scrollstage',})}> Scroll to stage4 </button>
                            </p> -->
                        <!-- </div> -->
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 2.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                        <!-- <div class="w-[414px]" id="stage1a">
                            ProjectONE - second section part #2 - sections #3 how to do it
                            <p>
                                <button onclick={() => animateScroll.scrollTo({element: '#stage1', scrollX: true, container: '#scrollstage'})}> Scroll to stage1 </button>
                            </p>
                        </div> -->
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 4.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 5.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 6.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 7.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 8.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 9.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 10.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 11.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 12.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 13.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                    <div class="shrink-0 min-w-max h-full rounded-2xl overflow-hidden" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <enhanced:img src="/src/lib/assets/images/bikes/projectOne/show/Subway.Peters.ProjectOne - 14.jpeg?format=avif;webp" alt="Project One Owners Club - Show #1" sizes="min(1280px, 100vw)" class="_absolute object-cover object-center w-full h-full" draggable="false" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="relative h-screen" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark">
        <div class="sticky top-0 left-0 z-10 h-screen w-full bg-neutral-800" in:fade={{duration: 300, delay: 500 }} out:fade>
            <div class=" grid grid-cols-6 gap-2 container place-items-center h-screen">
                <div class="col-span-6 text-neutral-400" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>ProjectONE - third section - what goes on here?</div>
            </div>
        </div>
    </div>
<!-- </div> -->

