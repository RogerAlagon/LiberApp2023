export default [
  {
    header: 'Módulo de Transporte',
    module: 'TRANSPORTE',
  },
  {
    title: 'Maestros',
    icon: 'CpuIcon',
    module: 'TRANSPORTE',
    children: [
     {
        title: 'Generales',
        route: 'transporte-maestro-general',
        module: 'TRANSPORTE',
      },
      {
        title: 'Vehículos',
        route: 'transporte-maestro-vehiculo',
        module: 'TRANSPORTE',
      },
      {
        title: 'Tramos',
        route: 'transporte-maestro-tramo',
        module: 'TRANSPORTE',
      },
      {
        title: 'Rutas',
        route: 'transporte-maestro-ruta',
        module: 'TRANSPORTE',
      },
      {
        title: 'Tercero',
        route: 'transporte-maestro-tercero',
        module: 'TRANSPORTE',
      },
      {
        title: 'Plantillas',
        route: 'transporte-maestro-plantilla',
        module: 'TRANSPORTE',
      },
      {
        title: 'Documentos',
        route: 'transporte-maestro-documento',
        module: 'TRANSPORTE',
      },
    ],
  },
  {
    title: 'Transacciones',
    icon: 'FileIcon',
    module: 'TRANSPORTE',
    children: [
      {
        title: 'Convoys',
        route: 'transporte-transaccion-convoy',
        module: 'TRANSPORTE',
      },
      {
        title: 'Servicios',
        route: 'transporte-transaccion-registrar',
        module: 'TRANSPORTE',
      },
      {
        title: 'Seguimiento',
        route: 'transporte-transaccion-seguimiento',
        module: 'TRANSPORTE',
      },
      {
        title: 'Recursos',
        route: 'transporte-transaccion-recurso',
        module: 'TRANSPORTE',
      },
      {
        title: 'Renovación Documento',
        route: 'transporte-transaccion-renovacion', 
        module: 'TRANSPORTE',
      }
    ],
  },
  {
    title: 'Reporte', 
    icon : 'FileIcon', 
    module: 'TRANSPORTE', 
    children: [
      {
        title: 'Servicio', 
        route: 'transporte-reporte-servicio', 
        module: 'TRANSPORTE',
      }, 
      { 
        title: 'Documento Vencido', 
        route: 'transporte-reporte-documento',
        module: 'TRANSPORTE',
      },
      { 
        title: 'Proyecion Documento', 
        route: 'transporte-reporte-proyeccion',
        module: 'TRANSPORTE',
      }
    ]
  }
]
