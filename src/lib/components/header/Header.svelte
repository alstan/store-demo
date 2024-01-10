<script>
  import Icon from '@iconify/svelte';
  import { toggleMenu } from '$lib/components/mobile-menu/store';
</script>

<header class="w-full sticky top-0 bg-transparent supports-backdrop-blur:bg-white/60 z-40">
  <div class="flex h-16 px-2 mx-auto max-w-[1370px] w-full">
    <div class="flex items-center lg:hidden pl-7 flex-grow">
      <button class="bg-transparent border-0 mt-[-1px] mr-5" iconOnly on:click={toggleMenu}>
        <Icon icon="ph:list-fill" class="w-7 h-7" />
      </button>
      <div class="flex w-full h-14 items-center box-content">
      </div>
    </div>
    <div class="hidden md:flex flex-grow items-center justify-center">
        <div class="w-full max-w-[500px] h-9 rounded-full bg-zinc-900/60 flex items-center px-3.5 border border-zinc-800">
          <Icon icon="ph:magnifying-glass-bold" class="text-zinc-400/70 w-5 h-5" />
          <span class="text-zinc-400/70 text-md pl-2 font-semibold">Search</span>
        </div>
    </div>
  </div>
</header>