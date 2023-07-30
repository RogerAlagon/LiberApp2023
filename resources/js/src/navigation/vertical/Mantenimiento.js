export default [
  {
    header: 'Modulo de Mantenimiento',
    module: 'MANTENIMIENTO',
  },
  /*{
    title: 'Maestros',
    icon: 'CpuIcon',
    children: [
      {
        title: 'Vehículos',
        route: 'transporte-maestro-vehiculo',
      },
      {
        title: 'Tramos',
        route: 'transporte-maestro-tramo',
      },
      {
        title: 'Rutas',
        route: 'transporte-maestro-ruta',
      },
    ],
  },*/
  {
    title: 'Maestros',
    icon: 'CpuIcon',
    module: 'MANTENIMIENTO', 
    children: [
      {
        title: 'Plantilla Preventivo',
        route: 'mantenimiento-maestro-plantillap',
      },
      {
        title: 'Preventivo', 
        route: 'mantenimiento-maestro-preventivo',
      },
      /*{
        title: 'Vehículos',
        route: 'transporte-maestro-vehiculo',
      },
      {
        title: 'Tramos',
        route: 'transporte-maestro-tramo',
      },
      {
        title: 'Rutas',
        route: 'transporte-maestro-ruta',
      },*/
    ],
  },
  {
    title: 'Transacciones', 
    icon: 'FileIcon', 
    module: 'MANTENIMIENTO', 
    children: [
      {
        title: 'Preventivos', 
        route: 'mantenimiento-transaccion-preventivo', 
        module: 'MANTENIMIENTO'
      },
      {
        title: 'Backlogs', 
        route: 'mantenimiento-transaccion-backlog', 
        module: 'MANTENIMIENTO'
      },
      {
        title: 'Orden Trabajo', 
        route: 'mantenimiento-transaccion-ot', 
        module: 'MANTENIMIENTO'
      }, 
      {
        title: 'Kilometraje Promedio', 
        route: 'mantenimiento-transaccion-promedio',
        module: 'MANTENIMIENTO'
      },
      {
        title: 'Monitoreo', 
        route: 'mantenimiento-transaccion-monitoreo',
        module: 'MANTENIMIENTO'
      },
    ]
  },
  {
    title: 'Reportes',
    icon: 'FileIcon',
    module: 'MANTENIMIENTO',
    children: [
      {
        title: 'Reporte de Kilometraje',
        route: 'mantenimiento-reporte-kilometrajeh',
        module: 'MANTENIMIENTO',
      },
      {
        title: 'Reporte de Fallas',
        route: 'transporte-reporte-reportef',
        module: 'MANTENIMIENTO',
      },
      {
        title: 'Fallas',
        route: 'mantenimiento-reporte-falla',
        module: 'MANTENIMIENTO',
      },
      {
        title: 'Reporte de Kilometraje ',
        route: 'mantenimiento-reporte-kilometraje',
        module: 'MANTENIMIENTO',
      },
      {
        title: 'Reporte de Vencimiento', 
        route: 'mantenimiento-reporte-vencimiento', 
        module: 'MANTENIMIENTO',
      }, 
      { 
        title: 'Reporte de Proyeccion', 
        route: 'mantenimiento-reporte-proyeccion', 
        module: 'MANTENIMIENTO',
      },
      {
        title: 'Reporte de Backlog',
        route: 'mantenimiento-reporte-backlog', 
        module: 'MANTENIMIENTO',
      }, 
      {
        title: 'Reporte Orden de Trabajo',
        route: 'mantenimiento-reporte-ordent', 
        module: 'MANTENIMIENTO',
      }
      /*{ 
        title: 'Reporte de Preventivo',
        route: 'mantenimiento-reporte-preventivo', 
        module: 'MANTENIMIENTO',
      }*/
    ],
  },
]
