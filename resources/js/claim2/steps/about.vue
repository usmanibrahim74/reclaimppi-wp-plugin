<template lang="">
    <step-title title="Please complete your details below to start your claim" />

    <div class="flex flex-col sm:flex-row mt-6">
        <div class="basis-1/3 pr-2">
            <input-select class="" label="Title" :options="title"
                v-model="form.title" />
        </div>
        <div class="basis-1/3 pr-2 mt-5 sm:mt-0">
            <input-text class="" label="First Name" v-model="form.first_name" />
        </div>
        <div class="basis-1/3 pr-2 mt-5 sm:mt-0">
            <input-text class="" label="Last Name" v-model="form.last_name" />
        </div>
    </div>
    <HasError class="mt-1" field="name" :errors="state.errors"
        message="The above fields are required" />

    <question class="mt-6" text="DOB" />

    <div class="flex flex-col sm:flex-row">
        <input-select class="basis-1/3 pr-2" label="Day" in-select :options="range(1,1,31)"
            v-model="form.day" />
        <input-select class="basis-1/3 pr-2 mt-5 sm:mt-0" label="Month" in-select
            :options="months" v-model="form.month" />
        <input-select class="basis-1/3 pr-2 mt-5 sm:mt-0" label="Year" in-select
            :options="range(new Date().getFullYear()-100,1,new Date().getFullYear()).reverse()"
            v-model="form.year" />
    </div>
    <HasError class="mt-1" field="dob" :errors="state.errors" message="The above fields are required" />

    <div class="flex items-center justify-center flex-col">
        <NextButton class="mt-8 mb-2" text="Continue" @click="next" />
        <BackButton class="font-bold" text="Back" @click="$emit('backward')" />
    </div>
</template>
<script setup>
import { computed, reactive } from "vue";
import Reusable from "./../../reuseable";
const { range, hasSome, filterEmptyKeys, arrayIntersection } = Reusable();
import { title, months, name, dob } from "./../options.json";


let state = reactive({
  required: ["name", "dob"],
  errors: [],
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
  hasSome(Object.keys(name), empty_keys) && errors.push("name");
  hasSome(Object.keys(dob), empty_keys) && errors.push("dob");
  state.errors = [...errors];
  return !state.errors.length;
}
function next(){
    validate() && emit("forward");
}
</script>