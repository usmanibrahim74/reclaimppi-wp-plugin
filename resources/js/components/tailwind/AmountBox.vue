<template>
    <div class="">
        <p class="mt-3 mb-1">{{ label }}</p>
        <div class="relative">
            <span
                class="absolute left-3 h-full flex items-center justify-center py-1 pr-3 pl-1 border-r w-10"
                >£</span
            >
            <input
                class="border-slate-300 py-3 pl-16 pr-10 rounded w-full"
                type="number"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <span
                class="absolute right-2 top-3 cursor-pointer"
                @click="$emit('icon:click')"
            >
                <IconInfo />
            </span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Question",
    },
    modelValue: String,
});
</script>
