<script setup>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { uuid } from "vue-uuid";
let state = reactive({
  uuid: uuid.v4(),
});
const emit = defineEmits(["update:modelValue"]);

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
  disabled: {
    type: Boolean,
    default: false,
  },
  name: String,
  label: {
    type: String,
    default: "label",
  },
});
function updateValue(event) {
  emit("update:modelValue", event.target.checked);
}
</script>
<template>
  <div class="flex items-start">
    <input
      :id="state.uuid"
      type="checkbox"
      :value="props.value"
      :name="props.name"
      class="
        form-check-input
        appearance-none
        h-4
        w-4
        border border-gray-300
        rounded-sm
        bg-white
        checked:bg-blue-600 checked:border-blue-600
        focus:outline-none
        transition
        duration-200
        bg-no-repeat bg-center bg-contain
        float-left
        cursor-pointer
      "
      :checked="isChecked"
      @click="updateValue"
      :disabled="disabled"
    />

    <label
      :for="state.uuid"
      class="ml-2 text-sm md:text-md font-medium text-gray-900 leading-tight"
      >{{ props.label }}</label
    >
  </div>
</template>
