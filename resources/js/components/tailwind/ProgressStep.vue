<template>
  <div class="w-full relative" :class="[active ? '' : 'hidden md:block']">
    <div
      class="absolute left-1/2 -top-10 -translate-x-1/2 text-center w-full"
      :class="[active || completed ? 'text-green-400' : 'text-gray-300']"
    >
      <strong>{{ props.title }}</strong>
    </div>
    <div
      class="
        border-2
        bg-white
        relative
        z-10
        rounded-full
        h-10
        w-10
        mx-auto
        flex
        items-center
        justify-center
      "
      :class="[
        completed ? 'bg-green-400 border-green-400' : '',
        active ? 'border-green-400 text-green-400' : 'text-gray-300',
      ]"
    >
      <template v-if="step >= current">
        {{ props.number }}
      </template>
      <template v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-check"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFFFFF"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </template>
    </div>
    <div
      class="w-full left-1/2 absolute top-1/2 -translate-y-1/2 right-0 h-1"
      :class="[completed ? 'bg-green-400' : 'bg-gray-300']"
      v-if="!isLast"
    ></div>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Step",
  },
  isLast: {
    type: Boolean,
    default: false,
  },
  step: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },

  current: {
    type: Number,
    required: true,
  },
});
const active = computed(() => {
  return props.current == props.step;
});
const completed = computed(() => {
  return props.current > props.step;
});
</script>
