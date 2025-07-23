<script lang="ts">
	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
    import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';

	let ulElement: HTMLUListElement | undefined = $state();
	let intersectionMap: Record<string, boolean> = $state({
		one: false,
		two: false,
		three: false,
		four: false,
		five: false,
		six: false,
		seven: false,
		eight: false,
	});

    onMount(() => {
        animateScroll.scrollToTop({ duration: 1, delay: 250 });
        console.log('[    reset scroll position  # bikes   ] - onMount');
    })
</script>

<div class="relative h-screen" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark">
    <div class="sticky top-0 left-0 z-10 h-screen w-full">
        <div class="container mx-auto grid grid-cols-6 gap-2 place-items-center h-screen">
            <div class="col-span-6" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><p>Hier wird man dann alle Bikes finden!</p>
                <button class="bg-[var(--bg-state-color)]/30 transition-colors hover:bg-[var(--bg-state-color)]/20 rounded-md px-7 py-3 m-4 backdrop-blur-md cursor-pointer" onclick={uiobserver.toggleUi}>UISTATE: {uiobserver.uistate}</button>
            </div>


            <ul class="max-h-[50vh] w-full space-y-4 overflow-hidden overflow-y-auto p-4 col-span-6" bind:this={ulElement} >
                {#each Object.keys(intersectionMap) as key (key)}
                    <!-- {#key intersectionMap[key]} -->
                        <li
                            class=" odd:bg-neutral-100 even:bg-hero h-[200px] marker:content-none transition-opacity {!intersectionMap[key] ? 'opacity-0' : 'opacity-100"'} duration-500"

                            use:intersect={{ threshold: 0.4, root: ulElement }}
                            onintersect={(event) => (
                                intersectionMap[key] = event.detail.entries[0].isIntersecting,
                                console.log(event.detail)
                                 )}
                        ></li>
                    <!-- {/key} -->
                {/each}
            </ul>
        </div>
    </div>
</div>