export default [ 
    { 
        header: 'Módulo de Comercial', 
        module: 'COMERCIAL',
    },
    { 
        title: 'Transacciones',
        icon: 'FileIcon',
        module: 'COMERCIAL',
        children: [
            {
                title: 'Orden Servicio', 
                route: 'comercial-transaccion-servicio',
                module: 'SSOMA',
            }
        ],
    }, 
    {
        title: 'Reporte',
        icon: 'FileIcon',
        module: 'COMERCIAL',
        children: [
          {
            title:'Control de Servicio', 
            route : 'comercial-reporte-servicio', 
            module: 'REPORTE'
          }
        ]
    },
]