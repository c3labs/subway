<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import logo from '$lib/assets/images/logo/subway.logo.v01.svg?raw';
	import { uiobserver } from '$lib/uiobserver.svelte';

	// $effect(() => {
	// 	if (ioScrollY > 4100 && ioScrollY < 6300) {
	// 		document.documentElement.style.cssText = "--bg-state-color:var(--color-neutral-50);";
	// 	} else {
	// 		document.documentElement.style.cssText = "--bg-state-color:var(--color-neutral-900);";
	// 	}
	// });

	// has to be transfered into uiobserver sometimes in the future !!
	function navigate (navroute: string | URL) {
		goto(navroute);
		// console.log('current navSate:', uiobserver.navstate);
		if(uiobserver.navstate) {

			uiobserver.toggleNav();
		}
	}

</script>

<header class="fixed left-0 z-[90] flex flex-col xl:flex-row w-full justify-between px-5 pt-5 pb-5 xl:pb-20 sm:px-10 sm:pt-10 md:px-20 font-menu text-xs tracking-wider backdrop-blur-sm bg-[var(--bg-state-color)]/30 text-[var(--bg-menu-color)] transition-all duration-1000">
	<div class="corner">
		<ul class="flex flex-col items-end xl:flex-row gap-x-12">
			<li class="lg:hidden pb-1 {uiobserver.navstate ? 'opacity-30' : 'opacity-80'}">
				<button onclick={() => uiobserver.toggleNav()}>{uiobserver.navstate ? '-' : '+'}NAV {uiobserver.uistate}</button>
			</li>
			<li aria-current={page.url.pathname === '/bikes' ? 'page' : undefined} class="aria-[current=page]:text-hero lg:inline-flex {uiobserver.navstate ? 'inline-flex' : 'hidden'}">
				<button onclick={() => navigate('/bikes')} class="cursor-pointer">TECH/BIKES</button>
				<!-- <button onclick={uiobserver.toggleUi}>UISTATE: {uiobserver.uistate}</button> -->
			</li>
			<li aria-current={page.url.pathname === '/projectone' ? 'page' : undefined} class="aria-[current=page]:text-hero lg:inline-flex {uiobserver.navstate ? 'inline-flex' : 'hidden'}">
				<button onclick={() => navigate("/projectone")} class="cursor-pointer">PROJECT ONE</button>
			</li>
			<li aria-current={page.url.pathname === '/leasing' ? 'page' : undefined} class="aria-[current=page]:text-hero lg:inline-flex {uiobserver.navstate ? 'inline-flex' : 'hidden'}">
				<button onclick={() => navigate('/leasing')} class="cursor-pointer">LEASING</button>
			</li>
		</ul>
	</div>
	<div class="absolute top-5 {uiobserver.navstate ? 'w-25' : 'w-30'} grow left-1/8 -translate-x-1/3 lg:left-1/2 lg:-translate-x-1/2 sm:top-5 sm:w-30 md:top-2 md:w-35 transition-all">
		<!-- LOGO SECTION HERE -->
		<button onclick={() => navigate('/')} aria-label="subway - we just ride - Logo - back to home" class="cursor-pointer">
			{@html logo}
		</button>
	</div>
	<div class="corner">
		<ul class="flex flex-col items-end xl:flex-row gap-x-12">
			<li aria-current={page.url.pathname.startsWith('/workbench') ? 'page' : undefined} class="aria-[current=page]:text-hero lg:inline-flex {uiobserver.navstate ? 'inline-flex' : 'hidden'}">
				<button onclick={() => navigate('/workbench')} class="cursor-pointer">+SERVICE/WORKBENCH</button>
			</li>
			<li aria-current={page.url.pathname.startsWith('/info') ? 'page' : undefined} class="aria-[current=page]:text-hero lg:inline-flex {uiobserver.navstate ? 'inline-flex' : 'hidden'}" >
				<button onclick={() => navigate('/info')} class="cursor-pointer">+INFORMATION</button>
			</li>
		</ul>
	</div>
</header>

