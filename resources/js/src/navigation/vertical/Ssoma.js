export default [
    {
        header: 'Módulo de Ssoma', 
        module: 'SSOMA',
    },
    {
        title: 'Maestros',
        icon: 'CpuIcon',
        module: 'SSOMA',
        children: [ 
            {
                title: 'Plantillas',
                route: 'ssoma-maestro-plantillassoma',
                module: 'SSOMA',
            },
            {
                title: 'Implementos',
                route: 'ssoma-maestro-implementossoma',
                module: 'SSOMA',
            },
        ]
    },
    {
        title: 'Transacciones',
        icon: 'FileIcon',
        module: 'SSOMA',
        children: [
            {
                title: 'Asignación de Epps', 
                route: 'ssoma-transaccion-asignarepp',
                module: 'SSOMA',
            }
        ],
    }, 
    {
        title: 'Reportes',
        icon: 'FileIcon',
        module: 'SSOMA',
        children: [
            {
                title: 'Vencimiento de Epps', 
                route: 'ssoma-reporte-vencimiento',
                module: 'SSOMA',
            }, 
            {
                title: 'Proyeccion de Epps', 
                route: 'ssoma-reporte-proyeccion',
                module: 'SSOMA',
            }
        ]
    }
]