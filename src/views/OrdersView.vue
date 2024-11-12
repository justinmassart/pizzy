<script lang="ts" setup>
import OrderCard from '@/components/OrderCard.vue'
import OrderModal from '@/components/modals/OrderModal.vue'

const orders = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
</script>

<template>
  <main class="order-view">
    <div class="top-content">
      <OrderModal />
    </div>
    <div class="orders-lists">
      <section class="waiting_orders">
        <h2 class="list-title">New/Waiting orders (4)</h2>
        <div class="orders-list card">
          <OrderCard v-for="(order, index) in orders" :key="index" />
        </div>
      </section>
      <section class="started_orders">
        <h2 class="list-title">Started orders (6)</h2>
        <div class="orders-list card">
          <OrderCard v-for="(order, index) in orders" :key="index" />
        </div>
      </section>
      <section class="ready_orders">
        <h2 class="list-title">Ready orders (2)</h2>
        <div class="orders-list card">
          <OrderCard v-for="(order, index) in orders" :key="index" />
        </div>
      </section>
      <section class="delivered_orders">
        <h2 class="list-title">Delivered orders (10)</h2>
        <div class="orders-list card">
          <OrderCard v-for="(order, index) in orders" :key="index" />
        </div>
      </section>
    </div>
  </main>
</template>
