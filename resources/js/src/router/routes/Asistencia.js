export default [ 
    { 
        path: '/Asistencia/Maestro/Transaccion', 
        name: 'asistencia-transaccion-aprobacion', 
        component: ()=> import('@/views/Asistencia/Transaccion/Aprobacion.vue'),
        meta: { 
            pageTitle: 'Gestión General de Asistencia', 
            breadcrumb: [
                {
                    text: 'Asistencia'
                }, 
                {
                    text: 'Transaccion'
                }, 
                {
                    text: 'Aprobación', 
                    active: true,
                }
            ],
        },
    },
    { 
        path: '/Asistencia/Maestro/Transaccion/Rrhh', 
        name: 'asistencia-transaccion-aprobacion-rrhh', 
        component: ()=> import('@/views/Asistencia/Transaccion/AprobacionRrhh.vue'),
        meta: { 
            pageTitle: 'Gestión General de Asistencia RRHH', 
            breadcrumb: [
                {
                    text: 'Asistencia'
                }, 
                {
                    text: 'Transaccion'
                }, 
                {
                    text: 'Aprobación', 
                    active: true,
                }
            ],
        },
    },
    {
        path: '/Asistencia/Maestro/Transaccion/Solcitud', 
        name: 'asistencia-transaccion-solicitud', 
        component: ()=> import('@/views/Asistencia/Transaccion/Solicitud.vue'), 
        meta: {
            pageTitle: 'Solicitud de Permiso', 
            breadcrumb: [
                {
                    text: 'Asistencia'
                }, 
                {
                    text: 'Transaccion'
                }, 
                {
                    text: 'Solicitud',
                    active: true,
                }
            ],
        },
    },
    {
        path: '/Asistencia/Reporte/Reporte', 
        name: 'asistencia-reporte-reporte', 
        component: ()=> import('@/views/Asistencia/Reporte/Reporte.vue'), 
        meta: {
            pageTitle: 'Reporte de Permiso', 
            breadcrumb: [
                {
                    text: 'Asistencia'
                }, 
                { 
                    text:'Reporte'
                }, 
                {
                    text: 'Reporte', 
                    active: true,
                }
            ],
        },
    },
    {
        path: '/Asistencia/Reporte/Reporte/Recurso', 
        name: 'asistencia-reporte-recurso', 
        component: ()=> import('@/views/Asistencia/Reporte/ReporteRrhh.vue'), 
        meta: {
            pageTitle: 'Reporte de Permiso RRHH', 
            breadcrumb: [
                {
                    text: 'Asistencia'
                }, 
                { 
                    text:'Reporte'
                }, 
                {
                    text: 'Reporte', 
                    active: true,
                }
            ],
        },
    },
    {
        path: '/Asistencia/Reporte/Reporte/Persona', 
        name: 'asistencia-reporte-persona', 
        component: ()=> import('@/views/Asistencia/Reporte/ReporteP.vue'), 
        meta: {
            pageTitle: 'Reporte de Permiso', 
            breadcrumb: [
                {
                    text: 'Asistencia'
                }, 
                { 
                    text:'Reporte'
                }, 
                {
                    text: 'Persona', 
                    active: true,
                }
            ],
        },
    },
]