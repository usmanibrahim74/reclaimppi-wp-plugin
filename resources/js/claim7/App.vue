<script setup>
import { computed, onMounted, ref} from "vue";
import axios from "axios";
import state from "./state";
import Reusable from "../reuseable";
import Criteria from "./steps/criteria.vue";
import Claim from "./steps/claim.vue";
import Claim2 from "./steps/claim2.vue";
import About from "./steps/about.vue";
import Contact from "./steps/contact.vue";
import StartClaim from "./steps/start-claim.vue";
import ProgressStep from './../components/tailwind/ProgressStep.vue';
import Modal from "./modal.vue"

function stepForward() {
  if (state.step >= 1 && state.step <= 6) {
    state.step++;
    scrollUp();
  }
}
function stepBack() {
  if (state.step > 1 && state.step <= 6) {
    state.step--;
    scrollUp();
  }
}
async function submit() {

  state.loading = true
  const form1 = state.form[1];
  const amount = parseFloat((form1.amount/form1.years.length).toFixed(2));
  const years = {
    year_1 : form1.years.includes(2019) ? amount : 0,
    year_2 : form1.years.includes(2020) ? amount : 0,
    year_3 : form1.years.includes(2021) ? amount : 0,
    year_4 : form1.years.includes(2022) ? amount : 0,
  };
  years.year_1 += form1.years.includes(2018) ? amount : 0;
  
  const form = {
    externalID: window.location.href,
    source:"Friend",
    ...state.form[0],
    ...years,
    ...state.form[2],
    ...state.form[3],
    ...state.form[4],
    ...state.form[5],
  };

  const response = await axios.post(state.url, form);
  state.loading = false
  window.location.href = '/26-thanks?reference='+response.data.claimID+"&process=completed"
}
function scrollUp(){
  document.getElementById('app').scrollIntoView();
}
</script>

<template src="./template.html"></template>
