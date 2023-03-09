<script setup>
import { reactive } from "@vue/reactivity";
import { computed, defineEmits } from "@vue/runtime-core";
import { uuid } from "vue-uuid";
let state = reactive({
    uuid: uuid.v4(),
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const isChecked = computed(() => {
    return model.value.includes(props.value);
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
    <div class="px-4 py-3 bg-white border ">
        <input
            :id="state.uuid"
            type="checkbox" v-model="model"
            :value="props.value"
            :name="props.name"
            class="hidden"
        />

        <label :for="state.uuid" class="flex items-center cursor-pointer gap-4">
            <div
                class="w-5 h-5 border border-gray-400 bg-white rounded-full flex items-center justify-center"
            >
                <div
                    v-if="isChecked"
                    class="w-3 h-3 bg-green-500 rounded-full"
                ></div>
            </div>
            <span
                class="text-md font-medium dark:text-gray-300"
                :class="[isChecked? 'text-green-500':'text-black']"
            >
                {{ props.label }}
            </span>
        </label>
    </div>
</template>
