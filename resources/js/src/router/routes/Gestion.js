export default [
  {
    path: '/Gestion/Maestro/General',
    name: 'gestion-maestro-general',
    component: () => import('@/views/Gestion/maestro/General.vue'),
    meta: {
      pageTitle: 'Maestro General de Gestion',
      breadcrumb: [
        {
          text: 'Gestión',
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
    path: '/Gestion/Maestro/Implemento',
    name: 'gestion-maestro-implemento',
    component: () => import('@/views/Gestion/Maestro/Implemento.vue'),
    meta: {
      pageTitle: 'Maestro Implementos',
      breadcrumb: [
        {
          text: 'Gestión',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Implemento',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Gestion/Maestro/Plantilla',
    name: 'gestion-maestro-plantilla',
    component: () => import('@/views/Gestion/Maestro/Plantilla.vue'),
    meta: {
      pageTitle: 'Maestro Plantillas',
      breadcrumb: [
        {
          text: 'Gestión',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Plantilla',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Gestion/Maestro/Material',
    name: 'gestion-maestro-material',
    component: () => import('@/views/Gestion/Maestro/Material.vue'),
    meta: {
      pageTitle: 'Maestro Materiales',
      breadcrumb: [
        {
          text: 'Gestión',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Material',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Gestion/Transaccion/Aprobar',
    name: 'gestion-transaccion-aprobar',
    component: () => import('@/views/Gestion/Transaccion/Aprobar.vue'),
    meta: {
      pageTitle: 'Aprobar Viáticos',
      breadcrumb: [
        {
          text: 'Gestion',
        },
        {
          text: 'Transaccion',
        },
        {
          text: 'Aprobar Viáticos',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Gestion/Transaccion/Asignacion', 
    name: 'gestion-transaccion-asignacion', 
    component: () => import('@/views/Gestion/Transaccion/Asignacion.vue'),
    meta: {
      pageTitle: 'Gestión de Asignación', 
      breadcrumb: [
        {
          text:'Gestion', 
        }, 
        {
          text: 'Transaccion',
        }, 
        {
          text: 'Gestión de Asignacion', 
          active: true,
        },
      ],
    },
  },
  {
    path: '/Gestion/Reporte/Vencimiento',
    name: 'gestion-reporte-vencimiento',
    component: () => import('@/views/Gestion/Reporte/Vencimiento.vue'),
    meta: {
      pageTitle: 'Resumen de Vencimientos',
      breadcrumb: [
        {
          text: 'Gestion',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Resumen de Vencimientos',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Gestion/Reporte/Proyeccion',
    name: 'gestion-reporte-proyeccion',
    component: () => import('@/views/Gestion/Reporte/Proyeccion.vue'),
    meta: {
      pageTitle: 'Proyeccion de Vencimientos',
      breadcrumb: [
        {
          text: 'Gestion',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Proyeccion de Vencimientos',
          active: true,
        },
      ],
    },
  },
]
