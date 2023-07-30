export default [ 
    
    {
      path: '/Gps/Maestro/Geocerca',
      name: 'gps-maestro-geocerca',
      component: () => import('@/views/Gps/Maestro/Geocerca.vue'), 
      meta: { 
        pageTitle: 'Maestro de Geocercas', 
        breadcrumb: [ 
          {
            text: 'Geocercas',
          }, 
          {
            text: 'Maestro'
          }, 
          {
            text: 'Maestro de Geocercas', 
            active: true,
          }
        ]
      }
    },
    {
      path: '/Gps/Maestro/Evento',
      name: 'gps-maestro-evento',
      component: () => import('@/views/Gps/Maestro/Evento.vue'), 
      meta: { 
        pageTitle: 'Maestro de Eventos', 
        breadcrumb: [ 
          {
            text: 'Eventos',
          }, 
          {
            text: 'Maestro'
          }, 
          {
            text: 'Maestro de Eventos', 
            active: true,
          }
        ]
      }
    },
    {
      path: '/Gps/Transaccion/Trazabilidad',
      name: 'gps-transaccion-seguimiento',
      component: () => import('@/views/Gps/Transaccion/Seguimiento.vue'), 
      meta: { 
        pageTitle: 'Seguimiento Convoy', 
        breadcrumb: [ 
          {
            text: 'Seguimiento',
          }, 
          {
            text: 'Convoy'
          }, 
          {
            text: 'Seguimiento Convoy', 
            active: true,
          }
        ]
      }
    },
]