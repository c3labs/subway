<script lang="ts">
	import { page } from '$app/state';
	import { scrollY } from 'svelte/reactivity/window';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';

	$effect(() => {
		if (scrollY.current > 4100 && scrollY.current < 6300) {
			document.documentElement.style.cssText = "--bg-state-color:var(--color-neutral-50);";
		} else {
			document.documentElement.style.cssText = "--bg-state-color:var(--color-neutral-900);";
		}
	});
</script>

<header class="fixed left-0 z-[90] flex w-full justify-between px-5 pt-5 pb-20 sm:px-10 sm:pt-10 md:px-20 font-menu text-xs backdrop-blur-sm bg-neutral-100/20 text-[var(--bg-state-color)] transition-colors duration-500">
	<div class="corner">
		<ul class="flex gap-x-12">
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">TECH/BIKES</a>
			</li>
			<li aria-current={page.url.pathname === '/projectone' ? 'page' : undefined}>
				<a href="/projectone">PROJECT ONE</a>
			</li>
			<li aria-current={page.url.pathname === '/leasing' ? 'page' : undefined}>
				<a href="/leasing">LEASING</a>
			</li>
		</ul>
	</div>

	<div>
		<!-- LOGO SECTION HERE -->
		<!-- <a href="https://svelte.dev/docs/kit">
			<img src={logo} alt="SvelteKit" />
		</a> -->
	</div>

	<div class="corner">
		<ul class="flex gap-x-12">
			<li aria-current={page.url.pathname.startsWith('/workbench') ? 'page' : undefined}>
				<a href="/workbench">+SERVICE/WORKBENCH{scrollY.current}</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/info') ? 'page' : undefined}>
				<a href="/info">+INFORMATION</a>
			</li>
		</ul>
	</div>
</header>

