import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const usePartyStore = defineStore('party', () => {
    const party = reactive({
        characters: [],
        group: [],
        limbo: [],
        storage: []
    });

    return { party };
});
