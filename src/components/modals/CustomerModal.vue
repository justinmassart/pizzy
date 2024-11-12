<script lang="ts" setup>
import TheModal from '@/components/modals/TheModal.vue'
import FormField from '@/components/FormField.vue'
import { defineEmits, ref, watch } from 'vue'
import { useCustomerStore } from '@/stores/customerStore'
import type { Customer } from '@/types/customer'

const props = defineProps<{
  selectedCustomer?: Customer | undefined
}>()

const name = ref('')
const customerStore = useCustomerStore()
const modalRef = ref()
const emit = defineEmits(['customerUpdated', 'unselectCustomer'])

watch(
  () => props.selectedCustomer,
  (customer) => {
    if (customer) {
      name.value = customer.name
      modalRef.value.openModal()
    }
  },
)

function resetName() {
  emit('unselectCustomer')
  name.value = ''
}

function createCustomer() {
  customerStore.addCustomer({ name: name.value, createdAt: Date.now() })
  emit('customerUpdated')
  modalRef.value.closeModal()
}

function updateCustomer() {
  if (props.selectedCustomer) {
    customerStore.updateCustomer(props.selectedCustomer, name.value)
    emit('customerUpdated')
    modalRef.value.closeModal()
  }
}

function deleteCustomer() {
  if (props.selectedCustomer) {
    customerStore.deleteCustomer(props.selectedCustomer)
    emit('customerUpdated')
    modalRef.value.closeModal()
  }
}
</script>

<template>
  <TheModal
    ref="modalRef"
    :modal-title="props.selectedCustomer ? 'Update a customer' : 'Add a customer'"
    button-text="Add a customer"
    @close="resetName"
  >
    <div class="form">
      <FormField
        id="name"
        v-model="name"
        input-type="text"
        label="Customer Name"
        placeholder="John Doe"
      />
      <div class="modal__footer">
        <button class="btn-main btn-delete modal__delete" @click="deleteCustomer">
          Delete this customer
        </button>
        <button
          class="btn-main modal__submit"
          @click="props.selectedCustomer ? updateCustomer() : createCustomer()"
        >
          {{ props.selectedCustomer ? 'Update this customer' : 'Add this customer' }}
        </button>
      </div>
    </div>
  </TheModal>
</template>
