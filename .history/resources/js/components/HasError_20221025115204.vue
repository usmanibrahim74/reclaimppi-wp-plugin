<template>
    <!-- eslint-disable vue/no-v-html -->
    <div v-if="errors.has(field)" class="text-danger" v-html="errors.get(field)" />
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
      }
    }
  }
  </script>