<template>
  <div
    class="sprogress-bar__step"
    :class="{
      'sprogress-bar__step--complete': props.current >= props.step+1,
      'sprogress-bar__step--active': props.current >= props.step,
    }"
  >
    <p
      class="sprogress-bar__step__text"
      :class="{ 'sprogress-bar__step__text--active': props.step > 0 }"
    >
      {{props.title}}
    </p>
    <div class="sprogress-bar__step-number">{{ props.number }}</div>
  </div>
</template>
<script setup>

const props = defineProps({
        
        title: {
            type: String,
            default: "Step",
        },
        step: {
            type: Number,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },

        current: {
            type: Number,
            required: true,
        },
    })
</script>