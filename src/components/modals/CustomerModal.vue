<script lang="ts" setup>
import TheModal from '@/components/modals/TheModal.vue'
import FormField from '@/components/FormField.vue'
import { ref } from 'vue'
import { useCustomerStore } from '@/stores/customerStore'

const name = ref('')

const customerStore = useCustomerStore()

function handleSubmit() {
  customerStore.addCustomer({ name: name.value })
}
</script>

<template>
  <TheModal modal-title="Add a customer">
    <div class="form">
      <FormField
        id="name"
        v-model="name"
        input-type="text"
        label="Customer Name"
        placeholder="John Doe"
      />
      <button class="btn-main modal__submit" @click="handleSubmit">Add this customer</button>
    </div>
  </TheModal>
</template>
