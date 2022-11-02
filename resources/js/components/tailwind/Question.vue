<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Question",
    },
});
</script>
<template>
    <div class="mb-1">
        <p class="text-lg font-bold">{{ props.text }}</p>
    </div>
</template>
