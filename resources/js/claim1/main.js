import { createApp } from "vue";

import IconInfo from "./../icons/IconInfo.vue";
import IconNext from "./../icons/IconNext.vue";
import IconPrevious from "./../icons/IconPrevious.vue";
import IconSelect from "./../icons/IconSelect.vue";
import HasError from "./../components/HasError.vue";
import { VueFinalModal } from "vue-final-modal";

import ModalMarkup from "../components/ModalMarkup.vue"


import VueSignaturePad from 'vue-signature-pad';



import App from "./App.vue";

createApp(App)
    .use(VueSignaturePad)
    .component('IconInfo', IconInfo)
    .component('IconNext', IconNext)
    .component('IconPrevious', IconPrevious)
    .component('IconSelect', IconSelect)
    .component('HasError', HasError)
    .component('VueFinalModal', VueFinalModal)
    .component('ModalMarkup', ModalMarkup)
    .mount("#app");

