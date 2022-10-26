<template>
    <div class="sprogress-bar">
          <div
            class="sprogress-bar__step"
            :class="{
              'sprogress-bar__step--complete': props.step >= 2,
              'sprogress-bar__step--active': props.step > 0,
            }"
          >
            <p
              class="sprogress-bar__step__text"
              :class="{ 'sprogress-bar__step__text--active': props.step > 0 }"
            >
              PPI Claim Details
            </p>
            <div class="sprogress-bar__step-number">1</div>
          </div>
          <div
            class="sprogress-bar__step"
            :class="{
              'sprogress-bar__step--complete': props.step >= 3,
              'sprogress-bar__step--active': props.step >= 2,
            }"
          >
            <p
              class="sprogress-bar__step__text"
              :class="{ 'sprogress-bar__step__text--active': props.step >= 2 }"
            >
              About You
            </p>
            <div class="sprogress-bar__step-number">2</div>
          </div>
          <div
            class="sprogress-bar__step"
            :class="{
              'sprogress-bar__step--complete': props.step >= 4,
              'sprogress-bar__step--active': props.step >= 3,
            }"
          >
            <p
              class="sprogress-bar__step__text"
              :class="{ 'sprogress-bar__step__text--active': props.step >= 3 }"
            >
              Contact Details
            </p>
            <div class="sprogress-bar__step-number">3</div>
          </div>
          <div
            class="sprogress-bar__step"
            :class="{
              'sprogress-bar__step--complete': props.step > 4,
              'sprogress-bar__step--active': props.step >= 4,
            }"
          >
            <p
              class="sprogress-bar__step__text"
              :class="{ 'sprogress-bar__step__text--active': props.step >= 4 }"
            >
              Start Claim
            </p>
            <div class="sprogress-bar__step-number">4</div>
          </div>
        </div>
</template>
<script setup>

const props = defineProps({
        
        step: {
            type: Number,
            default: 1,
        },
    })
</script>