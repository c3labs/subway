<script lang="ts">
	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
    // import { dragscroll } from '@svelte-put/dragscroll';
</script>
<div class="c3:outher_box">
    <div class="relative h-[200vh]" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark">
        <div class="sticky top-0 left-0 z-10 h-screen w-full bg-neutral-800" in:fade={{duration: 300, delay: 500 }} out:fade>
            <div class=" grid grid-cols-6 gap-2 container place-items-center h-screen">
                <div class="col-span-6 text-neutral-400" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>ProjectONE - first section - should show a hero image with headlines H1 first with H2_#1 scrollable to H2_#2</div>
            </div>
        </div>
    </div>
    <div class="relative h-[150vh]" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="light">
        <div class="sticky top-0 left-0 z-10 h-screen w-full bg-neutral-100" in:fade={{duration: 300, delay: 500 }} out:fade>
            <div class="no-scrollbar lg:scroll-smooth flex h-full cursor-grab touch-pan-y touch-pinch-zoom select-none overflow-x-scroll max-sm:touch-pan-x snap-x snap-proximity">
                <div class=" relative h-full shrink-0 overflow-hidden transition-[width] duration-700 ease-in-out w-[50vw] pb-[15vh] pt-[15vh] snap-start">
                    <div class="text-neutral-900" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>ProjectONE - second section part #1- brief explainer how to get one of these projektONEs implemented as horizontal slider</div>
                </div>
                <div class="flex h-full w-max transform gap-8 px-8 pb-[15vh] pt-[15vh]">
                    <div class="w-full h-full text-neutral-400 bg-neutral-300 snap-center" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>
                        <div class="w-[414px]">
                            ProjectONE - second section part #2 - sections #1 how to do it</div>
                        </div>
                    <div class="w-full h-full text-neutral-400 bg-neutral-300 snap-center" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>
                        <div class="w-[414px]">
                            ProjectONE - second section part #2 - sections #2 how to do it</div>
                        </div>
                    <div class="w-full h-full text-neutral-400 bg-neutral-300 snap-end" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>
                        <div class="w-[414px]">
                            ProjectONE - second section part #2 - sections #3 how to do it
                        </div>
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
</div>

