<template>
    <div>
        <div class="relative border-b border-gray-300 py-4 px-3">
            <p class="text-2xl">{{ props.title }}</p>
            <button
                type="button"
                class="absolute right-4 top-3 text-3xl text-gray-400"
                @click="$emit('close')"
            >
                <span>&times;</span>
            </button>
        </div>
        <div class="p-3">
            <p>{{ props.text }}</p>
        </div>
        <div class="border-t border-gray-300 text-right text-white py-2 px-3">
            <button
                @click="$emit('close')"
                class="bg-blue-600 text-sm py-2 px-6 rounded"
            >
                Close
            </button>
        </div>
    </div>
</template>

<script setup>
import { emit } from "process";

const props = defineProps({
    title: {
        type: String,
        default: "Title",
    },
    text: {
        type: String,
        default: "Text",
    },
    buttonTitle: {
        type: String,
        default: "Close",
    },
});
</script>
