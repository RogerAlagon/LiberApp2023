export default [
    {
        path: '/Ssoma/Maestro/PlantillaSsoma',
        name: 'ssoma-maestro-plantillassoma',
        component: () => import('@/views/Ssoma/Maestro/PlantillaSsoma.vue'),
        meta: {
          pageTitle: 'Maestro Plantillas',
          breadcrumb: [
            {
              text: 'Ssoma',
            },
            {
              text: 'Maestro',
            },
            {
              text: 'Plantillas',
              active: true,
            },
          ],
        },
    },
    {
        path: '/Ssoma/Maestro/ImplementoSsoma',
        name: 'ssoma-maestro-implementossoma',
        component: () => import('@/views/Ssoma/Maestro/ImplementoSsoma.vue'),
        meta: {
          pageTitle: 'Maestro Implementos',
          breadcrumb: [
            {
              text: 'Ssoma',
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
        path: '/Ssoma/Transaccion/AsignarEpp',
        name: 'ssoma-transaccion-asignarepp',
        component: () => import('@/views/Ssoma/Transaccion/AsignarEpp.vue'),
        meta: {
          pageTitle: 'Asignación de Epps',
          breadcrumb: [
            {
              text: 'Ssoma',
            },
            {
              text: 'Transaccion',
            },
            {
              text: 'Asignación de Epps',
              active: true,
            },
          ],
        },
      },
      {
        path: '/Ssoma/Reporte/Vencimiento',
        name: 'ssoma-reporte-vencimiento',
        component: () => import('@/views/Ssoma/Reporte/Vencimiento.vue'),
        meta: {
          pageTitle: 'Vencimiento de Epps',
          breadcrumb: [
            {
              text: 'Ssoma',
            },
            {
              text: 'Reporte',
            },
            {
              text: 'Vencimiento de Epps',
              active: true,
            },
          ],
        },
      },
      {
        path: '/Ssoma/Reporte/Proyeccion',
        name: 'ssoma-reporte-proyeccion',
        component: () => import('@/views/Ssoma/Reporte/Proyeccion.vue'),
        meta: {
          pageTitle: 'Proyección de Epps',
          breadcrumb: [
            {
              text: 'Ssoma',
            },
            {
              text: 'Reporte',
            },
            {
              text: 'Proyección de Epps',
              active: true,
            },
          ],
        },
      },
]