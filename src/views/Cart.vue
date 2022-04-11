<template>
  <div class="cart container d-flex flex-column">
    <div class="cart-title">
      <ul>
        <li class="col-3 actived">
          <span :style="{ backgroundColor: '#65ffbf' }">1</span>
          <p :style="{ fontWeight: '700' }">購物車</p>
          <div class="bar" :class="{ active: true }"></div>
        </li>
        <li>
          <div class="arrow">
            <span class="arrow-line"></span>
          </div>
        </li>
        <li class="col-3">
          <span>2</span>
          <p>填寫資料</p>
          <div class="bar"></div>
        </li>
        <li>
          <div class="arrow">
            <span class="arrow-line"></span>
          </div>
        </li>
        <li class="col-3">
          <span>3</span>
          <p>訂單確認</p>
          <div class="bar"></div>
        </li>
      </ul>
    </div>
    <div class="cart-container row my-3 py-5">
      <div class="col-lg-8 cart-left">
        <div class="table-responsive">
          <table class="table align-center align-middle">
            <thead class="text-secondary">
              <tr>
                <th class="text-center"></th>
                <th class="text-center"></th>
                <th class="text-center"></th>
                <th class="text-end">單價</th>
                <th class="text-center">總價</th>
                <th class="text-center">刪除</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cartData.carts.length > 0">
                <tr v-for="item in cartData.carts" :key="item.product_id">
                  <td class="text-center td-title">{{ item.product.title }}</td>
                  <td>
                    <img :src="item.product.imageUrl" />
                  </td>
                  <td class="text-center">
                    <div class="input-group">
                      <div class="input-group input-group-sm qtyBtn">
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-minus1"
                          @click="minusCart(item)"
                        >
                          －
                        </button>
                        <input
                          type="text"
                          style="max-width: 50px; text-align: center"
                          class="form-control"
                          placeholder=""
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                          v-model="item.qty"
                          readonly
                        />
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-add1"
                          @click="addCart(item)"
                        >
                          ＋
                        </button>
                      </div>
                      <span class="unit"> {{ item.product.unit }} </span>
                    </div>
                  </td>
                  <td class="text-end">
                    <del>原價 ${{ item.product.origin_price }}</del>
                    <br />
                    <strong
                      >特價
                      <span class="sale-price"
                        >${{ item.product.price }}</span
                      ></strong
                    >
                  </td>
                  <td class="text-center final-price">
                    <span>$ {{ Math.round(item.final_total) }}</span>
                  </td>
                  <td class="text-center">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="deleteCart(item.id)"
                    >
                      X
                    </button>
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td colspan="6" class="empty-txt text-center table-light">
                    購物車很空哦 ～
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-4 cart-right">
        <div class="title"></div>
        <div class="card mx-auto" style="width: 20rem">
          <div class="card-body">
            <h6>折扣碼</h6>
            <hr />
            <div class="total_price">
              <p class="card-text">總金額</p>
              <p>$ {{ Math.round(cartData.final_total) }}</p>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                v-model="coupon"
              />
              <button
                class="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                @click="useCoupons()"
              >
                優惠碼
              </button>
            </div>
            <button class="btn d-block w-100 btn-dark" @click="moveToOrder">
              前往結帳
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="plus-cart">
      <h6 class="plus-cart-title">加購產品</h6>
      <swiper
        class="swiper-product"
        :spaceBetween="30"
        :loop="true"
        :modules="modules"
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
        <swiper-slide v-for="item in addProducts" :key="item.id + 1">
          <ProductCard :card-product="[item]" @add-to-cart="addToCart" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <Footer />
  <Loading :is-loading="isLoading" :is-loading-item="isLoadingItem" />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";
