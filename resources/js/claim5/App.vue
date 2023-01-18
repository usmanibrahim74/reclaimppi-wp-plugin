
<script setup>
import { computed, onMounted, ref} from "vue";
import axios from "axios";
import state from "./state";
import Reusable from "../reuseable";
import Criteria from "./steps/criteria.vue";
import Claim from "./steps/claim.vue";
import About from "./steps/about.vue";
import Contact from "./steps/contact.vue";
import StartClaim from "./steps/start-claim.vue";
import ProgressStep from './../components/tailwind/ProgressStep.vue';
import Modal from "./modal.vue"
function stepForward() {
  if (state.step >= 1 && state.step <= 5) {
    state.step++;
    scrollUp();
  }
}
function stepBack() {
  if (state.step > 1 && state.step <= 5) {
    state.step--;
    scrollUp();
  }
}
async function submit() {

  state.loading = true
  const form = {
    ...state.form[0],
    ...state.form[1],
    ...state.form[2],
    ...state.form[3],
    ...state.form[4],
  };

  const response = await axios.post(state.url, form);
  state.loading = false
window.open('/thank-you?reference='+response.data.claimID, '_blank');
  // window.location.href = '/thank-you?reference='+response.data.claimID
}
function scrollUp(){
  document.getElementById('app').scrollIntoView();
}
</script>

<template src="./template.html"></template>

