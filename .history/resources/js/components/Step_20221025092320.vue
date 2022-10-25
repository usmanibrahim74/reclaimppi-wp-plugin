<script setup>
    import { pro, onMounted, ref } from "vue";
</script>
<template>
    <div
            class="
                  flex items-center relative justify-evenly text-gray-500
                  before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-red-200 before:h-[3px] before:w-full
                  ">
            <p
              class="absolute -top-[50px] color-gray-300"
              :class="{ 'text-green-500': state.step > 0 }"
            >
              PPI Claim Details
            </p>
            <div class="flex justify-center items-center w-[40px] h-[40px] border border-gray-200 rounded-full"
                  :class="{ 
                      'border-green-500 text-green-500': state.step > 0 ,
                      'bg-green-500 bg-check-mark': state.step >= 2,
                    }"
            
            >1</div>
          </div>
</template>