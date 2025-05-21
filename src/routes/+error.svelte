<script lang="ts">
	import { page } from '$app/state';
</script>



<div class="relative h-screen">
    <div class="sticky top-0 left-0 z-10 h-screen w-full">
        <div class=" grid grid-cols-6 gap-2 container place-items-center h-screen">
            <div class="text-2xl pt-25 font-headline font-semibold text-hero col-span-6">{page.status}: <span class="font-medium">{page.error.message}</span></div>
        </div>
    </div>
</div>