<script lang="ts" setup>
const orders = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
</script>

<template>
  <main class="orders-list-container">
    <section class="waiting_orders orders-list card">
      <div v-for="(order, index) in orders" :key="index" class="order">
        <div class="order__items">
          <p class="order__items__name">Margarita</p>
          <p class="order__items__quantity">1x</p>
        </div>
        <p>John Doe</p>
        <p>12:03:05</p>
        <p>Waiting</p>
      </div>
    </section>
    <section class="started_orders orders-list card">
      <div v-for="(order, index) in orders" :key="index" class="order">
        <div class="order__items">
          <p class="order__items__name">Margarita</p>
          <p class="order__items__quantity">1x</p>
        </div>
        <p>John Doe</p>
        <p>12:03:05</p>
        <p>started</p>
      </div>
    </section>
    <section class="ready_orders orders-list card">
      <div v-for="(order, index) in orders" :key="index" class="order">
        <div class="order__items">
          <p class="order__items__name">Margarita</p>
          <p class="order__items__quantity">1x</p>
        </div>
        <p>John Doe</p>
        <p>12:03:05</p>
        <p>ready</p>
      </div>
    </section>
    <section class="delivered_orders orders-list card">
      <div v-for="(order, index) in orders" :key="index" class="order">
        <div class="order__items">
          <p class="order__items__name">Margarita</p>
          <p class="order__items__quantity">1x</p>
        </div>
        <p>John Doe</p>
        <p>12:03:05</p>
        <p>Delivered at 12:05:55</p>
      </div>
    </section>
  </main>
</template>
