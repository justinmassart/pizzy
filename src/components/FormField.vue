<script lang="ts" setup>
defineProps<{
  label: string
  id: string
  placeholder: string
  inputType: string
}>()
</script>

<template>
  <div class="form__field">
    <label :for="id" class="form__field__label">{{ label }}</label>
    <input :id :placeholder :type="inputType" class="form__field__input" />
  </div>
</template>
