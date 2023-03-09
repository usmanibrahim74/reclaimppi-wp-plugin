<template lang="">
    <step-title title="Please enter your PPI Claim details" />
    <template v-if="form">
        <div class="mt-6 mb-2">
            <question
                text="How much did you receive in TOTAL from your PPI refunds?"
            />
            <div class="grid sm:justify-items-center gap-x-6">
                <amount-box
                    v-model="form.amount"
                    label=""
                    :tooltip="messages.amount"
                />
                <div class="flex justify-start w-full mt-4">
                    <HasError field="amount" :errors="state.errors" />
                </div>
            </div>
        </div>
        <div class="mt-2 mb-4">
            <question
                class="leading-none"
                text="When did you receive your refunds?"
            />
            <span class="text-sm"
                >(Please select the dates when you received the refund)</span
            >
            <div class="grid md:grid-cols-3 mb-2 mt-4 gap-2">
                <checkbox
                    name="years"
                    v-model="form.years"
                    :value="2018"
                    label="Before 2019"
                />
                <checkbox
                    name="years"
                    v-model="form.years"
                    :value="2019"
                    label="2019"
                />
                <checkbox
                    name="years"
                    v-model="form.years"
                    :value="2020"
                    label="2020"
                />
                <checkbox
                    name="years"
                    v-model="form.years"
                    :value="2021"
                    label="2021"
                />
                <checkbox
                    name="years"
                    v-model="form.years"
                    value="false"
                    label="2022"
                />
            </div>

            <HasError
                field="years"
                :errors="state.errors"
                message="Please select at least one date"
            />
        </div>
        <div class="flex items-center justify-center">
            <NextButton text="Continue" @click="next" />
        </div>
    </template>
</template>
<script setup>
import AmountBox from "../../components/tailwind/AmountBox.vue";
import AmountTitle from "../../components/tailwind/AmountTitle.vue";
import { computed, reactive } from "vue";
import Reusable from "./../../reuseable";
import {  messages } from "./../options.json";
const { filterEmptyKeys, hasEvery, arrayIntersection, range } = Reusable();

let state = reactive({
    showAssessmentModal: false,
    required: ["amount", "years"],
    errors: [],
});
const emit = defineEmits(["update:modelValue", "forward"]);
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

function validate() {
    const form = props.modelValue;
    let required = Object.values(state.required);
    const empty_keys = filterEmptyKeys(form);
    let errors = arrayIntersection(empty_keys, required);
    if(form.years.length == 0){
        errors.push('years');
    }
    state.errors = [...errors];
    return !state.errors.length;
}

function next() {
    validate() && emit("forward");
}

function selfAssessedClick() {
    setTimeout(() => {
        state.showAssessmentModal = true;
    }, 0);
}
</script>
