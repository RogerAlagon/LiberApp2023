export default [ 
    {
        
        path: '/Comercial/Transaccion/Orden',
        name: 'comercial-transaccion-servicio',
        component: () => import('@/views/Comercial/Transaccion/Orden.vue'),
        meta: {
          pageTitle: 'Orden de Servicio',
          breadcrumb: [
            {
              text: 'Comercial',
            },
            {
              text: 'Transaccion',
            },
            {
              text: 'Orden de Servicio',
              active: true,
            },
          ],
        },
    }, 
    {
        path: '/Comercial/Reporte/Orden',
        name: 'comercial-reporte-servicio', 
        component: () => import('@/views/Comercial/Reporte/Servicio.vue'),
        meta: {
          pageTitle: 'Control de Servicio', 
          breadcrumb: [
            {
              text: 'Comercial',
            },
            {
              text: 'Reporte',
            },
            {
              text: 'Control de Servicio',
              active: true,
            }
          ]
        }
    },
]