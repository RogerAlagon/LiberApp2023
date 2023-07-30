export default [
  {
    path: '/Personal/Maestro/General',
    name: 'personal-maestro-general',
    component: () => import('@/views/Personal/maestro/General.vue'),
    meta: {
      pageTitle: 'Maestro General de Personal',
      breadcrumb: [
        {
          text: 'Personal',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'General',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Personal/Transaccion/Solicitud',
    name: 'personal-transaccion-solicitud',
    component: () => import('@/views/Personal/Transaccion/Solicitud.vue'),
    meta: {
      pageTitle: 'Solicitud de Viáticos',
      breadcrumb: [
        {
          text: 'Personal',
        },
        {
          text: 'Transaccion',
        },
        {
          text: 'Solicitud de Viáticos',
          active: true,
        },
      ],
    },
  },
]
