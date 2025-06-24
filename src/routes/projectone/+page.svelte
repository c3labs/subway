<script lang="ts">
	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
    import { dragscroll } from '@svelte-put/dragscroll';
	import { animateScroll } from 'svelte-scrollto-element';
</script>
<div class="c3:outher_box">
    <div class="relative h-[200vh]" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark">
        <div class="sticky top-0 left-0 z-10 h-screen w-full bg-neutral-800" in:fade={{duration: 300, delay: 500 }} out:fade>
            <div class=" grid grid-cols-6 gap-2 container place-items-center h-screen">
                <div class="col-span-6 text-neutral-400" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>ProjectONE - first section - should show a hero image with headlines H1 first with H2_#1 scrollable to H2_#2</div>
            </div>
        </div>
    </div>
    <div class="relative h-[150vh]" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="light" data-uiwidth="50">
        <div class="sticky top-0 left-0 z-10 h-screen w-full bg-neutral-100" in:fade={{duration: 300, delay: 500 }} out:fade>
            <div class="noscrollbar lg:scroll-smooth_ flex h-full cursor-grab touch-pan-y touch-pinch-zoom select-none overflow-x-scroll max-sm:touch-pan-x snap-x_ snap-proximity_" use:dragscroll id="scrollstage">
                <div class=" relative h-full shrink-0 overflow-hidden transition-[width] duration-700 ease-in-out {uiobserver.wchange ? 'w-[85vw] lg:w-[60vw]' : 'w-full'}  pb-[15vh] pt-[15vh] snap-start">
                    <div class="text-neutral-900" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage1">ProjectONE - second section part #1- brief explainer how to get one of these projektONEs implemented as horizontal slider
                        <p>
                            <button onclick={() => animateScroll.scrollTo({element: '#stage2', scrollX: true, container: '#scrollstage'})}> Scroll to stage2 </button>
                        </p>
                        <p>
                            <button onclick={() => animateScroll.scrollToTop()}> Scroll to top </button>
                        </p>
                    </div>
                </div>
                <div class="flex h-full w-max transform gap-8 px-8 pb-[15vh] pt-[15vh]">
                    <div class="w-full h-full text-neutral-400 bg-neutral-300 snap-center_" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage2">
                        <div class="w-[414px]">
                            ProjectONE - second section part #2 - sections #1 how to do it
                            <p>
                                <button onclick={() => animateScroll.scrollTo({element: '#stage3', scrollX: true, container: '#scrollstage',})}> Scroll to stage3 </button>
                            </p>
                        </div>
                    </div>
                    <div class="w-full h-full text-neutral-400 bg-neutral-300 snap-center_" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage3">
                        <div class="w-[100vh]">
                            ProjectONE - second section part #2 - sections #2 how to do it
                            <p>
                                <button onclick={() => animateScroll.scrollTo({element: '#stage4', scrollX: true, container: '#scrollstage',})}> Scroll to stage4 </button>
                            </p>
                        </div>
                    </div>
                    <div class="w-full h-full text-neutral-400 bg-neutral-300 snap-end_" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade id="stage4">
                        <div class="w-[414px]" id="stage1a">
                            ProjectONE - second section part #2 - sections #3 how to do it
                            <p>
                                <button onclick={() => animateScroll.scrollTo({element: '#stage1', scrollX: true, container: '#scrollstage'})}> Scroll to stage1 </button>
                            </p>
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

