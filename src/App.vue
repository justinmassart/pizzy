<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Orders</RouterLink>
      <RouterLink to="/">Tables</RouterLink>
      <RouterLink to="/customers">Customers</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
