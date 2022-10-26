
<script setup>
import { onMounted, ref} from "vue";
import axios from "axios";
import state from "./state";
import Reusable from "../reuseable";
import ProgressStep from './../components/ProgressStep.vue';
import StepTitle from './../components/StepTitle.vue';
import GreatNews from './../components/GreatNews.vue';

const { filterEmptyKeys, hasSome, hasEvery, arrayIntersection } = Reusable();
const signaturePad = ref(null);

onMounted(() => {});


function validate() {
  const required = Object.values(state.required[state.step - 1]);
  const form = state.form[state.step - 1];
  if (required.includes("ni_number") && form.cant_remember) {
    required.splice(required.indexOf("ni_number"), 1);
  }
  const empty_keys = filterEmptyKeys(form);
  let errors = arrayIntersection(empty_keys, required);
  if (state.step == 1) {
    hasEvery(Object.values(state.year), empty_keys) && errors.push("year");
    form.self_assesment && errors.push('already_assessed');
  }
  if (state.step == 2) {
    hasSome(Object.values(state.name), empty_keys) && errors.push("name");
    hasSome(Object.values(state.dob), empty_keys) && errors.push("dob");
    console.log(errors);  
  }
  state.errors = [...errors];
  return !state.errors.length;
}

function stepForward() {
  if (validate() && state.step >= 1 && state.step <= 4) {
    state.step++;
  }
}
function stepBack() {
  if (state.step >= 1 && state.step <= 4) state.step--;
}
function clearSignature(){
  signaturePad.value.clearSignature();
}
function submit() {
  const { isEmpty, data } = signaturePad.value.saveSignature();
  if (isEmpty) {
    state.errors.push("signature");
    return;
  }
  state.form[3].signature = data;
  const form = {
    ...state.form[0],
    ...state.form[1],
    ...state.form[2],
    ...state.form[3],
  };
  axios.post(state.url, form);
}
</script>

  <template src="./template.html"></template>
