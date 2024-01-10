<script lang="ts">
import MenuTitle from '$lib/components/sidebar/MenuTitle.svelte';

export let title: string;
let active = true;

function toggle() {
  active = !active;
}
</script>

<div class="accordion">
  <MenuTitle onclick={toggle} active={active}>{title}</MenuTitle>
  <ul class="transition-all {!active && 'hidden'}">
    <slot />
  </ul>
</div>
