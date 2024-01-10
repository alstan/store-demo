<script lang="ts">
  import { mobileMenuVisible } from '$lib/components/mobile-menu/store';
  import { fade, slide } from 'svelte/transition';
  import { cubicIn, quintOut } from 'svelte/easing';
  import MenuItem from '$lib/components/sidebar/MenuItem.svelte';
  import MenuIcon from '$lib/components/sidebar/MenuIcon.svelte';
  import { toggleMenu } from '$lib/components/mobile-menu/store';
  import Button from '$lib/components/button/Button.svelte';
  import Icon from '@iconify/svelte';
</script>
{#if $mobileMenuVisible}
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="fixed z-50 bg-slate-900/60 inset-0" transition:fade={{ delay: 0, duration: 100, easing: cubicIn }} on:click={toggleMenu} on:keydown={toggleMenu} role="dialog">
    <div class="relative bg-white w-80 h-full py-7 pl-3 pr-16  shadow-lg" transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}>
      <Button type="white" size="md" iconOnly on:click={toggleMenu} class="absolute right-3 top-3">
        <Icon icon="ph:x-bold" class="w-5 h-5" />
      </Button>
      <ul class="space-y-2">
        <MenuItem size="lg"  link="/">
          <MenuIcon class="text-sky-500 group-hover:text-sky-600" bordered icon="ph:house-fill" />
          Discover
        </MenuItem>
        <MenuItem size="lg" link="/browse">
          <MenuIcon class="text-blue-500 group-hover:text-blue-600" bordered icon="ph:squares-four-fill" />
          Browse
        </MenuItem>
        <MenuItem size="lg" link="/cart">
          <MenuIcon class="text-fuchsia-500 group-hover:text-fuchsia-600" icon="ph:shopping-bag-open-bold" bordered />
          Cart
        </MenuItem>
      </ul>
    </div>
  </div>
{/if}
