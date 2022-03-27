<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#e0e0e0',
      '--swiper-pagination-color': '#fff',
    }"
    :loop="true"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="thumbsSwiper"
  >
    <swiper-slide><img :src="thumbProduct.imageUrl" /></swiper-slide>
    <swiper-slide v-for="(images, index) in thumbProduct.imagesUrl" :key="index"
      ><img :src="images"
    /></swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="5"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="smallSwiper"
  >
    <swiper-slide><img :src="thumbProduct.imageUrl" /></swiper-slide>
    <swiper-slide v-for="(images, index) in thumbProduct.imagesUrl" :key="index"
      ><img :src="images"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["thumbProduct"],
  data() {
    return {
      modules: [FreeMode, Navigation, Thumbs],
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};
</script>
<style lang="scss">
.thumbsSwiper.swiper {
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 350px;
    object-fit: cover;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
}

.smallSwiper {
  //   height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
  .swiper-slide {
    width: 15%;
    height: 40%;
    opacity: 0.4;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.smallSwiper .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
