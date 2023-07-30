<template>
    <b-row>
        <b-col cols="12" md="12">
            <b-card>
                <h3 class="text-primary">MÓDULO DE {{$root.appModule}}</h3>
                <b-card-text>Seleccione en el menú la funcionalidad deseada.</b-card-text>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BRow, BCol, BCard, BCardText,
  },
}
</script>

<style>

</style>
