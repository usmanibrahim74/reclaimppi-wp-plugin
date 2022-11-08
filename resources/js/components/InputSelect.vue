<template>
    <div class="swizard__input">
            <p v-if="!inSelect">{{ label }}</p>
        <div class="swizard__input__item">
            <select @change="$emit('update:modelValue', $event.target.value)" class="swizard__input__item__box select">
                <option value="">{{ props.inSelect ? props.label : "Select" }}</option>
                <option :selected="props.modelValue == getValue(o)" :value="getValue(o)" v-for="(o,i) in options" :key="i"> {{ getLabel(o) }} </option>
            </select>
            <span class="swizard__input__item__right-icon">
            <IconSelect />
            </span>
        </div>
    </div>
</template>
<script setup>

function getValue(option){
    return option.value || option
}
function getLabel(option){
    return option.label || option
}


const props = defineProps({
  label: String,
  options: {
      type: Array,
      required: true,
  },
  modelValue: String,
  inSelect: {
      type: Boolean,
      default: false
  }
});
</script>