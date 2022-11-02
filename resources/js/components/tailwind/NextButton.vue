<template>
    <button
        type="button"
        class="bg-red-600 text-white flex items-center justify-center py-3 px-6 sm:py-4 sm:px-20 rounded"
    >
        {{ text }}
        <span class="ml-4 mt-1">
            <IconNext />
        </span>
    </button>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Next",
    },
});
</script>
