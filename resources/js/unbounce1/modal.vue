<template lang="">
    <vue-final-modal v-slot="{ close }" classes="flex justify-center items-center"
        content-class="relative flex flex-col w-[500px] max-h-full mx-4 border rounded bg-white"
        v-model="state.assessmentModal">
        <ModalMarkup title="Warning!!!" :text="messages.self_assessment" @close="close" />
    </vue-final-modal>
</template>
<script setup>

    import {messages} from "./options.json";
    import { onMounted, reactive, inject } from "vue";
    const emitter = inject('emitter'); 
    let state = reactive({
        assessmentModal: false,
    });
    onMounted(() => {
        emitter.on("toggleModal", ({name, show}) => {
            state[name] = show;
        });

    })
</script>
