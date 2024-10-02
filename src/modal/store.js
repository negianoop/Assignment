import { writable } from "svelte/store";

export const hasRightAnimationFinished = writable(false);
export const hasLoginClicked = writable(false);
export const toggleModal = writable(false); 