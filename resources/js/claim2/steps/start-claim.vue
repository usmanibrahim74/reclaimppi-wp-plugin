<template lang="">
    <great-news />

    <input-text label="Do you have a referral code? (optional)" v-model="form.referral_code" />

    <div class="mt-6 mb-1">
        <p class="mb-1">
            Please draw your signature below in the green box.
        </p>
        <div class="">
            <VueSignaturePad class="w-full bg-white border border-green-500 rounded"
                ref="signaturePad" />
            <HasError class="mt-2" field="signature" :errors="state.errors"
                message="Signature required" />
        </div>
    </div>

    <small class="font-bold cursor-pointer" @click="clearSignature">Clear Signature</small>

    <div class="flex items-center justify-center flex-col mt-8">
        <NextButton :disabled="loading" no-icon
            :text="loading? 'Please Wait ---': 'Start Your Claim'" @click="submit" />
        <BackButton text="Back" @click="$emit('backward')" />
    </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import GreatNews from './../../components/tailwind/GreatNews.vue';
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

const emit = defineEmits(["update:modelValue",'forward']);
function clearSignature(){
  signaturePad.value.clearSignature();
}
function submit(){
  const { isEmpty, data } = signaturePad.value.saveSignature();
  if (isEmpty) {
    state.errors.push("signature");
    return;
  }
  form.signature = data;
  emit('forward');
}
const form = computed({
  get() {
      console.log(props)
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

</script>
