<script lang="ts" setup>
import type { OrderType } from '@/types/OrderType'

defineProps<{
  order: OrderType
}>()
</script>

<template>
  <div class="order">
    <div class="order__content">
      <div class="order__content__item">
        <p class="order__content__item__name">Margarita</p>
        <p class="order__content__item__quantity">1x</p>
      </div>
      <div class="order__content__item">
        <p class="order__content__item__name">Spicy</p>
        <p class="order__content__item__quantity">2x</p>
      </div>
    </div>
    <p class="order__customer">For : John Doe</p>
    <p class="order__created-at">Ordered at : 12:03:05</p>
    <p class="order__status">Status : Waiting</p>
  </div>
</template>
