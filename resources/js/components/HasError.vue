<template>
    <!-- eslint-disable vue/no-v-html -->
    <div v-if="errors.includes(field)" class="swizard__error" v-html="message" />
    <!--eslint-enable-->
  </template>
  
  <script>
  export default {
    name: 'HasError',
    props: {
      errors: {
        type: Object,
        required: true
      },
  
      field: {
        type: String,
        required: true
      },
      message: {
          type: String,
          default: "The above field is required."
      }
    },
  }
  </script>