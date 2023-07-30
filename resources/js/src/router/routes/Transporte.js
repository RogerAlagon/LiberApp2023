export default [
  {
    path: '/Transporte/Maestro/General',
    name: 'transporte-maestro-general',
    component: () => import('@/views/Transporte/Maestro/General.vue'),
    meta: {
      pageTitle: 'Maestro General de Transporte',
      breadcrumb: [
        {
          text: 'Transporte',
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
    path: '/Transporte/Maestro/Tercero',
    name: 'transporte-maestro-tercero',
    component: () => import('@/views/Transporte/Maestro/Tercero.vue'),
    meta: {
      pageTitle: 'Maestro Tercero',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Tercero',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Transporte/Maestro/Tramo',
    name: 'transporte-maestro-tramo',
    component: () => import('@/views/Transporte/Maestro/Tramo.vue'),
    meta: {
      pageTitle: 'Tramos',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Tramo',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Transporte/Maestro/Vehiculo',
    name: 'transporte-maestro-vehiculo',
    component: () => import('@/views/Transporte/Maestro/Vehiculo.vue'),
    meta: {
      pageTitle: 'Vehiculos',
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
  },
  {
    path: '/Transporte/Maestro/Ruta',
    name: 'transporte-maestro-ruta',
    component: () => import('@/views/Transporte/Maestro/Ruta.vue'),
    meta: {
      pageTitle: 'Rutas Comerciales',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Ruta Comercial',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Transporte/Maestro/Plantilla',
    name: 'transporte-maestro-plantilla',
    component: () => import('@/views/Transporte/Maestro/PlantillaTransporte.vue'),
    meta: {
      pageTitle: 'Plantilla Transporte',
      breadcrumb: [
        {
          text: 'Transporte',
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
    path: '/Transporte/Maestro/Implemento',
    name: 'transporte-maestro-documento',
    component: () => import('@/views/Transporte/Maestro/DocumentoTransporte.vue'),
    meta: {
      pageTitle: 'Implemento Transporte',
      breadcrumb: [
        {
          text: 'Transporte',
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
    path: '/Transporte/Transaccion/Convoy',
    name: 'transporte-transaccion-convoy',
    component: () => import('@/views/Transporte/Transaccion/Convoy.vue'),
    meta: {
      pageTitle: 'Convoys Activos',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Transaccion',
        },
        {
          text: 'Convoy',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Transporte/Transaccion/Seguimiento',
    name: 'transporte-transaccion-seguimiento',
    component: () => import('@/views/Transporte/Transaccion/Seguimiento.vue'),
    meta: {
      pageTitle: 'Seguimiento de Unidades',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Transaccion',
        },
        {
          text: 'Seguimiento',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Transporte/Transaccion/Reporte',
    name: 'transporte-reporte-servicio',
    component: () => import('@/views/Transporte/Reporte/Servicio.vue'),
    meta: {
      pageTitle: 'Reporte Servicio',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Servicio',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Transporte/Reporte/DocumentoTransporte',
    name: 'transporte-reporte-documento',
    component: () => import('@/views/Transporte/Reporte/DocumentoTransporte.vue'),
    meta: {
      pageTitle: 'Documento Vencido',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Documento Vencido',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Transporte/Reporte/Proyeccion',
    name: 'transporte-reporte-proyeccion',
    component: () => import('@/views/Transporte/Reporte/Proyeccion.vue'),
    meta: {
      pageTitle: 'Proyección Documento',
      breadcrumb: [
        {
          text: 'Transporte',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Proyeccion Documento',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Transporte/Transaccion/Renovacion', 
    name: 'transporte-transaccion-renovacion', 
    component: () => import('@/views/Transporte/Transaccion/RenovacionDocumento.vue'), 
    meta: { 
      pageTitle: 'Renovación Documento', 
      breadcrumb: [ 
        {
          text: 'Transporte',
        }, 
        {
          text: 'Transaccion'
        }, 
        {
          text: 'Renovación Documento', 
          active: true,
        }
      ]
    }
  },
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
