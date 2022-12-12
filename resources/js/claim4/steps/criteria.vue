<template lang="">
    <vue-final-modal
            v-slot="{ close }"
            classes="flex justify-center items-center"
            content-class="relative flex flex-col w-[500px] max-h-full mx-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900"
            v-model="state.showAssessmentModal"
        >
        <ModalMarkup
            title="Warning!!!"
            :text="messages.self_assessment"
            @close="close"
        />
    </vue-final-modal>
    <step-title title="Is the below statement true?" />
    <div class="mt-6 mb-4">
      <question
          labelFor=""
          class="text-center"
          text="I was NOT self-employed the year I received my PPI refund."
      />
      <div class="flex gap-5 justify-center mt-6">
        <button
          type="button"
          class="border-red-600 border-solid border-2 font-medium text-red-600 flex items-center justify-center py-3 px-10 sm:py-4 sm:px-20 rounded"
          @click="failed"
        >
            Yes
        </button>

        <button @click="passed"
          type="button"
          class="bg-red-600 border-solid border-red-600 border-2 font-medium text-white flex items-center justify-center py-3 px-10 sm:py-4 sm:px-20 rounded"
        >
            No
        </button>
      </div>
    </div>
</template>
<script setup>
import { computed, reactive } from "vue";

import {messages} from "./../options.json";
import Reusable from "../../reuseable";
const { filterEmptyKeys, arrayIntersection } = Reusable();
let state = reactive({
  required: ["self_assessment"],
  errors: [],
  showAssessmentModal: false,
});
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const form = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const emit = defineEmits(["update:modelValue", "forward"]);

function validate() {
  const form = props.modelValue;
  let required = Object.values(state.required);
  const empty_keys = filterEmptyKeys(form);
  let errors = arrayIntersection(empty_keys, required);

  
  // form.self_assessment && errors.push("already_assessed");
  
  
  state.errors = [...errors];
  
  return !state.errors.length;
}
function passed(){
  form.self_assessment = false ;
  next()
}
function failed(){
  form.self_assessment = true;
  state.showAssessmentModal = true;
}
function next() {
  emit("forward");
  // validate() && emit("forward");
}
</script>