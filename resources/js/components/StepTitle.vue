<template>
    <div class="swizard__title">
            <p class="swizard__title__p text-center step-title">
              {{props.title}}
            </p>
            <hr class="swizard__title__line" />
          </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>