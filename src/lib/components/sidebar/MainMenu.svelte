<script>
import MenuItem from '$lib/components/sidebar/MenuItem.svelte';
import MenuIcon from '$lib/components/sidebar/MenuIcon.svelte';
import UserButton from '$lib/components/UserButton.svelte';
</script>

<div class="main-menu fixed hidden lg:block w-64 bg-zinc-950/50 z-20">
  <div class="flex pl-5 h-16 items-center box-content">
    <UserButton />
  </div>
  <nav class="main-nav flex flex-col pt-6 pl-0 pr-0 space-y-3 overflow-y-auto styled-scrollbars">
    <div>
      <ul class="px-3">
        <MenuItem  link="/">
          <MenuIcon class="text-zinc-500 group-hover:text-sky-600" icon="ph:house-fill" />
          Discover
        </MenuItem>
        <MenuItem link="/browse">
          <MenuIcon class="text-zinc-500 group-hover:text-blue-600" icon="ph:squares-four-fill" />
          Browse
        </MenuItem>
        <MenuItem link="/cart">
          <MenuIcon class="text-zinc-500 group-hover:text-fuchsia-600" icon="ph:shopping-bag-open-fill" />
          Cart
        </MenuItem>
      </ul>
    </div>
  </nav>
  <div class="flex w-full items-center space-x-3 px-5 h-14">

  </div>
</div>

<style>
  .main-menu {
      top: 0;
      height: 100vh;
  }

  .main-nav {
    height: calc(100% - 120px);
  }
</style>