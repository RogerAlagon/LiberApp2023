export default [
  {
    header: 'Modulo de Gestión',
    module: 'GESTION',
  },
  {
    title: 'Maestros',
    icon: 'CpuIcon',
    module: 'GESTION',
    children: [
      {
        title: 'Generales',
        route: 'gestion-maestro-general',
        module: 'GESTION',
      },
      {
        title: 'Implementos',
        route: 'gestion-maestro-implemento',
        module: 'GESTION',
      },
      {
        title: 'Plantillas',
        route: 'gestion-maestro-plantilla',
        module: 'GESTION',
      },
      {
        title: 'Materiales',
        route: 'gestion-maestro-material',
        module: 'GESTION',
      },
    ],
  },
  {
    title: 'Transacciones',
    icon: 'FileIcon',
    module: 'GESTION',
    children: [
      {
        title: 'Aprobación de Viáticos',
        route: 'gestion-transaccion-aprobar',
        module: 'GESTION',
      },
      {
        title: 'Asignación',
        route: 'gestion-transaccion-asignacion',
        module:'GESTION'
      },
    ],
  },
  {
    title: 'Reporte',
    icon: 'FileIcon',
    module: 'GESTION',
    children: [
      {
        title: 'Resumen de Vencimientos',
        route: 'gestion-reporte-vencimiento',
        module: 'GESTION',
      },
      {
        title: 'Proyección de Vencimientos',
        route: 'gestion-reporte-proyeccion',
        module: 'GESTION',
      },
    ],
  },
]
