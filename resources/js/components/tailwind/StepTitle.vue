<template>
    <div class="my-4 text-center">
        <p class="text-xl sm:text-2xl font-bold">{{ props.title }}</p>
    </div>
    <div>
        <hr class="border border-slate-200" />
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
