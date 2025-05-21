<script lang="ts">
	import { fade, fly } from "svelte/transition";
    import { intersect } from '@svelte-put/intersect';
	import { uiobserver , onIntersect } from "$lib/uiobserver.svelte";
</script>

<div class="relative h-screen" use:intersect={{ threshold: 0.4 }} onintersect={onIntersect} data-uipref="dark">
    <div class="sticky top-0 left-0 z-10 h-screen w-full bg-neutral-800" in:fade={{duration: 300, delay: 500 }} out:fade>
        <div class=" grid grid-cols-6 gap-2 container place-items-center h-screen">
            <div class="col-span-6 text-neutral-400" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><p>Welche Services finden Kunden warum bei euch rund um die WORKBENCH</p></div>
        </div>
    </div>
</div>