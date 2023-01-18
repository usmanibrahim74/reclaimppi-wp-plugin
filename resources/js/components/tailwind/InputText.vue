<template>
    <div>
        <question :labelFor="state.uuid" :text="label" />
        <div class="relative">
            <input
                :id="state.uuid"
                class="w-full pr-9 rounded border-slate-300 border bg-white"
                :type="type"
                :value="modelValue"
                :disabled="disabled"
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import Question from "./Question.vue";
import { reactive } from "@vue/reactivity";
import { uuid } from "vue-uuid";

let state = reactive({
    uuid: uuid.v4(),
});
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
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>
