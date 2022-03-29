<template>
  <div class="cart container d-flex flex-column">
    <div class="cart-title">
      <ul>
        <li class="col-4">
          <span :style="{backgroundColor:'#8c8c8c'}">1</span>
          <p :style="{fontWeight:'700'}">購物車</p>
          <div class="bar" :class="{'active':true}"></div>
        </li>
        <li class="col-4">
          <span>2</span>
          <p>填寫資料</p>
          <div class="bar"></div>
        </li>
        <li class="col-4">
          <span>3</span>
          <p>訂單確認</p>
          <div class="bar"></div>
        </li>
      </ul>
    </div>
    <div class="row mt-5">
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
                    <strong
                      >特價
                      <span class="sale-price"
                        >${{ item.product.price }}</span
                      ></strong
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
      </div>
      <div class="col-lg-4 cart-right">
        <div class="title"></div>
        <div class="card mx-auto" style="width: 20rem">
          <div class="card-body">
            <h6>訂單資訊</h6>
            <hr />
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
  <Loading :is-loading="isLoading" :is-loading-item="isLoadingItem" />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";
import emitter from "@/libraries/emitt.js";
export default {
  data() {
    return {
      isLoading: false,
      cartData: {
        carts: "",
      },
      isLoadingItem: "",
      active:true,
    };
  },
  components: {
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
  },
  mounted() {
    this.getCart();
    console.log(this.cartData);
  },
};
</script>
<style lang="scss">
.cart {
  min-height: calc(100vh - 216px);
  margin-bottom: 5rem;
}
 
.cart-title {
  margin:3rem 0 1rem;
  width:100%;
  ul{
    width:100%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li{
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    span{
      background-color:#c8c8c8;
      color:#fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      width:28px;
      height:28px;
      margin-bottom: 0.5rem;
    }
    p{
      letter-spacing: 3px;
      color:#c8c8c8;
    }
    .bar{
      background-color: #dbfff0;
      height:5px;
      width:100%;
    }

    .active{
      background-color: #65ffbf;
    }
  }
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

.cart-left {
  .table {
    thead{
      th{
        font-weight: 300;
        font-size: 14px;
        color:#afafaf;
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
          color: #8c8c8c;
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
    h6 {
      text-align: center;
      letter-spacing: 1px;
      color: #8c8c8c;
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
@media (max-width: 768px) {
  .table-responsive {
    // background-color: #f3f3f3;
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
