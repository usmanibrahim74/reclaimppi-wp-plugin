<template lang="">
    <step-title title="Is the below statement true?" />
    <div class="mt-6 mb-4">
      <question
          labelFor=""
          class="text-center"
          text="I was Not self employed the year I received my PPI refund"
      />
      <div class="flex gap-5 justify-center mt-6">
        <button
          type="button"
          class="border-red-600 border-2 font-medium text-red-600 flex items-center justify-center py-3 px-6 sm:py-4 sm:px-20 rounded"
        >
            Yes
        </button>

        <button @click="$emit('forward')"
          type="button"
          class="bg-red-600 border-red-600 border-2 font-medium text-white flex items-center justify-center py-3 px-6 sm:py-4 sm:px-20 rounded"
        >
            No
        </button>
      </div>
    </div>
</template>
<script setup>
import { computed, reactive } from "vue";

import Reusable from "../../reuseable";
const { filterEmptyKeys, arrayIntersection } = Reusable();
let state = reactive({
  required: [],
  errors: [],
});
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "forward"]);
const form = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
function validate() {
  const form = props.modelValue;
  let required = Object.values(state.required);
  const empty_keys = filterEmptyKeys(form);
  let errors = arrayIntersection(empty_keys, required);

  var re = /\S+@\S+\.\S+/;
  if (form.email != null && !re.test(form.email)) {
    errors.push("invalid_email");
  }
  if (
    form.phone != null &&
    (form.phone.length != 11 || form.phone.charAt(0) != "0")
  ) {
    errors.push("invalid_phone");
  }
  if (!form.agree && !errors.includes("agree")) {
    errors.push("agree");
  }

  state.errors = [...errors];
  return !state.errors.length;
}
function next() {
  validate() && emit("forward");
}
</script>