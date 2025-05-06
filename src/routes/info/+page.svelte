<script>
	import { uiobserver } from "$lib/uiobserver.svelte";
	import { fade, fly } from "svelte/transition";

</script>

<div class="relative h-screen" data-show-light-ui="true">
    <div class="sticky top-0 left-0 z-10 h-screen w-full">
        <div class=" grid grid-cols-6 gap-2 container place-items-center h-screen">
            <div class="col-span-6" in:fly={{ y :100, duration: 300, delay: 500 }} out:fade><p>Hier sollte man INFORMATIONEN finden zu ???</p><button onclick={uiobserver.toggleUi}>UISTATE: {uiobserver.uistate}</button></div>
        </div>
    </div>
</div>