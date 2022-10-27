<script setup>
    
    import { reactive } from "@vue/reactivity";
    import { computed } from "@vue/runtime-core";
    import { uuid } from 'vue-uuid';
    // console.log(this.$uuid.v4());
    let state = reactive({
        uuid: uuid.v4(),
    })
    
    const isChecked = computed(() => {
            return props.modelValue == props.value
        })

    const props = defineProps({
        
        modelValue: {
            default: null,
        },
        value: {
            default: false,
        },
        name: String,
        label: {
            type: String,
            default: "label"
        }
        
    })
</script>
<template>
    <div class="swizard__radio__items__item">
        <input
        :id="state.uuid"
        type="radio"
        :name="props.name"
        :value="props.value"
        @click="$emit('click')"
        :checked="isChecked" 
        @change="$emit('update:modelValue', $event.target.value)"
    />
    <label :for="state.uuid"><span>{{ props.label }} </span></label>
    </div>
    
</template>