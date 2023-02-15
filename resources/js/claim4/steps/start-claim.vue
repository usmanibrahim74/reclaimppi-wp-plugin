<template lang="">
    
    <preloader v-if="loading" />
    <great-news />
    
    <input-text
        label="Do you have a referral code? (optional)"
        v-model="form.referral_code"
    />

    <div class="mt-6 mb-1">
        <p class="mb-1">Please draw your signature below in the green box.</p>
        <div class="">
            <VueSignaturePad
                class="w-full bg-white border border-green-500 rounded"
                ref="signaturePad"
            />
            <HasError
                class="mt-2"
                field="signature"
                :errors="state.errors"
                message="Signature required"
            />
        </div>
    </div>

    <small class="font-bold cursor-pointer" @click="clearSignature"
        >Clear Signature</small
    >

    <div class="flex items-center justify-center flex-col mt-8">
        <NextButton
            :disabled="loading"
            no-icon
            :text="loading ? 'Please Wait ---' : 'Start Your Claim'"
            @click="submit"
        />
        <BackButton text="Back" @click="$emit('backward')" />
    </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import GreatNews from "./../../components/tailwind/GreatNews.vue";
import Preloader from "./../../components/tailwind/Preloader.vue";
const signaturePad = ref(null);
let state = reactive({
    errors: [],
    
});
const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
    },
    loading: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue", "forward"]);
function clearSignature() {
    signaturePad.value.clearSignature();
}
function submit() {
    const { isEmpty, data } = signaturePad.value.saveSignature();
    if (isEmpty) {
        state.errors.push("signature");
        return;
    }
    form.value.signature = data;
    emit("forward");
}
const form = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        return new Proxy(props.modelValue, {
            set(obj, key, value) {
                emit("update:modelValue", { ...obj, [key]: value });
                return true;
            },
        });
    },
});
</script>
