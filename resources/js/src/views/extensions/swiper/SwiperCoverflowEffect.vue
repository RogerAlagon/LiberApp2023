<template>
  <b-card-code
    title="3d Effect Coverflow Effect"
  >
    <swiper
      class="swiper-coverflow"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
      <swiper-slide
        v-for="(data,index) in swiperData"
        :key="index"
      >
        <b-img
          :src="data.img"
          fluid
        />
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination"
      />
    </swiper>

    <template #code>
      {{ codeCoverflowEffect }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeCoverflowEffect } from './code'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
  },
  data() {
    return {
      codeCoverflowEffect,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner.png') },
        { img: require('@/assets/images/banner/banner.png') },
        { img: require('@/assets/images/banner/banner.png') },
        { img: require('@/assets/images/banner/banner.png') },
        { img: require('@/assets/images/banner/banner.png') },
        { img: require('@/assets/images/banner/banner.png') },
        { img: require('@/assets/images/banner/banner.png') },
        { img: require('@/assets/images/banner/banner.png') },
        { img: require('@/assets/images/banner/banner.png') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>
