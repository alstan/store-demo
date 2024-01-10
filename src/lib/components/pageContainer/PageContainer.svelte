<script lang="ts">
export let title: string | null = null;
export let subtitle: string | null = null;
</script>

<div class="flex flex-col space-y-10 py-8 px-16 mx-auto w-full">
  {#if title || $$slots.extra }
    <div class="flex space-x-4 items-center ">
      {#if title}
        <div>
          <h1 class="font-bold text-4xl">{title}</h1>
          {#if subtitle}
            <h6 class="text-slate-500 text-md font-light">{subtitle}</h6>
          {/if}
        </div>
      {/if}
      <slot name="extra" />
    </div>
  {/if}
  <div class="flex flex-col h-full w-full space-y-10">
    <slot />
  </div>
</div>