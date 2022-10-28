<template>
    <button type="button" class="sbutton sbutton__back">
      <span class="sbutton__primary__back">
        <IconPrevious />
      </span>{{ text }}
    </button>
</template>
<script setup>


const props = defineProps({
  text: {
    type: String,
    default: "Next"
  },
});
</script>