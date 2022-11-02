<template>
    <button
        type="button"
        class="text-gray-600 flex items-center justify-center py-4 px-20 rounded"
    >
        <span class="mr-4"> <IconPrevious /> </span>{{ text }}
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
