<template>
    <button type="button" class="sbutton sbutton__primary sbutton--active">
            {{ text }} 
            <span v-if="!noIcon" class="sbutton__primary__icon">
              <IconNext  />
            </span>
          </button>
</template>
<script setup>


const props = defineProps({
  text: {
    type: String,
    default: "Next"
  },
  noIcon:{
      type: Boolean,
      default: false,
  }
});
</script>