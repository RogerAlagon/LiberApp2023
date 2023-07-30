export default [
  {
    header: 'Módulo de Finanzas',
    module: 'FINANZA',
  },
  {
    title: 'Maestros',
    icon: 'CpuIcon',
    module: 'FINANZA',
    children: [
     {
        title: 'Generales',
        route: 'finanza-maestro-general',
        module: 'FINANZA',
      },
    ],
  },
  {
    title: 'Transacciones',
    icon: 'FileIcon',
    module: 'FINANZA',
    children: [
      {
        title: 'Depósitos',
        route: 'finanza-transaccion-deposito',
        module: 'FINANZA',
      },
      {
        title: 'Entregas a Rendir',
        route: 'finanza-transaccion-entrega',
        module: 'FINANZA',
      },
      {
        title: 'Comprobantes',
        route: 'finanza-transaccion-comprobante',
        module: 'FINANZA',
      },
    ],
  },
  {
    title: 'Reporte',
    icon: 'FileIcon',
    module: 'FINANZA',
    children: [
      {
        title: 'Historial de Viáticos',
        route: 'finanza-reporte-viatico',
        module: 'FINANZA',
      },
      {
        title: 'Reporte Comprobantes',
        route: 'finanza-reporte-rendimiento', 
        module: 'FINANZA'
      },
      {
        title: 'Historial ',
        route: 'finanza-reporte-deposito',
        module: 'FINANZA',
      },
    ],
  },
]
