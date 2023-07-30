export default [
  {
    header: 'Módulo de Personal',
    module: 'PERSONAL',
  },
  {
    title: 'Maestros',
    icon: 'CpuIcon',
    module: 'PERSONAL',
    children: [
     {
        title: 'Generales',
        route: 'personal-maestro-general',
        module: 'PERSONAL',
      },
    ],
  },
  {
    title: 'Transacciones',
    icon: 'FileIcon',
    module: 'PERSONAL',
    children: [
      {
        title: 'Solicitud de Viáticos',
        route: 'personal-transaccion-solicitud',
        module: 'PERSONAL',
      },
    ],
  },
]
