<template>
  <div class="cart container d-flex flex-column">
    <div class="row mt-5">
      <div class="col-lg-8 cart-left">
        <div class="title mb-5">
          <ShoppingBagIcon class="sb-icon" />
          <h6>購物車</h6>
        </div>
        <table class="table align-center align-middle">
          <thead class="text-secondary">
            <tr>
              <th class="text-center" style="font-weight: 300">產品名稱</th>
              <th class="text-center" style="font-weight: 300">產品照片</th>
              <th class="text-center" style="font-weight: 300">數量單位</th>
              <th class="text-center" style="font-weight: 300">單價</th>
              <th class="text-center" style="font-weight: 300">總價</th>
              <th class="text-center" style="font-weight: 300">刪除</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cartData.carts.length > 0">
              <tr v-for="item in cartData.carts" :key="item.product_id">
                <td class="text-center">{{ item.product.title }}</td>
                <td>
                  <img :src="item.product.imageUrl" style="max-width: 150px" />
                </td>
                <td class="text-center" style="width: 180px">
                  <div class="input-group">
                    <loading
                      v-show="isLoadingItem === item.id"
                      :is-full-page="false"
                      ><div class="loadingio-spinner-spinner-n3aayyd8xj">
                        <div class="ldio-hpqk1yjwodj"></div>
                      </div>
                    </loading>
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
                  <span
                    >現在特價
                    <span class="sale-price"
                      >${{ item.product.price }}</span
                    ></span
                  >
                </td>
                <td class="text-center final-price">
                  <span>$ {{ item.final_total }}</span>
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
      <div class="col-lg-4 cart-right">
        <div class="title mb-5">
          <h6>訂單資訊</h6>
        </div>
        <div class="card mx-auto" style="width: 20rem">
          <div class="card-body">
            <div class="total_price">
              <p class="card-text">總金額</p>
              <p>$ {{ cartData.final_total }}</p>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
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
  </div>
  <Footer />
  <Loading :is-loading="isLoading" :is-loading-item="isLoadingItem"/>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";
import { ShoppingBagIcon } from "@heroicons/vue/outline";
import emitter from "@/libraries/emitt.js";
export default {
  data() {
    return {
      isLoading: false,
      cartData: {
        carts: "",
      },
      isLoadingItem: "",
    };
  },
  components: {
    ShoppingBagIcon,
    Footer,
    Loading,
  },
  methods: {
    getCart() {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart`
        )
        .then((res) => {
          this.isLoading = false;
          this.cartData = res.data.data;
          // console.log(this.cartData);
        });
    },
    minusCart(item) {
      item.qty--;
      this.isLoadingItem = item.id;
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
          this.isLoadingItem = "";
        });
    },
    addCart(item) {
      item.qty++;
      this.isLoadingItem = item.id;
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
          this.isLoadingItem = "";
          this.getCart();
        });
    },
    deleteCart(id) {
      // console.log(id);
      const api = `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`;
      this.$http.delete(api).then(() => {
        this.getCart();
        emitter.emit("getCart");
      });
    },
    moveToOrder() {
      this.$router.push("/order");
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style lang="scss">
.cart{
  min-height: calc(100vh - 216px);
}
.cart-left {
  .title {
    display: flex;
    justify-content: center;
    .sb-icon {
      width: 20px;
      margin-right: 0.5rem;
      color: #9c9c9c;
    }
    h6 {
      margin-bottom: 0;
      letter-spacing: 1.5px;
      color: #9c9c9c;
    }
  }
  .table {
    tbody {
      tr {
        .empty-txt {
          padding: 4rem 0;
          letter-spacing: 1.5px;
          color: rgba(156, 156, 156, 0.5);
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
        .text-end .sale-price {
          color: #0b58ca;
        }
        .final-price span {
          background-color: #65ffbf;
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
      color: #9c9c9c;
    }
  }
  .card {
    .total_price {
      display: flex;
      justify-content: space-between;
      p {
        display: inline-block;
      }
    }
  }
}
@keyframes ldio-hpqk1yjwodj {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.ldio-hpqk1yjwodj div {
  left: 48px;
  top: 3px;
  position: absolute;
  animation: ldio-hpqk1yjwodj linear 1s infinite;
  background: #17da9f;
  width: 6px;
  height: 12px;
  border-radius: 2.4px / 2.4px;
  transform-origin: 3px 26px;
}
.ldio-hpqk1yjwodj div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #17da9f;
}
.ldio-hpqk1yjwodj div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: #17da9f;
}
.loadingio-spinner-spinner-n3aayyd8xj {
  width: 51px;
  height: 51px;
  display: inline-block;
  overflow: hidden;
}
.ldio-hpqk1yjwodj {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.51);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-hpqk1yjwodj div {
  box-sizing: content-box;
}
</style>
