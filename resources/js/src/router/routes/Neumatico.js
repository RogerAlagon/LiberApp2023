export default [
  /*{
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
  },*/
  {
    path: '/Neumatico/Transaccion/Rotacion',
    name: 'mantenimiento-transaccion-rotacion',
    component: () => import('@/views/Neumatico/Transaccion/Rotacion.vue'), 
    meta: { 
      pageTitle: 'Rotacion de Llantas', 
      breadcrumb: [ 
        {
          text: 'Neumatico',
        }, 
        {
          text: 'Transaccion'
        }, 
        {
          text: 'Rotación de Llantas', 
          active: true,
        }
      ]
    }
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
