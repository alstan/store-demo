<script lang="ts">
  import Icon from '@iconify/svelte';
  export let icon: string;

  let clazz = '';
  export {clazz as class};
</script>

<span class="my-0.5 bg-zinc-400/10 p-[4px] grid mr-4 justify-items-center items-center rounded-md group-hover:text-blue-500 {clazz}">
  <Icon icon={icon} class="w-5 h-5" />
</span>