<script lang="ts">
  import { page } from '$app/stores';

  let clazz = '';
  export {clazz as class}
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let link: string;
    const sizes = {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg'
    };
</script>

<li class="{link === $page.url.pathname ? 'text-zinc-200 bg-zinc-800/50' : 'text-zinc-400'} {sizes[size]}
    rounded-lg hover:text-zinc-200 hover:bg-zinc-800 {clazz} mt-0.5">
  <a
    href={link}
    class="flex space-x-3 items-center p-3 cursor-pointer whitespace-nowrap"
  >
    <slot />
  </a>
</li>