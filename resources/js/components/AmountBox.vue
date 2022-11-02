<template>
    <div class="swizard__years__items">
        <p>{{ label }}</p>
        <div class="swizard__years__items__item">
        <span class="swizard__years__items__item__left-icon">£</span>
        <input
            type="number"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="swizard__years__items__item__box hide-arrows"
        />
        <span class="swizard__years__items__item__right-icon" 
            ><IconInfo @mouseover="$emit('icon:click')"
        /></span>
        </div>
    </div>
</template>
<script setup>


const props = defineProps({
  label: {
    type: String,
    default: "Question"
  },
  modelValue: String,
});
</script>