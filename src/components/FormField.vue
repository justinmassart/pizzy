<script lang="ts" setup>
import { defineEmits, defineProps, useAttrs } from 'vue'

defineProps<{
  id: string
  label: string
  placeholder: string
  inputType: string
  modelValue: string
}>()

const attrs = useAttrs()
const emit = defineEmits(['update:modelValue'])

function updateValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="form__field">
    <label :for="id" class="form__field__label">{{ label }}</label>
    <input
      :id
      :placeholder
      :type="inputType"
      :value="modelValue"
      class="form__field__input"
      v-bind="attrs"
      @input="updateValue"
    />
  </div>
</template>
