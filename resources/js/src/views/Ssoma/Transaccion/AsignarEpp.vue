<template>
    <b-row>
        <b-col>
            <asignar-epp
                :vista_entidad="entidad"
                :vista_area="area" 
                :vista_nentidad="nentidad"
                :vista_narea="narea"
                :vista_implemento="'EPP'"
                >
            </asignar-epp>
        </b-col>
    </b-row>
</template>
<script>
import { BRow, BCol } from 'bootstrap-vue'
import  Asignacion from '../../Gestion/Transaccion/Asignacion.vue'

export default { 
    components: { 
        BRow, 
        BCol,
        'asignar-epp': Asignacion
    }, 
    data() { 
        return { 
            entidad: 409, 
            area: 3,
            nentidad:'PERSONA',
            narea:'SSOMA' 
            //HACER LA QUERY DONDE SE BUSCA EL NOMBRE DEL IMPLEMENTO EN EL QUE SE HARA LA CONSULTA
        }
    },
}
</script>