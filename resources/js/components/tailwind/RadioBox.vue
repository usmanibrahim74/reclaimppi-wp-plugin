<script setup>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { uuid } from "vue-uuid";
let state = reactive({
    uuid: uuid.v4(),
});

const isChecked = computed(() => {
    console.log("props.value: ", props.value);
    let res = props.modelValue == props.value;
    console.log("isChecked: ", res);
    return res;
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
            type="radio"
            :value="props.value"
            :name="props.name"
            class="hidden"
            :checked="isChecked"
            @change="$emit('update:modelValue', $event.target.value == 'true')"
        />

        <label :for="state.uuid" class="flex items-center cursor-pointer">
            <div
                class="w-5 h-5 border border-gray-400 bg-white rounded-full flex items-center justify-center"
            >
                <div
                    v-if="isChecked"
                    class="w-3 h-3 bg-green-400 rounded-full"
                ></div>
            </div>
            <span
                class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300 checked:text-green-600"
                :class="[isChecked ? 'text-green-600' : 'text-inherit']"
            >
                {{ props.label }}
            </span>
        </label>
    </div>
</template>
