export default [
    {
        header: 'Módulo de Asistencia', 
        module: 'ASISTENCIA',
    }, 
    {
        title: 'Transacciones', 
        icon: 'FileIcon', 
        module:'ASISTENCIA', 
        children: [
            {
                title: 'Solicitud', 
                route: 'asistencia-transaccion-solicitud',
                module: 'ASISTENCIA',
            },
            {
                title: 'Aprobación RRHH',
                route: 'asistencia-transaccion-aprobacion-rrhh',
                module: 'ASISTENCIA',
            },
            {
                title: 'Aprobación JEFE',
                route: 'asistencia-transaccion-aprobacion',
                module: 'ASISTENCIA',
            },
        ]
    }, 
    {
        title:'Reporte', 
        icon:'FileIcon', 
        module: 'ASISTENCIA', 
        children: [
            {
                title: 'Reporte', 
                route: 'asistencia-reporte-reporte',
                module: 'ASISTENCIA',
            },
            {
                title: 'Reporte RRHH', 
                route: 'asistencia-reporte-recurso',
                module: 'ASISTENCIA',
            },
            {
                title: 'Reporte', 
                route: 'asistencia-reporte-persona',
                module: 'ASISTENCIA'
            }
        ]
    },
]