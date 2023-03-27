<template lang="">
    
    <step-title title="Is the below statement true?" />
    <div class="mt-6 mb-4">
      <question
          labelFor=""
          class="text-center max-w-[450px] mx-auto"
          text="Please press proceed if you were NOT self-employed the year you got your PPI refund."
          />
          <!-- text="I was NOT self-employed the year I received my PPI refund." -->
      <div class="flex flex-col md:flex-row gap-5 justify-center mt-6 items-center">
        
        <button @click="passed"
          type="button"
          class="border-red-600 border-solid border-2 font-medium text-red-600 flex items-center justify-center rounded py-2 px-4 max-w-[200px] w-full"
        >
        Proceed
        </button>
        <button
          type="button"
          class="border-red-600 border-solid border-2 font-medium text-red-600 flex items-center justify-center rounded py-2 px-4 max-w-[200px] w-full"
          @click="failed"
        >
        I was self-employed
        </button>

      </div>
    </div>
</template>
<script setup>
import { computed, reactive, inject } from "vue";

import Reusable from "../../reuseable";

const emitter = inject('emitter'); 
const { filterEmptyKeys, arrayIntersection } = Reusable();
let state = reactive({
  required: ["self_assessment"],
  errors: [],
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
  emitter.emit('toggleModal',{name: 'assessmentModal', show: true})
}
function next() {
  console.log('hanji')
  emit("forward");
  // validate() && emit("forward");
}
</script>
