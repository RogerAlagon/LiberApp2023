export default [
  {
    path: '/Finanza/Maestro/General',
    name: 'finanza-maestro-general',
    component: () => import('@/views/Finanza/maestro/General.vue'),
    meta: {
      pageTitle: 'Maestro General de Finanza',
      breadcrumb: [
        {
          text: 'Finanza',
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
    path: '/Finanza/Transaccion/Deposito',
    name: 'finanza-transaccion-deposito',
    component: () => import('@/views/Finanza/Transaccion/Deposito.vue'),
    meta: {
      pageTitle: 'Entrega de Viáticos',
      breadcrumb: [
        {
          text: 'Finanza',
        },
        {
          text: 'Transaccion',
        },
        {
          text: 'Entrega de Viáticos',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Finanza/Transaccion/Entrega',
    name: 'finanza-transaccion-entrega',
    component: () => import('@/views/Finanza/Transaccion/Entrega.vue'),
    meta: {
      pageTitle: 'Rendición de Viáticos',
      breadcrumb: [
        {
          text: 'Finanza',
        },
        {
          text: 'Transaccion',
        },
        {
          text: 'Rendición de Viáticos',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Finanza/Reporte/Deposito',
    name: 'finanza-reporte-deposito',
    component: () => import('@/views/Finanza/Reporte/Depositoh.vue'),
    meta: {
      pageTitle: 'Historial de Depósitos',
      breadcrumb: [
        {
          text: 'Finanza',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Historial de Depósitos',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Finanza/Reporte/Viatico',
    name: 'finanza-reporte-viatico',
    component: () => import('@/views/Finanza/Reporte/Viatico.vue'),
    meta: {
      pageTitle: 'Historial de Depósitos',
      breadcrumb: [
        {
          text: 'Finanza',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Historial de Viaticos',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Finanza/Transaccion/Comprobantes',
    name: 'finanza-transaccion-comprobante', 
    component: () => import('@/views/Finanza/Transaccion/Comprobante.vue'), 
    meta: {
      pageTitle: 'Comprobantes', 
      breadcrumb: [
        {
          text:'Finanza',
        },
        {
          text:'Transaccion'
        },
        {
          text: 'Comprobantes',
          active: true,
        }
      ]
    }
  },
  {
    path: '/Finanza/Reporte/Comprobantes',
    //path: '/Finanza/Transaccion/Comprobantes',
    name: 'finanza-reporte-rendimiento', 
    //name: 'finanza-transaccion-comprobante', 
    component: () => import('@/views/Finanza/Reporte/Rendimiento.vue'), 
    //component: () => import('@/views/Finanza/Transaccion/Comprobante.vue'), 
    meta: {
      pageTitle: 'Reporte de Comprobantes', 
      breadcrumb: [
        {
          text:'Finanza',
        },
        {
          text:'Transaccion'
        },
        {
          text: 'Comprobantes',
          active: true,
        }
      ]
    }
  },
]
