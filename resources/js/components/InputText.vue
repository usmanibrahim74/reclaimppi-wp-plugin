<template>
    <div class="swizard__input">
        <p>{{ label }}</p>
        <div class="swizard__input__item">
            <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="swizard__input__item__box" />
            <slot></slot>
            
        </div>
    </div>
</template>
<script setup>


const props = defineProps({
  label: {
    type: String,
    default: "Question"
  },
  
  type: String,
  modelValue: String,
});
</script>