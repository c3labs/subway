<script lang="ts">
	import { page } from '$app/state';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
</script>

<header class="fixed left-0 z-[90] flex w-full justify-between px-5 pt-5 sm:px-10 sm:pt-10 md:px-20 top-12 sm:top-6 font-menu text-xs">
	<div class="corner">
		<ul>
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
		<ul>
			<li aria-current={page.url.pathname.startsWith('/workbench') ? 'page' : undefined}>
				<a href="/workbench">+SERVICE/WORKBENCH</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/info') ? 'page' : undefined}>
				<a href="/info">+INFORMATION</a>
			</li>
		</ul>
	</div>
</header>

