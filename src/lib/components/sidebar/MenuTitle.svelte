<script lang="ts">
  import Icon from '@iconify/svelte';

  export let onclick: () => void;
  export let active: boolean;
</script>

<div
  class="flex text-xs text-slate-700 uppercase font-semibold px-4 py-3 hover:text-default-900 rounded-lg cursor-pointer w-full divide-slate-900"
  on:click={onclick}
  on:keydown={onclick}
  tabindex="-1"
  role="button"
>
  <div>
    <slot/>
  </div>
  <span class="flex flex-grow justify-end">
    <Icon icon="ph:caret-down-bold" class="w-3 h-3 mt-0.5 justify-self-end {active && 'rotate-180'} transition-all" />
  </span>
</div>