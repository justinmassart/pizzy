import { createRouter, createWebHistory } from 'vue-router'
import OrdersView from '@/views/OrdersView.vue'
import CustomersView from '@/views/CustomersView.vue'
import TablesView from '@/views/TablesView.vue'
import TransactionsView from '@/views/TransactionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'orders',
      component: OrdersView,
    },
    {
      path: '/tables',
      name: 'tables',
      component: TablesView,
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomersView,
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsView,
    },
  ],
})

export default router
