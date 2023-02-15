<template lang="">
    <div
        class="absolute w-full h-full left-0 top-0 bg-gray-100 bg-opacity-70 z-30 flex flex-col justify-center"
    >
        <div class="flex items-center justify-center">
            <div
                class="w-40 h-40 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin"
            ></div>
        </div>
        <div class="text-center mt-10 relative">
            <p
                class="font-medium text-3xl absolute transition-opacity left-1/2 -translate-x-1/2 w-full"
                :class="[state.toggleText ? 'opacity-100' : 'opacity-0']"
            >
                {{ state.texts[state.textA] }}
            </p>
            <p
                class="font-medium text-3xl absolute transition-opacity left-1/2 -translate-x-1/2 w-full"
                :class="[state.toggleText ? 'opacity-0' : 'opacity-100']"
            >
                {{ state.texts[state.textB] }}
            </p>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";

const state = reactive({
    textA: 0,
    textB: 1,
    toggleText: true,
    texts: [
        "Please be patient with this",
        "It may take a while",
        "We are working on it",
    ],
});

onMounted(() => {
    state.textA = 0;
    setInterval(() => {
        if (!state.toggleText) {
            state.textA =
                state.textA + 2 > state.texts.length - 1 ? 0 : state.textA + 2;
        } else {
            state.textB =
                state.textB + 2 > state.texts.length - 1 ? 1 : state.textB + 2;
        }

        state.toggleText = !state.toggleText;
    }, 5000);
});
</script>
<style lang=""></style>
