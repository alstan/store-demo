<script lang="ts">
	import './style.css';
	import Header from '$lib/components/header/Header.svelte';
	import MainMenu from '$lib/components/sidebar/MainMenu.svelte';
	import MobileMenu from '$lib/components/mobile-menu/MobileMenu.svelte';
	import { mobileMenuVisible} from '$lib/components/mobile-menu/store';

</script>

<div class="all text-slate-200 bg-zinc-900 antialiased max-h-screen overflow-auto relative w-full {$mobileMenuVisible && 'overflow-hidden'}">
	<div class="bg-zinc-900 pb-14 overflow-hidden pt-[90px] mt-[-90px] absolute z-10 h-5/6 left-52 top-0 right-0">
		<div class="absolute z-10 bg-gradient-to-r blur-3xl from-purple-500 to-sky-500 rounded-full w-[40%] h-[80%] ml-[5%] mt-[-10%]"></div>
		<div class="absolute z-10 bg-gradient-to-r blur-3xl from-emerald-500 to-pink-500 rounded-full w-[40%] h-[100%] ml-[50%]"></div>
		<div class="absolute z-20 backdrop-blur-3xl bg-gradient-to-br from-zinc-900 from-10% to-zinc-800 to-50% h-full w-full opacity-75"></div>
		<div class="absolute z-30 bg-gradient-to-t from-zinc-900 from-30% to-transparent to-90% h-full w-full"></div>
	</div>
	<MainMenu />
	<main class="flex flex-col h-full lg:ml-64 relative z-20">
		<Header />
		<MobileMenu />
		<slot />
	</main>
</div>
