<script lang="ts">
	import { page } from '$app/state';
    import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
    import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';

    onMount(() => {
        animateScroll.scrollToTop({ duration: 1, delay: 250 });
        console.log('[    reset scroll position  # error   ] - onMount');
    })
</script>



<div class="relative h-screen" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark">
    <div class="sticky top-0 left-0 z-10 h-screen w-full bg-neutral-800" in:fade={{duration: 300, delay: 500 }} out:fade>
        <div class=" grid grid-cols-6 gap-2 container place-items-center h-screen">
            <div class="text-2xl pt-25 font-headline font-bold text-hero col-span-6" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade>{page.status}: <span class="font-light">{page.error!.message}</span></div>
        </div>
    </div>
</div>