import emitter from "@/libraries/emitt.js";
import ProductCard from "@/components/ProductCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default {
  data() {
    return {
      addProducts: [],
      isLoading: false,
      cartData: {
        carts: "",
      },
      isLoadingItem: "",
      active: true,
      coupon: "",
      modules: [Autoplay, Navigation],
    };
  },
  components: {
    Footer,
    Loading,
    ProductCard,
    Swiper,
    SwiperSlide,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/products`;
      this.$http.get(api).then((res) => {
        this.addProducts = res.data.products.map((product) => {
          product.qty = 1;
          return product;
        });
      });
    },
    getCart() {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/cart`
        )
        .then((res) => {
          this.isLoading = false;
          this.cartData = res.data.data;
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
        this.getCart();
      });
    },
    minusCart(item) {
      this.isLoading = true;
      item.qty--;
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${item.id}`,
          { data }
        )
        .then(() => {
          this.getCart();
        });
    },
    addCart(item) {
      this.isLoading = true;
      item.qty++;
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${item.id}`,
          { data }
        )
        .then(() => {
          this.getCart();
        });
    },
    deleteCart(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`;
      this.$http.delete(api).then(() => {
        this.isLoading = false;
        this.getCart();
        emitter.emit("getCart");
      });
    },
    deleteCartAll(item) {
      this.isLoading = true;
      console.log(item.carts.length);
      if (item.carts.length === 0) {
        this.isLoading = false;
        this.$swal("購物車是空的呦～", "還沒買菜嗎，很多在特價噎！", "error");
      } else {
        const api = `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/carts`;
        this.$http.delete(api).then(() => {
          this.isLoading = false;
          this.getCart();
          emitter.emit("getCart");
          this.$swal("已刪除購物車", "詳情請至購物車查看", "success");
        });
        this.isLoading = false;
      }
    },
    moveToOrder() {
      this.$router.push("/order");
    },
    useCoupons() {
      const data = {
        code: this.coupon,
      };
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/coupon`;
      this.$http.post(api, { data }).then(() => {
        this.getCart();

        alert("成功套用優惠卷！");
      });
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
};
</script>
<style lang="scss">
@import "src/assets/all.scss";
@include swiper();

.cart {
  min-height: calc(100vh - 216px);
  .cart-title {
    margin: 3rem 0 1rem;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      padding-top: 15px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      span {
        background-color: #c8c8c8;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        width: 28px;
        height: 28px;
        margin-bottom: 0.5rem;
      }

      .arrow-line {
        @include arrow();
      }

      p {
        letter-spacing: 3px;
        color: #c8c8c8;
      }
      .bar {
        background-color: #dbfff0;
        height: 5px;
        width: 100%;
      }

      .active {
        background-color: $primaryColor;
      }
    }
    .actived {
      background-color: #fff;
      box-shadow: 1px 0px 15px 1px rgba(34, 255, 170, 0.2);
    }
    .sb-icon {
      width: 20px;
      margin-right: 0.5rem;
      color: $darkGray;
    }
    h6 {
      margin-bottom: 0;
      letter-spacing: 1.5px;
      color: $darkGray;
    }
  }
  .cart-container {
    @include cart-container();
    .cart-left {
      .table {
        thead {
          th {
            font-weight: 300;
            font-size: 14px;
            color: #afafaf;
          }
        }
        tbody {
          tr {
            .empty-txt {
              padding: 4rem 0;
              letter-spacing: 1.5px;
              color: rgba(156, 156, 156, 0.5);
            }

            .td-title {
              font-weight: 700;
            }
            .text-center {
              .input-group {
                justify-content: center;
                .qtyBtn {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }
              .unit {
                margin-top: 0.5rem;
              }
            }
            img {
              max-width: 150px;
            }
            .text-end del {
              color: $darkGray;
            }
            .text-end .sale-price {
              color: $secondaryColor;
            }
            .final-price span {
              background-color: $primaryColor;
              padding: 0 0.5rem;
            }
          }
        }
      }
    }
    .cart-right {
      .title {
        display: flex;
        justify-content: center;
        h6 {
          margin-bottom: 0;
          letter-spacing: 1.5px;
          color: $darkGray;
        }
      }
      .card {
        box-shadow: 1px 0px 15px 1px rgba(34, 255, 170, 0.2);
        background-color: $primaryColor;
        border: 0px;
        .form-control {
          color: #0080ff;
        }
        h6 {
          text-align: center;
          letter-spacing: 2px;
          font-weight: 700;
        }
        .total_price {
          display: flex;
          justify-content: space-between;
          p {
            display: inline-block;
          }
        }
      }
    }
  }
  .plus-cart {
    .plus-cart-title {
      margin-top: 2rem;
      text-align: center;
      color: #c2c2c2;
      letter-spacing: 2px;
    }
    .swiper-product{
      position: relative;
    }
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top:100px;
    }
  }
}

@media (max-width: 768px) {
  .cart {
    .table-responsive {
      margin: 3rem 0;
      thead {
        tr {
          th {
            font-size: 10px;
            color: #a3a3a3;
          }
        }
      }
      tbody {
        img {
          max-width: 100px !important;
        }
        .text-end del {
          font-size: 12px;
        }
      }
    }
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
}
</style>
