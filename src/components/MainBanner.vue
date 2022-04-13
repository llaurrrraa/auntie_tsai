<template>
  <div class="title-banner my-5">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :navigation="true"
    >
      <swiper-slide>
        <a @click.prevent="changePage('乳製品')">
          <div class="cow-banner">
            <h1>哞吉了！</h1>
            <h1>乳製品 <span>8</span> 折起</h1>
            <h2>( 因應冷藏運送有區域限制，下單前請詳閱產品運送資訊 )</h2>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide>
        <a @click.prevent="changePage('食品雜糧')">
          <div class="rice-banner">
            <h1>～ 稻叮來 ～</h1>
            <h2>誰知盤中飧，粒粒皆辛苦</h2>
            <h3>米飯加購價<span> 89+</span> 元起！</h3>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide>
        <div class="ppl-banner">
          <h1>公平貿易</h1>
          <h3>透過透明與互相尊重的貿易夥伴關係</h3>
          <h3>我們推動永續與道德的發展體系</h3>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default {
  data() {
    return {
      modules: [Autoplay, Navigation, Pagination],
    };
  },
  emit: [],
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    changePage(category) {
      console.log(category);
      this.$emit("change-page", category);
      this.$router.push(`/products/${category}`);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "src/assets/all.scss";
@include swiper();

.title-banner {
  &:hover {
    cursor: pointer;
  }
  .cow-banner {
    background-image: url(../assets/images/b_banner_cow.jpeg);
    h1 {
      font-size: 5.5rem;
      color: #fff;
      letter-spacing: 15px;
      font-weight: 900;
      text-shadow: 0 0 2px #000;
      span {
        color: #bdccd4;
      }
    }
    h2 {
      margin-top: 1.8rem;
      color: #fff;
      font-weight: 900;
      letter-spacing: 8px;
    }
  }
  .rice-banner {
    background-image: url(../assets/images/b_banner_rice.jpeg);
    h1 {
      font-size: 5.5rem;
      color: #fff;
      letter-spacing: 15px;
      font-weight: 900;
      text-shadow: 0 0 2px #000;
    }
    h2 {
      color: #000;
      font-weight: 900;
      letter-spacing: 8px;
      text-shadow: 0 0 2px #fff;
      margin-top: 1.5rem;
    }
    h3 {
      font-size: 2.5rem;
      color: #000;
      font-weight: 900;
      letter-spacing: 15px;
      text-shadow: 0 0 2px #fff;
      margin-top: 1.5rem;
      span {
        background-color: rgba(255, 255, 255, 0.5);
        color: #c15b07;
        border: 2px solid #fff;
        font-weight: 300;
        font-size: 3rem;
        padding: 0.5rem;
        border-radius: 15px;
      }
    }
  }
  .ppl-banner {
    background-image: url(../assets/images/b_banner_ppl.jpeg);
    h1 {
      text-align: center;
      font-size: 5.5rem;
      color: #fff;
      padding: 0 5rem;
      letter-spacing: 5rem;
      font-weight: 900;
      text-shadow: 0 0 2px #000;
    }
    h3 {
      text-align: center;
      font-size: 2.5rem;
      letter-spacing: 15px;
      color: #fff;
      opacity: 0.7;
      font-weight: 900;
      text-shadow: 0 0 2px #000;
    }
  }
  .cow-banner,
  .rice-banner,
  .ppl-banner {
    height: 500px;
    background-position: center center;
    background-size: cover;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 768px) {
  .title-banner {
    .swiper-button-prev,
    .swiper-button-next {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 25px;
      padding: 1.5rem 1rem;
      color: #fff;
    }
    .cow-banner {
      h1 {
        font-size: 2.25rem;
      }
      h2 {
        font-size: 1rem;
        padding: 0 1.5rem;
      }
    }
    .rice-banner {
      h1 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.25rem;
        letter-spacing: 5px;
        span {
          font-size: 1.5rem;
          border-radius: 8px;
        }
      }
    }
    .ppl-banner {
      h1 {
        font-size: 2.5rem;
        padding: 0;
        letter-spacing: 15px;
        margin-bottom: 1rem;
      }
      h3 {
        padding: 0 1rem;
        font-size: 1.5rem;
        letter-spacing: 5px;
      }
    }
  }
}
</style>
