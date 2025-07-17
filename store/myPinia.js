import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        count: 0,
        isPlaying: false,
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
});