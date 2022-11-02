<template>
    <question :text="label" />
    <div class="relative">
        <input
            class="w-full pr-9 rounded border-slate-300"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <slot></slot>
    </div>
</template>
<script setup>
import Question from "./Question.vue";
const props = defineProps({
    label: {
        type: String,
        default: "Question",
    },
    type: {
        type: String,
        default: "text",
    },
    modelValue: {
        type: String,
        default: "",
    },
});
</script>
