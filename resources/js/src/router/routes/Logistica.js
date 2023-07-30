export default [
    {
        path: '/Logistica/Maestro/Orden',
        name: 'logistica-maestro-orden',
        component: () => import('@/views/Logistica/Maestro/Orden.vue'),
        meta: {
          pageTitle: 'Gestión de Orden',
          breadcrumb: [
            {
              text: 'Logistica',
            },
            {
              text: 'Maestro',
            },
            {
              text: 'Orden',
              active: true,
            },
          ],
        },
      },
]