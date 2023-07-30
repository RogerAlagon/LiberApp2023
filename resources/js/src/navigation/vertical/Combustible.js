export default [
  {
    header: 'Módulo de Combustible',
    module: 'COMBUSTIBLE',
  },
  {
    title: 'Maestros',
    icon: 'CpuIcon',
    module: 'COMBUSTIBLE',
    children: [
      {
        title: 'General', 
        route: 'combustible-maestro-general',
        module: 'COMBUSTIBLE',
      }, 
      {
        title: 'Grifos',
        route: 'combustible-maestro-grifo',
        module: 'COMBUSTIBLE',
      },
      /*{
        title: 'Hidrocarburos',
        route: 'combustible-maestro-hidrocarburo',
        module: 'COMBUSTIBLE',
      },*/
      {
        title: 'Precios', 
        route: 'combustible-maestro-precio',
        module: 'COMBUSTIBLE',
      }, 
      /*{
        title: 'Ruta', 
        route: 'combustible-maestro-ruta', 
        module: 'COMBUSTIBLE',
      },*/
      {
        title: 'Consumo',
        route:'combustible-maestro-consumo', 
        module: 'COMBUSTIBLE',
      }
    ],
  },
  {
    title: 'Transacciones',
    icon: 'FileIcon',
    module: 'COMBUSTIBLE',
    children: [
      /*{
        title: 'Aprobación',
        route: 'combustible-vale-aprobar',
        module: 'COMBUSTIBLE',
      },*/
      /*{
        title: 'Registro',
        route: 'combustible-vale-registrar',
        module: 'COMBUSTIBLE',
      },*/
      /*{
        title: 'Validación',
        route: 'combustible-vale-validar',
        module: 'COMBUSTIBLE',
      },*/
      {
        title: 'Abastecimiento', 
        route: 'combustible-vale-abastecimiento', 
        module: 'COMBUSTIBLE'
      },
      {
        title: 'Aprobar Abastecimiento', 
        route: 'combustible-transaccion-abastecimiento', 
        module: 'COMBUSTIBLE'
      },
      {
        title: 'Calculo de Consumo', 
        route: 'combustible-transaccion-cconsumo', 
        module: 'COMBUSTIBLE'
      },
      {
        title: 'Validación de Consumo', 
        route: 'combustible-transaccion-vconsumo', 
        module: 'COMBUSTIBLE'
      },
      {
        title: 'Descuentos Combustible',
        route: 'combustible-transaccion-descuento',
        module: 'COMBUSTIBLE'
      }
    ],
  },
  /*{
    title: 'Facturación',
    icon: 'DollarSignIcon',
    module: 'COMBUSTIBLE',
    children: [
      {
        title: 'Importar',
        route: 'combustible-factura-importar',
        module: 'COMBUSTIBLE',
      },
      {
        title: 'Validación',
        route: 'combustible-factura-validar',
        module: 'COMBUSTIBLE',
      },

    ],
  },*/
  {
    title: 'Reporte',
    icon: 'FileIcon',
    module: 'COMBUSTIBLE',
    children: [
      {
        title:'Reporte', 
        route : 'combustible-reporte-abastecimiento', 
        module: 'REPORTE'
      },
      {
        title: 'Analisis',
        route: 'combustible-reporte-analisis',
        module: 'COMBUSTIBLE',
      },
    ],
  },
]
