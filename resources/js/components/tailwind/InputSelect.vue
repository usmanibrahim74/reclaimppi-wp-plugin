<template>
    <div class="">
        <question v-if="!inSelect" :labelFor="state.uuid" :text="label" />
        <div class="relative">
            <select
                :id="state.uuid"
                @change="$emit('update:modelValue', $event.target.value)"
                class="w-full rounded border-slate-300 bg-select bg-[length:20px_14px]"
            >
                <option :value="null">
                    {{ props.inSelect ? props.label : "Select" }}
                </option>
                <option
                    :selected="props.modelValue == getValue(o)"
                    :value="getValue(o)"
                    v-for="(o, i) in options"
                    :key="i"
                >
                    {{ getLabel(o) }}
                </option>
            </select>
            <span
                class="absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2"
            >
            </span>
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

function getValue(option) {
    return option.value || option;
}
function getLabel(option) {
    return option.label || option;
}

const props = defineProps({
    label: String,
    options: {
        type: Array,
        required: true,
    },
    modelValue: String,
    inSelect: {
        type: Boolean,
        default: false,
    },
});
</script>
