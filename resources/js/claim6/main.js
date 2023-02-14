import { createApp } from "vue";

import IconInfo from "./../icons/IconInfo.vue";
import IconNext from "./../icons/IconNext.vue";
import IconPrevious from "./../icons/IconPrevious.vue";
import IconSelect from "./../icons/IconSelect.vue";
import HasError from "./../components/tailwind/HasError.vue";
import NextButton from "./../components/tailwind/NextButton.vue";
import BackButton from "./../components/tailwind/BackButton.vue";
import RadioBox from "../components/tailwind/RadioBox.vue";
import Question from "../components/tailwind/Question.vue";
import InputText from "../components/tailwind/InputText.vue";
import InputSelect from "../components/tailwind/InputSelect.vue";
import SignCheckbox from '../components/tailwind/SignCheckbox.vue';
import StepTitle from './../components/tailwind/StepTitle.vue';
import { VueFinalModal } from "vue-final-modal";

import ModalMarkup from "../components/tailwind/ModalMarkup.vue"
import withUUID from "vue-uuid";


import VueSignaturePad from 'vue-signature-pad';


import mitt from 'mitt'
const emitter = mitt()

import App from "./App.vue";
const app = createApp(App)
app.provide('emitter', emitter)

// withUUID(c
    app.use(VueSignaturePad)
    .component('IconInfo', IconInfo)
    .component('IconNext', IconNext)
    .component('IconPrevious', IconPrevious)
    .component('IconSelect', IconSelect)
    .component('HasError', HasError)
    .component('NextButton', NextButton)
    .component('BackButton', BackButton)
    .component('VueFinalModal', VueFinalModal)
    .component('ModalMarkup', ModalMarkup)
    .component('RadioBox', RadioBox)
    .component('Question', Question)
    .component('InputText', InputText)
    .component('InputSelect', InputSelect)
    .component('SignCheckbox', SignCheckbox)
    .component('StepTitle', StepTitle)
    .mount("#app")

// );
