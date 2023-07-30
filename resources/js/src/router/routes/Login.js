export default [
  {
    path: '/login',
    name: 'autenticacion',
    component: () => import('@/views/Login/Login.vue'),
    meta: {
      layout: 'full',
    },
  },
]