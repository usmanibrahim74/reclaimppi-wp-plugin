import { createApp } from "vue";

import IconInfo from "./../icons/IconInfo.vue";
import IconNext from "./../icons/IconNext.vue";
import IconPrevious from "./../icons/IconPrevious.vue";
import IconSelect from "./../icons/IconSelect.vue";
import HasError from "./../components/tailwind/HasError.vue";
import NextButton from "./../components/tailwind/NextButton.vue";
import BackButton from "./../components/tailwind/BackButton.vue";
import { VueFinalModal } from "vue-final-modal";

import ModalMarkup from "../components/tailwind/ModalMarkup.vue"
import withUUID from "vue-uuid";


import VueSignaturePad from 'vue-signature-pad';



import App from "./App.vue";

// withUUID(
    createApp(App)
    .use(VueSignaturePad)
    .component('IconInfo', IconInfo)
    .component('IconNext', IconNext)
    .component('IconPrevious', IconPrevious)
    .component('IconSelect', IconSelect)
    .component('HasError', HasError)
    .component('NextButton', NextButton)
    .component('BackButton', BackButton)
    .component('VueFinalModal', VueFinalModal)
    .component('ModalMarkup', ModalMarkup)
    .mount("#app")

// );
