<template>
  <div class="home-index container d-flex flex-column min-vh-100">
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
          <div class="cow-banner">
            <h1>哞吉了！</h1>
            <h1>乳製品 <span>8</span> 折起</h1>
            <h2>( 因應冷藏運送有區域限制，下單前請詳閱產品運送資訊 )</h2>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="rice-banner">
            <h1>～ 稻叮來 ～</h1>
            <h2>誰知盤中飧，粒粒皆辛苦</h2>
            <h3>米飯加購價<span> 89+</span> 元起！</h3>
          </div>
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
    <CategoryBtns class="my-3" :products="products" />
    <div class="sale-cards my-5">
      <h5 class="sub-title">你要的阿姨都有賣..</h5>
      <swiper
        class="swiper-product"
        :modules="modules"
        :space-between="30"
        :loop="true"
        :pagination="{ clickable: true }"
        navigation
        :breakpoints="{
          '640': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }"
      >
        <swiper-slide v-for="item in products" :key="item.id">
          <ProductCard :card-product="[item]" @add-to-cart="addToCart" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="vegeBox"></div>
    <div class="concept-cards row-col-3">
      <div class="trade-card">
        <div class="card-body">
          <h2 class="card-title">公平交易</h2>
          <p class="hover-card-text">
            小農的用心耕作與消費者能夠安心選購，在價格上我們或許不是最便宜，卻不願讓任何一邊受委屈，
            阿姨的堅持，讓小農笑得開心、希望您也吃得安心。
          </p>
        </div>
      </div>
      <div class="nice-card">
        <div class="card-body">
          <h2 class="card-title">友善耕作</h2>
          <p class="hover-card-text">
            為了保護土地和生態系，使用最接近大自然原始的方式務農，
            減少人為破壞、讓土地永續經營、生生不息。
          </p>
        </div>
      </div>
      <div class="organic-card">
        <div class="card-body">
          <h2 class="card-title">有機農業</h2>
          <p class="hover-card-text">
            不污染環境、不破壞生態，我們與採用有機方式生產的小農合作，
            提供消費者最健康與安全的農產品。
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="email-card"></div>
  <Footer />
  <Loading :is-loading="isLoading" :is-loading-item="isLoadingItem" />
</template>
<script>
import CategoryBtns from "@/components/CategoryBtns.vue";
import ProductCard from "@/components/ProductCard.vue";
import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";
import emitter from "@/libraries/emitt.js";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default {
  data() {
    return {
      isLoading: false,
      isLoadingItem: "",
      icons: [
        "../assets/images/vegetables.png",
        "@/assets/images/fruits.png",
        "@/assets/images/rice.png",
      ],
      modules: [Autoplay, Navigation, Pagination],
      category: [],
      products: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    CategoryBtns,
    ProductCard,
    Footer,
    Loading,
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      let api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/products`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products.map((product) => {
          product.qty = 1;
          return product;
        });
      });
    },
    addToCart(id, count = 1) {
      const data = {
        product_id: id,
        qty: count,
      };
      this.isLoading = true;
      const api = `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart`;
      this.$http.post(api, { data }).then(() => {
        this.isLoading = false;
        emitter.emit("getCart");
        this.$swal("成功加到購物車 !", "詳情請至購物車查看", "success");
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss" >
@import "src/assets/all.scss";
@import "~sweetalert2/src/variables";
@import "~sweetalert2/src/sweetalert2";
@include swiper();

html,
body {
  width: 100%;
}

.home-index {
  .title-banner {
    .cow-banner {
      background-image: url(https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80);
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
      background-image: url(https://images.unsplash.com/photo-1611501355758-0d8b8208e1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80);
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
      background-image: url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80);
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
  .sale-cards {
    margin-bottom: 5rem;
    .sub-title {
      text-align: center;
      font-weight: 700;
      color: $darkGray;
      letter-spacing: 2.5px;
    }
    .swiper-product {
      position: relative;
    }
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 100px;
    }
  }
  .concept-cards {
    margin: 3rem 0;
    display: flex;
    justify-content: space-around;

    .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 0.35s ease;
      h2 {
        color: #fff;
        font-weight: 700;
        letter-spacing: 2px;
        padding: 0.8rem 2rem;
        border-radius: 10px;
      }
    }
    .trade-card {
      background-image: url(../assets/images/trade.jpeg);
    }
    .nice-card {
      background-image: url(../assets/images/kind-farm.jpeg);
    }
    .organic-card {
      background-image: url(../assets/images/organic.jpeg);
    }
    .trade-card,
    .nice-card,
    .organic-card {
      width: 25%;
      position: relative;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      padding: 3rem 2rem;
      border-radius: 15px;
      color: #fff;
      opacity: 0.5;
      .hover-card-text {
        font-weight: 700;
        overflow: hidden;
        max-height: 0;
        transform: translateY(1em);
        transition: all 0.55s ease;
        letter-spacing: 1px;
        padding: 5px 10px;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: $primaryColor;
        height: 4px;
      }
      &::before {
        width: 0;
        opacity: 0;
        transition: opacity 0 ease, width 0 ease;
        transition-delay: 5s;
      }

      &::after {
        width: 100%;
        background: white;
        transition: width 0.5s ease;
      }
      &:hover {
        box-shadow: 0 10px 20px 0 rgba(#202024, 0.12);
        opacity: 1;
        transition-duration: 5s;

        &::before {
          width: 100%;
          opacity: 1;
          transition: opacity 0.8s ease, width 0.8s ease;
          transition-delay: 0;
        }

        &::after {
          width: 0;
          opacity: 0;
          transition: width 0 ease;
        }

        .hover-card-text {
          max-height: 10em;
          transform: none;
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
  .swal2-container {
    .swal2-title {
      letter-spacing: 2px;
    }
    .swal2-html-container {
      letter-spacing: 1px;
      color: $darkGray;
    }
    .swal2-actions {
      .swal2-confirm {
        color: #fff;
      }
    }
  }
  @media (max-width: 767.98px) {
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
    .sale-cards {
      .swiper-product {
        position: relative;
      }
      .swiper-button-prev,
      .swiper-button-next {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 25px;
        padding: 1.5rem 1rem;
        position: absolute;
        top: 7rem;
        color: #fff;
      }
    }
    .concept-cards {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      .trade-card,
      .nice-card,
      .organic-card {
        width: 100%;
        margin-bottom: 0.5rem;
      }
    }
  }
}
.email-card {
  height: 300px;
  background-color: #000;
}
</style>
