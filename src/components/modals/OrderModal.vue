<script lang="ts" setup>
import TheModal from '@/components/modals/TheModal.vue'
import FormField from '@/components/FormField.vue'
</script>

<template>
  <TheModal modal-title="Create an order">
    <div class="form">
      <FormField id="customer" input-type="text" label="Customer" placeholder="John Doe" />
      <button class="btn-main">Create order</button>
    </div>
  </TheModal>
</template>
