<script lang="ts" setup>
import { defineExpose, defineProps, ref, watch } from 'vue'

const open = ref(false)

defineProps<{
  modalTitle: string
  buttonText?: string
}>()

const emit = defineEmits(['close'])

function closeModal() {
  open.value = false
}

function openModal() {
  open.value = true
}

watch(open, (newVal) => {
  if (!newVal) {
    emit('close')
  }
})

defineExpose({
  closeModal,
  openModal,
})
</script>

<template>
  <button class="btn-main btn-add-new" @click="open = true">{{ buttonText ?? modalTitle }}</button>
  <div v-if="open" class="modal">
    <div class="modal__background-close" @click="open = false"></div>
    <div class="modal__body">
      <div class="modal__header">
        <p class="modal__title">{{ modalTitle }}</p>
        <div class="modal__close" @click="open = false"></div>
      </div>
      <div class="modal__main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
