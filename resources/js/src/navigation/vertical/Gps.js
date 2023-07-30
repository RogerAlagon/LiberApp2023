export default [
  {
    header: 'Modulo de Centro de Control',
    module: 'GPS',
  },
  {
    title: 'Maestros',
    icon: 'CpuIcon',
    module: 'GPS', 
    children: [
      {
        title: 'Geocercas',
        route: 'gps-maestro-geocerca',
        module: 'GPS',
      },
      {
        title: 'Eventos', 
        route: 'gps-maestro-evento',
        module: 'GPS',
      },
    ],
  },
  {
    title: 'Transacciones', 
    icon: 'FileIcon', 
    module: 'GPS', 
    children: [
      {
        title: 'Seguimiento', 
        route: 'gps-transaccion-seguimiento',
        module: 'GPS'
      }
    ]
  }
]
