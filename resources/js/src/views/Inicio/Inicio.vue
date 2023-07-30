<template>
    <div class="row">
        <div class="col-lg-12 col-12">
            <div class="card">
                <div class="card-body">
                    <div class="">
                        <h4 class="text-capitalize mb-75">BIENVENIDO !!</h4>
                        <p class="card-text">
                            Seleccione en el menú lateral la funcionalidad que necesite.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'


export default {
  components: {
    BRow,
    BCol,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
  },
}
</script>
