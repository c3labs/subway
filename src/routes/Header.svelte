<script lang="ts">
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

</script>

<header class="fixed left-0 z-[90] flex w-full justify-between px-5 pt-5 pb-20 sm:px-10 sm:pt-10 md:px-20 font-menu text-xs backdrop-blur-sm bg-[var(--bg-state-color)]/30 text-[var(--bg-menu-color)] transition-colors duration-500">
	<div class="corner">
		<ul class="flex gap-x-12">
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">TECH/BIKES</a>
				<button onclick={uiobserver.toggleUi}>UISTATE: {uiobserver.uistate}</button>
			</li>
			<li aria-current={page.url.pathname === '/projectone' ? 'page' : undefined} class="aria-[current=page]:text-red-600">
				<a href="/projectone">PROJECT ONE</a>
			</li>
			<li aria-current={page.url.pathname === '/leasing' ? 'page' : undefined} class="aria-[current=page]:text-red-600">
				<a href="/leasing">LEASING</a>
			</li>
		</ul>
	</div>

	<div class="absolute left-1/2 top-7 w-20 grow -translate-x-1/2 sm:top-5 sm:w-30 md:top-2 md:w-35 ">
		<!-- LOGO SECTION HERE -->
		<a aria-label="subway - we just ride - Logo - back to home" href="/">
			{@html logo}
		</a>
	</div>

	<div class="corner">
		<ul class="flex gap-x-12">
			<li aria-current={page.url.pathname.startsWith('/workbench') ? 'page' : undefined} class="aria-[current=page]:text-red-600">
				<a href="/workbench">+SERVICE/WORKBENCH</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/info') ? 'page' : undefined} class="aria-[current=page]:text-red-600">
				<a href="/info">+INFORMATION</a>
			</li>
		</ul>
	</div>
</header>

