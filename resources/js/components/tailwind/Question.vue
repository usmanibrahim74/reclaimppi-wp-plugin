<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Question",
    },
    labelFor: {
        type: String,
        default: "",
    },
});
</script>
<template>
    <div class="">
        <label :for="labelFor" class="text-lg font-bold">{{
            props.text
        }}</label>
    </div>
</template>
