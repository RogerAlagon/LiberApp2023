export default [
  /*{
    path: '/Transporte/Maestro/Vehiculo',
    name: 'transporte-maestro-vehiculo',
    component: () => import('@/views/combustible/maestro/Vehiculo.vue'),
    meta: {
      pageTitle: 'Gestión de Vehiculos',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Vehiculo',
          active: true,
        },
      ],
    },
  },*/
  {
    path: '/Transporte/Maestro/Vehiculo',
    name: 'mantenimiento-maestro-plantillap',
    component: () => import('@/views/Mantenimiento/Maestro/PlantillaPreventivo.vue'),
    meta: {
      pageTitle: 'Gestión de Plantilla Preventivo',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Plantilla Preventivo',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Transporte/Maestro/Preventivo',
    name: 'mantenimiento-maestro-preventivo',
    component: () => import('@/views/Mantenimiento/Maestro/Preventivo.vue'),
    meta: {
      pageTitle: 'Gestión de Maestro Preventivo',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Maestro Preventivo',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Mantenimiento/Transaccion/Preventivo', 
    name: 'mantenimiento-transaccion-preventivo', 
    component: () => import('@/views/Mantenimiento/Transaccion/Preventivo.vue'), 
    meta: { 
      pageTitle: 'Preventivos', 
      breadcrumb: [ 
        {
          text: 'Mantenimiento',
        }, 
        {
          text: 'Transaccion'
        }, 
        {
          text: 'Planificar Preventivos', 
          active: true,
        }
      ]
    }
  },
  {
    path: '/Mantenimiento/Transaccion/Backlog', 
    name: 'mantenimiento-transaccion-backlog', 
    component: () => import('@/views/Mantenimiento/Transaccion/Backlog.vue'), 
    meta: { 
      pageTitle: 'Backlogs', 
      breadcrumb: [ 
        {
          text: 'Mantenimiento',
        }, 
        {
          text: 'Transaccion'
        }, 
        {
          text: 'Backlogs', 
          active: true,
        }
      ]
    }
  },
  {
    path: '/Mantenimiento/Transaccion/Ordentrabajo', 
    name: 'mantenimiento-transaccion-ot', 
    component: () => import('@/views/Mantenimiento/Transaccion/Ordentrabajo.vue'),
    meta: {
      pageTitle: 'Orden de Trabajo', 
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Transaccion',
        },
        {
          text:'Orden de Trabajo', 
          active: true,
        }
      ]
    }
  },
  {
    path: '/Mantenimiento/Transaccion/Monitoreo', 
    name: 'mantenimiento-transaccion-monitoreo', 
    component: () => import('@/views/Mantenimiento/Transaccion/Monitoreo.vue'),
  },
  {
    path: '/Mantenimiento/Transaccion/KilometrajePromedio', 
    name: 'mantenimiento-transaccion-promedio', 
    component: () => import('@/views/Mantenimiento/Transaccion/KilometrajePromedio.vue'),
    meta: {
      pageTitle: 'Kilometraje Promedio', 
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Transaccion',
        },
        {
          text:'Kilometraje Promedio', 
          active: true,
        }
      ]
    }
  },
  {
    path: '/Mantenimiento/Reporte/Reportef',
    name: 'transporte-reporte-reportef',
    component: () => import('@/views/Mantenimiento/Reporte/Reportef.vue'),
    meta: {
      pageTitle: 'Reporte de Fallas',
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Reporte de Fallas',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Mantenimiento/Reporte/Kilometraje',
    name: 'mantenimiento-reporte-kilometraje',
    component: () => import('@/views/Mantenimiento/Reporte/Kilometraje.vue'),
    meta: {
      pageTitle: 'Reporte de Kilometraje',
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Reporte de Kilometraje',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Mantenimiento/Reporte/Kilometrajeh',
    name: 'mantenimiento-reporte-kilometrajeh',
    component: () => import('@/views/Mantenimiento/Reporte/Kilometrajeh.vue'),
    meta: {
      pageTitle: 'Historial de Kilometraje',
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Historial de Kilometraje',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Mantenimiento/Reporte/Falla',
    name: 'mantenimiento-reporte-falla',
    component: () => import('@/views/Mantenimiento/Reporte/Falla.vue'),
    meta: {
      pageTitle: 'Fallas por Vehículo',
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Falla',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Mantenimiento/Reporte/Vencimiento',
    name: 'mantenimiento-reporte-vencimiento',
    component: () => import('@/views/Mantenimiento/Reporte/Vencimiento.vue'),
    meta: {
      pageTitle: 'Reporte de Vencimiento',
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Vencimiento',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Mantenimiento/Reporte/Proyeccion',
    name: 'mantenimiento-reporte-proyeccion',
    component: () => import('@/views/Mantenimiento/Reporte/Proyeccion.vue'),
    meta: {
      pageTitle: 'Reporte de Proyeccion',
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Proyeccion',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Mantenimiento/Reporte/BacklogR',
    name: 'mantenimiento-reporte-backlog',
    component: () => import('@/views/Mantenimiento/Reporte/Backlog.vue'),
    meta: {
      pageTitle: 'Reporte de Backlog',
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Backlog',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Mantenimiento/Reporte/OrdentReporte',
    name: 'mantenimiento-reporte-ordent',
    component: () => import('@/views/Mantenimiento/Reporte/Ordentrabajo.vue'),
    meta: {
      pageTitle: 'Reporte de Orden Trabajo',
      breadcrumb: [
        {
          text: 'Mantenimiento',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Orden Trabajo',
          active: true,
        },
      ],
    },
  },




  /*{
    path: '/Mantenimiento/Reporte/Preventivo', 
    name: 'mantenimiento-reporte-preventivo', 
    component: () => import('@views/Mantenimiento/Reporte/MantenimientoVencimiento.vue'),
    meta: { 
      
    }
  },*/

  /*{
    path: '',
    name: 'combustible-maestro-hidrocarburo',
    component: () => import('@/views/charts-and-maps/charts/apex-chart/ApexChart.vue'),
    meta: {
      pageTitle: '',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Apex Chart',
          active: true,
        },
      ],
    },
  },
  {
    path: '',
    name: 'combustible-vale-aprobar',
    component: () => import('@/views/charts-and-maps/charts/apex-chart/ApexChart.vue'),
    meta: {
      pageTitle: '',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Apex Chart',
          active: true,
        },
      ],
    },
  },
  {
    path: '',
    name: 'combustible-vale-registrar',
    component: () => import('@/views/charts-and-maps/charts/apex-chart/ApexChart.vue'),
    meta: {
      pageTitle: '',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Apex Chart',
          active: true,
        },
      ],
    },
  },
  {
    path: '',
    name: 'combustible-vale-validar',
    component: () => import('@/views/charts-and-maps/charts/apex-chart/ApexChart.vue'),
    meta: {
      pageTitle: '',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Apex Chart',
          active: true,
        },
      ],
    },
  },
  {
    path: '',
    name: 'combustible-factura-importar',
    component: () => import('@/views/charts-and-maps/charts/apex-chart/ApexChart.vue'),
    meta: {
      pageTitle: '',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Apex Chart',
          active: true,
        },
      ],
    },
  },
  {
    path: '',
    name: 'combustible-factura-validar',
    component: () => import('@/views/charts-and-maps/charts/apex-chart/ApexChart.vue'),
    meta: {
      pageTitle: '',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Apex Chart',
          active: true,
        },
      ],
    },
  },
  /*{
    path: '/charts-and-maps/charts/chartjs',
    name: 'charts-chartjs',
    component: () => import('@/views/charts-and-maps/charts/chartjs/Chartjs.vue'),
    meta: {
      pageTitle: 'Chartjs',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Chartjs',
          active: true,
        },
      ],
    },
  },*/
  /*{
    path: '/charts-and-maps/charts/echart',
    name: 'charts-echart',
    component: () => import('@/views/charts-and-maps/charts/echart/Echart.vue'),
    meta: {
      pageTitle: 'Echart',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Echart',
          active: true,
        },
      ],
    },
  },*/
  /*{
    path: '/maps/leaflet',
    name: 'maps-leaflet',
    component: () => import('@/views/charts-and-maps/maps/leaflet/Leaflet.vue'),
    meta: {
      pageTitle: 'Leaflet',
      breadcrumb: [
        {
          text: 'Table',
        },
        {
          text: 'Leaflet',
          active: true,
        },
      ],
    },
  },*/
]
