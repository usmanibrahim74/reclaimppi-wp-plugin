<script setup>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { uuid } from "vue-uuid";
let state = reactive({
    uuid: uuid.v4(),
});

const isChecked = computed(() => {
    return props.modelValue == props.value;
});

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    value: {
        type: Boolean,
        default: false,
    },
    name: String,
    label: {
        type: String,
        default: "label",
    },
});
</script>
<template>
    <div class="mr-12">
        <input
            :id="state.uuid"
            type="checkbox"
            :value="props.value"
            :name="props.name"
            class="w-5 h-5 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            :checked="isChecked"
            @click="$emit('update:modelValue', $event.target.checked)"
        />

        <label
            :for="state.uuid"
            class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
            >{{ props.label }}</label
        >
    </div>
</template>
