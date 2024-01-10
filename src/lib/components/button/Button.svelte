<script lang="ts">
import { createEventDispatcher } from 'svelte';

export let type: 'primary' | 'default' | 'dark' | 'clean' | 'white' | 'success-light' = 'default';
export let size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
export let full = false;
export let iconOnly = false;
let clazz = '';
export { clazz as class };
export let outlined = false

let dispatcher = createEventDispatcher();

export function click(evt: MouseEvent | KeyboardEvent) {
  evt.stopPropagation();
  dispatcher('click');
}


const typeList = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
  default: 'bg-transparent border border-slate-300 hover:bg-slate-100 hover:border-transparent active:bg-slate-200',
  dark: 'bg-slate-800 text-white hover:bg-slate-700 active:bg-black',
  clean: 'bg-slate-100 hover:bg-slate-200 active:bg-slate-300',
  white: 'bg-white hover:bg-slate-100 active:bg-slate-100',
  'success-light': 'bg-lime-300 hover:bg-lime-400 active:bg-lime-500',
}

const typeListOutline = {
  ...typeList,
  primary: 'border border-blue-500 text-blue-500 hover:border-blue-400 active:border-blue-600',
  dark: 'border border-slate-800 text-slate-800 hover:border-slate-700 active:border-black',
  'success-light': 'border border-lime-600 text-lime-600 hover:border-lime-500 active:border-lime-800'
}

const sizeList = {
  lg: `${iconOnly ? 'px-2' : 'px-4'} py-2 text-lg font-semibold rounded-xl`,
  md: `${iconOnly ? 'px-1.5' : 'px-4'} py-1.5 text-md font-semibold rounded-lg`,
  sm: `${iconOnly ? 'px-1' : 'px-3'} py-1 text-sm rounded-md`,
  xs: `${iconOnly ? 'px-0.5' : 'px-2'} py-0.5 text-xs rounded-sm`
}
</script>

<button
  class="inline-flex items-center justify-center text-center box-border transition-all {outlined ? typeListOutline[type] : typeList[type]} {sizeList[size]} {clazz} {full && 'w-full'}"
  on:click={click}
>
  <slot />
</button>