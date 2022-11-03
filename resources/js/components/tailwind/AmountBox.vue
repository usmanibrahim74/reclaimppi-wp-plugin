<template>
    <div class="">
        <label class="inline-block mt-3 mb-1" :for="state.uuid">{{
            label
        }}</label>
        <div class="relative">
            <span
                class="absolute left-3 h-full flex items-center justify-center py-1 pr-3 pl-1 border-r w-10"
                >£</span
            >
            <input
                :id="state.uuid"
                class="border-slate-300 py-3 pl-16 pr-10 rounded w-full"
                type="number"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <span
                class="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer group duration-300"
            >
                <IconInfo />
                <span
                    class="absolute hidden group-hover:flex sm:-left-[285px] -left-[145px] -top-5 -translate-y-full sm:w-80 w-44 px-2 py-2 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"
                >
                    {{ tooltip }}
                </span>
            </span>
        </div>
    </div>
</template>
<script setup>
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
    tooltip: {
        type: String,
        default: "Tooltip",
    },
    modelValue: String,
});
</script>
