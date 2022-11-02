<template>
    <div class="mb-5">
        <p class="text-lg font-bold">{{ props.title }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>
