<template>
    <div class="swizard__years__items">
        <p>{{ label }}</p>
        <div class="swizard__years__items__item">
            <span class="swizard__years__items__item__left-icon">£</span>
            <input
                type="number"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                class="swizard__years__items__item__box hide-arrows"
            />
            <span class="swizard__years__items__item__right-icon">
                <div class="tooltip">
                    <IconInfo />
                    <div class="top">
                        <p>{{ tooltip }}</p>
                        <i></i>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Question",
    },
    tooltip: {
        type: String,
        default: "",
    },
    modelValue: String,
});
</script>
