<template>
    <div class="smodal__header">
        <p class="smodal__title">{{ props.title }}</p>
        <button type="button" class="smodal__close" @click="$emit('close')">
          <span>&times;</span>
        </button>
      </div>
      <div class="smodal__body">
        <p>{{ props.text }}</p>
      </div>
      <div class="smodal__footer">
        <button @click="$emit('close')" class="smodal__footer__btn">close</button>
      </div>
</template>

<script setup>
import { emit } from 'process';

    const props = defineProps({

        title: {
            type: String,
            default: "Title",
        },
        text: {
            type: String,
            default: "Text",
        },
        buttonTitle: {
            type: String,
            default: "Close",
        },
    })


</script>
