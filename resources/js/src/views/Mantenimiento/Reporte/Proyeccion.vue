<template>
    <b-row>
        <b-col>
            <mantenimiento-proyeccion v-if="entidades[0] !== undefined && areas[0] !== undefined"
                :vista_entidad="entidades[0].idDato.valueOf()"
                :vista_area="areas[0].idArea.valueOf()" 
                :vista_nentidad="entidades[0].valorDat" 
                :vista_narea="areas[0].nombreAre"
                :vista_implemento="'PROYECCION'">
            </mantenimiento-proyeccion>
        </b-col>
    </b-row>
</template>
<script>
import { BRow, BCol } from 'bootstrap-vue'
import Proyeccion from '../../Gestion/Reporte/Proyeccion.vue'

export default { 
    components: { 
        BRow, 
        BCol, 
        'mantenimiento-proyeccion': Proyeccion
    }, 
    data() { 
        return { 
            entidad: 0, 
            area: 0,
            nentidad:'',
            narea:'', 
            entidades:[], 
            areas:[],
        }
    },
    created() 
    { 
        //entidades 
        this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL').then(res=> {
            this.entidades = res.data.filter( function ( entidad ) { return entidad.valorDat == 'VEHICULO' });
        }).catch(error => { 
            this.Toast(true, 'danger','Entidades','Error al cargar los registros: '+error)
        })

        //Areas 
        this.$http.get('/LiberAPP/Area/Select').then(res=> {
            this.areas = res.data.filter( function ( area ) { return area.nombreAre == 'MANTENIMIENTO' });
        }).catch(error => { 
            this.Toast(true, 'danger','Areas','Error al cargar los registros: '+error)
        })
    }
}
</script>