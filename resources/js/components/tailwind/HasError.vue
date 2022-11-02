<template>
    <!-- eslint-disable vue/no-v-html -->
    <div v-if="errors.includes(field)" class="text-sm text-red-600 mb-2" v-html="getMessage" />
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
          default: null
      }
    },
    computed:{
      getMessage(){
        return this.message ? this.message : "The above field is required."
      }
    }
  }
  </script>
