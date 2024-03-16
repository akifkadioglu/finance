// stores/counter.js
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => {
    return { isOpen: false };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    get() {
      return this.isOpen;
    },
  },
});
