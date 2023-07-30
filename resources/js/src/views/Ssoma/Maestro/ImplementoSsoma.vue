<template>
    <b-row>
        <b-col>
            <implemento-ssoma
                :vista_entidad="entidad"
                :vista_area="area" 
                :vista_nentidad="nentidad"
                :vista_narea="narea"
                :vista_implemento="'EPP'"
                >        
            </implemento-ssoma>
        </b-col>
    </b-row>
</template>
<script>
import { BRow, BCol } from 'bootstrap-vue'
import Implemento from '../../Gestion/Maestro/Implemento.vue'

export default { 
    components: { 
        BRow, 
        BCol,
        'implemento-ssoma': Implemento
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