<template lang="">
    <step-title title="Please enter your PPI Claim details" />
    <template v-show="form">
        <div v-show="state.part == 1" class="swizard_page2">
            <div class="mt-6 mb-4">
                <question
                    text="Were you earning less than £50,000 a year at the
                time you received your PPI refund?"
                />
                <div class="flex my-2">
                    <radio-box
                        name="less_earning"
                        v-model="form.less_earning"
                        :value="true"
                        label="Yes"
                    />
                    <radio-box
                        name="less_earning"
                        v-model="form.less_earning"
                        :value="false"
                        label="No"
                    />
                </div>

                <HasError field="less_earning" :errors="state.errors" />
            </div>
            <div class="mt-6 mb-2">
                <input-text
                    label="National Insurance (NI) Number"
                    v-model="form.ni_number"
                >
                    <span
                        class="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer group duration-300"
                    >
                        <IconInfo />
                        <span
                            class="absolute hidden group-hover:flex -left-[145px] sm:-left-[285px] -top-4 -translate-y-full sm:w-80 w-44 px-2 py-1 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"
                        >
                            {{ messages.ni }}
                        </span>
                    </span>
                </input-text>
                <div class="mt-2">
                    <HasError
                        field="invalid_ni"
                        :errors="state.errors"
                        message="Invalid NI Number"
                    />
                    <HasError field="ni_number" :errors="state.errors" />
                </div>
            </div>
            <div class="flex items-center mt-2 mb-6">
                <sign-checkbox
                    v-model="form.cant_remember"
                    :value="true"
                    label="Can't remember (Provide it later)"
                    :disabled="niCheckDisabled"
                />
            </div>
        </div>

        <div class="mt-6 mb-4 swizard_page3" v-if="state.part == 2">
            <question
                text="Please provide us with the TOTAL amount you
                received for your PPI refunds in the relevant tax
                years below:"
            />
            <div class="grid sm:grid-cols-2 sm:justify-items-center gap-x-6">
                <amount-box
                    v-for="i in range(1, 1, 4)"
                    v-model="form['year_' + i]"
                    :label="`Apr ${2019 + i - 1} - Mar ${2019 + i}`"
                    :tooltip="messages.years"
                />
                <div class="flex justify-start w-full mt-4">
                    <HasError
                        field="years"
                        :errors="state.errors"
                        message="Please fill at least one record"
                    />
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center">
            <NextButton text="Continue" @click="next" />
            <BackButton text="Back" @click="back" />
        </div>
    </template>
</template>
<script setup>
import AmountBox from "../../components/tailwind/AmountBox.vue";
import AmountTitle from "../../components/tailwind/AmountTitle.vue";
import { computed, reactive } from "vue";
import Reusable from "./../../reuseable";
import { years, messages } from "./../options.json";
const { filterEmptyKeys, hasEvery, arrayIntersection, range } = Reusable();

let state = reactive({
    showAssessmentModal: false,
    required: [["less_earning", "ni_number"], ["years"]],
    errors: [],
    part: 1,
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
    let required = Object.values(state.required[state.part - 1]);
    if (required.includes("ni_number") && form.cant_remember) {
        required.splice(required.indexOf("ni_number"), 1);
    }
    const empty_keys = filterEmptyKeys(form);
    let errors = arrayIntersection(empty_keys, required);
    console.log(errors);
    if (required.includes("years")) {
        hasEvery(Object.keys(years), empty_keys) && errors.push("years");
    }
    var ni_regex = new RegExp("^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$");
    if (
        ![null, ""].includes(form.ni_number) &&
        !ni_regex.test(form.ni_number) &&
        required.includes("ni_number")
    ) {
        errors.push("invalid_ni");
    }
    state.errors = [...errors];
    return !state.errors.length;
}

function next() {
    if (validate()) {
        if (state.part == 1) {
            state.part = 2;
        } else {
            emit("forward");
        }
    }
}

function back() {
    if (state.part == 2) {
        state.part = 1;
    } else {
        emit("backward");
    }
}

function selfAssessedClick() {
    setTimeout(() => {
        state.showAssessmentModal = true;
    }, 0);
}
</script>
