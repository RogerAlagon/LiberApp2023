<template>
    <b-row>
        <b-col>
            <plantilla-epp
                :vista_entidad="entidad"
                :vista_area="area"
                :vista_nentidad="nentidad"
                :vista_narea="narea"
                :vista_implemento="'EPP'"
                >
            </plantilla-epp>
        </b-col>
    </b-row>
</template>
<script>
import { BRow, BCol } from 'bootstrap-vue'
import Plantilla from '../../Gestion/Maestro/Plantilla.vue'

export default { 
    components: { 
        BRow, 
        BCol,
        'plantilla-epp': Plantilla
    }, 
    data() { 
        return { 
            entidad: 409, 
            area: 3,
            nentidad: 'PERSONA',
            narea:'SSOMA' 
        }
    },
}
</script>