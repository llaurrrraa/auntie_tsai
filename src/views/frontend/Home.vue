<template>
  <div class="home-index container d-flex flex-column min-vh-100">
    <MainBanner />
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
  <div class="email-card">
    <div class="white-cover">
      <div class="email-group col-lg-4">
        <label for="emailInput" class="form-label email-label"
          >訂閱電子報獲得 8 折折扣碼！</label
        >
        <div class="input-group">
          <input
            name="entry.1457589512"
            type="text"
            class="form-control"
            id="emailInput"
            v-model="emailInput"
          />
          <button type="button" class="btn subscribe-btn" @click="getEmail()">
            訂閱
          </button>
        </div>
        <p id="errorMsg"></p>
      </div>
    </div>
  </div>
  <ConfirmCoupon ref="couponModal" />
  <Footer />
  <Loading :is-loading="isLoading" :is-loading-item="isLoadingItem" />
</template>

<script>
import CategoryBtns from "@/components/CategoryBtns.vue";
import MainBanner from "@/components/MainBanner.vue";
import ProductCard from "@/components/ProductCard.vue";
import ConfirmCoupon from "@/components/ConfirmCoupon.vue";
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
      emailInput: "",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    CategoryBtns,
    ProductCard,
    Footer,
    Loading,
    ConfirmCoupon,
    MainBanner,
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
    getEmail() {
      if (this.emailInput.indexOf("@") != -1) {
        const couponModal = this.$refs.couponModal;
        couponModal.openModal();
      } else {
        const error = document.getElementById("errorMsg");
        error.innerHTML = "請輸入正確的信箱 !!";
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
@import "src/assets/all.scss";
@import "~sweetalert2/src/variables";
@import "~sweetalert2/src/sweetalert2";

@keyframes shakingError {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  50% {
    opacity: 1;
    transform: translateX(10px);
  }
  100% {
    opacity: 0.5;
    transform: translateX(-10px);
  }
}

html,
body {
  width: 100%;
}

.home-index {
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
    height: 20rem;
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
      background-image: url(../../assets/images/trade.jpeg);
    }
    .nice-card {
      background-image: url(../../assets/images/kind-farm.jpeg);
    }
    .organic-card {
      background-image: url(../../assets/images/organic.jpeg);
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
        transition-delay: 2s;
      }

      &::after {
        width: 100%;
        background: white;
        transition: width 0.5s ease;
      }
      &:hover {
        box-shadow: 0 10px 20px 0 rgba(#202024, 0.12);
        opacity: 1;
        transition-duration: 2s;

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
      margin: 15rem 0;
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
  margin-top: 5rem;
  height: 200px;
  background-image: url("../../assets/images/veges_email.jpeg");
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  .white-cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      transition: 2s;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .email-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .email-label {
        color: white;
        text-align: center;
        letter-spacing: 2px;
        font-size: 1.25rem;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
      }
      .input-group {
        .subscribe-btn {
          background-color: $primaryColor;
          color: $secondaryColor;
          font-weight: 700;
          letter-spacing: 2px;
          &:hover {
            background-color: rgb(47, 222, 149);
          }
        }
      }
      #errorMsg {
        margin-top: 0.5rem;
        letter-spacing: 1px;
        text-align: center;
        color: tomato;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
        animation: shakingError 2s;
      }
    }
  }
  @media (max-width: 767.98px) {
  }
}
</style>
