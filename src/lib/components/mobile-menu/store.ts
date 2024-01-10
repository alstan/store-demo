import { writable } from 'svelte/store';

export const mobileMenuVisible = writable(false);

export function toggleMenu() {
  mobileMenuVisible.update((v) => !v);
}