<script setup>
    const props = defineProps({
        current_step: {
            type: Number,
            default: 1,
        },
        title: {
            type: String,
            default: "Title",
        },
        step: {
            type: Number,
            default: 1,
        },
        isLastStep: {
            type: Boolean,
            default: false,
        },
    })

</script>
<template>
    <div
            class="
                  flex flex-1 items-center relative justify-evenly text-gray-500                  
                  "
            :class='{"before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-red-200 before:h-[3px] before:w-full": !props.isLastStep}'
                  >
            <p
              class="absolute -top-[50px] color-gray-300"
              :class="{ 'text-green-500': props.current_step > 0 }"
            >
              {{ props.title }}
            </p>
            <div class="flex justify-center items-center w-[40px] h-[40px] border border-gray-200 rounded-full z-10"
                  :class="{ 
                      'border-green-500 text-green-500': props.current_step > 0 ,
                      'bg-green-500 bg-check-mark': props.current_step >= props.step+1,
                    }"
            
            >{{ props.step }}</div>
          </div>
</template>