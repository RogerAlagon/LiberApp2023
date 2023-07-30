export default [
  {
    header: 'Modulo de Neumaticos',
    module: 'NEUMATICO',
  },
  {
    title: 'Maestros',
    icon: 'CpuIcon',
    module: 'NEUMATICO', 
    children: [
      /*{
        title: 'Plantilla Preventivo',
        route: 'mantenimiento-maestro-plantillap',
      },*/
    ],
  },
  {
    title: 'Transacciones', 
    icon: 'FileIcon', 
    module: 'NEUMATICO', 
    children: [
      {
        title: 'Rotacion', 
        route: 'neumatico-transaccion-rotacion', 
        module: 'NEUMATICO'
      },
    ]
  },
  {
    title: 'Reportes',
    icon: 'FileIcon',
    module: 'NEUMATICO',
    children: [
      /*{
        title: 'Reporte de Kilometraje',
        route: 'mantenimiento-reporte-kilometrajeh',
        module: 'MANTENIMIENTO',
      },*/
      
    ],
  },
]
