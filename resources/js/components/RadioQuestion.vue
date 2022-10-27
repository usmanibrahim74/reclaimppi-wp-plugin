<script setup>


const props = defineProps({
  question: {
    type: String,
    default: "Question"
  },
  field: {
      type: String,
      default: "field_1"
  },
  errors: {
      type: Array,
      default: () => {
          return []
      }
  },

  errorMessage: {
      type: String,
      default: null,
  },
});
</script>
<template>
  <div class="swizard__radio">
    <p>
      {{ props.question }}
    </p>
    <div class="swizard__radio__items">
      <slot></slot>
    </div>
    <HasError :field="props.field" :errors="props.errors" :message="props.errorMessage" />
  </div>
</template>