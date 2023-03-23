
<script setup>
import { computed, onMounted, ref} from "vue";
import axios from "axios";
import state from "./state";
import Reusable from "../reuseable";
import ProgressStep from './../components/ProgressStep.vue';
import StepTitle from './../components/StepTitle.vue';
import GreatNews from './../components/GreatNews.vue';
import RadioBox from "../components/RadioBox.vue";
import RadioQuestion from "../components/RadioQuestion.vue";
import AmountBox from "../components/AmountBox.vue";
import InputText from "../components/InputText.vue";
import InputSelect from "../components/InputSelect.vue";

import options from "./options.json";

const { filterEmptyKeys, hasSome, hasEvery, arrayIntersection, range } = Reusable();
const signaturePad = ref(null);

onMounted(() => {});

const niCheckDisabled = computed(()=> {
  state.form[0].cant_remember = false;
  return state.form[0].ni_number?.length
})

function selfAssesedClick(){
  setTimeout(()=>{
    state.showAssesmentModal = true
  },0)
}


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
    var ni_regex = new RegExp('^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$');
    if(![null,''].includes(form.ni_number) && !ni_regex.test(form.ni_number)) {
        errors.push('invalid_ni')
    }
  }
  if (state.step == 2) {
    hasSome(Object.values(state.name), empty_keys) && errors.push("name");
    hasSome(Object.values(state.dob), empty_keys) && errors.push("dob");
  }
  if (state.step == 3) {
    var re = /\S+@\S+\.\S+/;
    if(form.email != null && !re.test(form.email)) {
        errors.push("invalid_email")
    }
    if(form.phone != null && (form.phone.length != 11 || form.phone.charAt(0) != "0")) {
        errors.push("invalid_phone")
    }
    if(!form.agree && !errors.includes('agree'))
    {
      errors.push('agree');
    }
  }
  state.errors = [...errors];
  return !state.errors.length;
}

function stepForward() {
  if (validate() && state.step >= 1 && state.step <= 4) {
  
    state.step++;
    scrollUp()
  }
}
function stepBack() {
  if (state.step > 1 && state.step <= 4){
    state.step--;
    scrollUp()
  } 
}
function scrollUp(){
  document.getElementById('app').scrollIntoView();
}
function clearSignature(){
  signaturePad.value.clearSignature();
}
async function submit() {
  const { isEmpty, data } = signaturePad.value.saveSignature();
  if (isEmpty) {
    state.errors.push("signature");
    return;
  }
  state.loading = true
  state.form[3].signature = data;
  const form = {
    externalID: window.location.href,
    ...state.form[0],
    ...state.form[1],
    ...state.form[2],
    ...state.form[3],
  };
  const response = await axios.post(state.url, form);
  // state.loading = false
  window.location.href = '/thank-you?reference='+response.data.claimID+"&process=completed"
}
</script>

  <template src="./template.html"></template>
