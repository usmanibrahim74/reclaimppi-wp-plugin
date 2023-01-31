<template lang="">
    <step-title title="Enter your contact details to claim your tax back" />
    <div>
        <div class="mt-6">
            <input-text type="email" label="Email" v-model="form.email" />
            <HasError class="mt-1" field="email" :errors="state.errors" />
            <HasError class="mt-1" field="invalid_email" :errors="state.errors"
                message="Invalid Email" />
        </div>
        <div class="mt-6">
            <input-text type="tel" label="Phone Number" v-model="form.phone" />
            <HasError class="mt-1" field="phone" :errors="state.errors" />
            <HasError class="mt-1" field="invalid_phone" :errors="state.errors"
                message="Invalid Phone Number" />
        </div>

        <div class="mt-6">
            <input-text label="Address" v-model="form.address" />
            <HasError class="mt-1" field="address" :errors="state.errors" />
        </div>
        <div class="mt-6">
            <input-text label="Postcode" v-model="form.postcode" />
            <HasError class="mt-1" field="postcode" :errors="state.errors" />
        </div>
    </div>
    <div class="flex items-center mt-4 text-sm">
        <sign-checkbox v-model="form.agree" :value="true"
            label="I agree for Reclaim My PPI Tax to contact me with regards to any tax rebate purposes." />
    </div>
    <HasError class="mt-2" field="agree" :errors="state.errors" />

    <div class="flex items-center justify-center flex-col mt-7">
        <NextButton text="Continue" @click="next" />
        <BackButton text="Back" @click="$emit('backward')" />
    </div>
</template>
<script setup>
import { computed, reactive } from "vue";

import Reusable from "./../../reuseable";
const { filterEmptyKeys, arrayIntersection } = Reusable();
let state = reactive({
    required: ["phone", "address", "postcode", "agree", "signature"],
    errors:[]
});
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  messages: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "forward"]);
const form = computed({
  get() {
    console.log(props);
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
  // if (form.email != null && !re.test(form.email)) {
  //   errors.push("invalid_email");
  // }
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