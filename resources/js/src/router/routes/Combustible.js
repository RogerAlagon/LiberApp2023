export default [
  {
    path: '/Combustible/Maestro/Grifo',
    name: 'combustible-maestro-grifo',
    component: () => import('@/views/Combustible/Maestro/Grifo.vue'),
    meta: {
      pageTitle: 'Gestión de Grifos',
      breadcrumb: [
        {
          text: 'Combustible',
        },
        {
          text: 'Maestro',
        },
        {
          text: 'Grifo',
          active: true,
        },
      ],
    },
  },
  {
    path: '/Combustible/Maestro/Precio', 
    name: 'combustible-maestro-precio',
    component: () => import('@/views/Combustible/Maestro/Precio.vue'),
    meta: {
      pageTitle: 'Gestión de Precios', 
      breadcrumb: [ 
        {
          text: 'Combustible',
        }, 
        {
          text: 'Maestro',
        }, 
        {
          text: 'Precio', 
          active: true,
        }
      ]
    }
  },
  {
    path: '/Combustible/Maestro/Combustible', 
    name: 'combustible-maestro-general',
    component: () => import('@/views/Combustible/Maestro/Combustible.vue'),
    meta: {
      pageTitle: 'Maestro de Combustible', 
      breadcrumb: [ 
        {
          text: 'Combustible',
        }, 
        {
          text: 'Maestro',
        }, 
        {
          text: 'Combustible', 
          active: true,
        }
      ]
    }
  },
  /*{
    path: '/Combustible/Maestro/Ruta', 
    name: 'combustible-maestro-ruta',
    component: () => import('@/views/Combustible/Maestro/Ruta.vue'),
    meta: {
      pageTitle: 'Gestión de Rutas', 
      breadcrumb: [ 
        {
          text: 'Combustible',
        }, 
        {
          text: 'Maestro',
        }, 
        {
          text: 'Ruta', 
          active: true,
        }
      ]
    }
  },*/
  {
    path: '/Combustible/Maestro/Consumo', 
    name: 'combustible-maestro-consumo',
    component: () => import('@/views/Combustible/Maestro/Consumo.vue'),
    meta: {
      pageTitle: 'Gestión de Consumo', 
      breadcrumb: [ 
        {
          text: 'Combustible',
        }, 
        {
          text: 'Maestro',
        }, 
        {
          text: 'Consumo', 
          active: true,
        }
      ]
    }
  }, 
  {
    path: '/Combustible/Transaccion/Abastecimiento', 
    name: 'combustible-vale-abastecimiento',
    component: () => import('@/views/Combustible/Transaccion/Abastecimiento.vue'), 
    meta: {
      pageTitle: 'Abastecimiento de Combustible', 
      breadcrumb: [
        {
          text: 'Combustible',
        }, 
        {
          text: 'Transaccion',
        }, 
        {
          text: 'Abastecimiento', 
          active: true,
        }
      ]
    }
  }, 
  {
    path: '/Combustible/Transaccion/Aprobar',
    name: 'combustible-transaccion-abastecimiento', 
    component: () => import('@/views/Combustible/Transaccion/AprobarAbastecimiento.vue'),
    meta: {
      pageTitle: 'Aprobar Abastecimiento', 
      breadcrumb: [
        {
          text: 'Combustible',
        },
        {
          text: 'Aprobar',
        },
        {
          text: 'Abastecimiento',
          active: true,
        }
      ]
    }
  },
  {
    path: '/Combustible/Transaccion/CalculoConsumo', 
    name: 'combustible-transaccion-cconsumo', 
    component: () => import('@/views/Combustible/Transaccion/CalculoConsumo.vue'),
    meta: {
      pageTitle: 'Validación consumo', 
      breadcrumb: [
        {
          text: 'Combustible'
        }, 
        {
          text: 'Validación'
        }, 
        {
          text: 'Consumo', 
          ative: true,
        }
      ]
    }
  },
  {
    path: '/Combustible/Transaccion/ValidacionConsumo', 
    name: 'combustible-transaccion-vconsumo', 
    component: () => import('@/views/Combustible/Transaccion/ValidacionConsumo.vue'), 
    meta: {
      pageTitle: 'Validación consumo', 
      breadcrumb: [
        {
          text: 'Combustible'
        }, 
        {
          text: 'Validación'
        }, 
        {
          text: 'Consumo', 
          ative: true,
        }
      ]
    }
  },

  {
    path: '/Combustible/Transaccion/DescuentoCombustible', 
    name: 'combustible-transaccion-descuento', 
    component: () => import('@/views/Combustible/Transaccion/DescuentoCombustible.vue'), 
    meta: {
      pageTitle: 'Descuentos por Exceso de Consumo', 
      breadcrumb: [
        {
          text: 'Combustible'
        }, 
        {
          text: 'Transaccion'
        }, 
        {
          text: 'Descuentos',
          ative: true,
        }
      ]
    }
  },
  {
    path: '/Combustible/Reporte/Abastecimiento',
    name: 'combustible-reporte-abastecimiento', 
    component: () => import('@/views/Combustible/Reporte/AbastecimientoR.vue'),
    meta: {
      pageTitle: 'Reporte de Abastecimiento', 
      breadcrumb: [
        {
          text: 'Combustible',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Abastecimiento',
          active: true,
        }
      ]
    }
  },
  {
    path: '/Combustible/Reporte/Analisis',
    name: 'combustible-reporte-analisis',
    component: () => import('@/views/Combustible/Reporte/AnalisisAbastecimiento.vue'),
    meta: {
      pageTitle: 'Analisis de Abastecimiento',
      breadcrumb: [
        {
          text: 'Combustible',
        },
        {
          text: 'Reporte',
        },
        {
          text: 'Analisis',
          active: true,
        },
      ],
    },
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
