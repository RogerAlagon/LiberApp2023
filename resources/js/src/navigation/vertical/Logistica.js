export default [
    {
        header: 'Módulo de Logistica', 
        module: 'LOGISTICA',
    },
    {
        title: 'Maestros',
        icon: 'CpuIcon',
        module: 'LOGISTICA',
        children: [
            {
                title: 'Orden', 
                route: 'logistica-maestro-orden',
                module: 'LOGISTICA',
            }
        ],
    }
]