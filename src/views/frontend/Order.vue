<template>
  <div class="container d-flex flex-column order">
    <div class="order-title">
      <ul>
        <li class="col-3">
          <span>1</span>
          <p>購物車</p>
          <div class="bar"></div>
        </li>
        <li>
          <div class="arrow">
            <span class="arrow-line"></span>
          </div>
        </li>
        <li class="col-3 actived">
          <span :style="{ backgroundColor: '#8c8c8c' }">2</span>
          <p :style="{ fontWeight: '700' }">填寫資料</p>
          <div class="bar" :class="{ active: true }"></div>
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
    <Form ref="form" class="row form" v-slot="{ errors }" @submit="addOrder()">
      <div class="order-container row mt-3">
        <div class="col-lg-8 cart-left my-5 px-5">
          <div class="form-first-line mb-3">
            <div class="col-lg-6 pe-1">
              <label for="name" class="form-label"
                ><span id="name-span"></span>｜ 訂購人姓名</label
              >
              <Field
                id="name"
                name="訂購人姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['訂購人姓名'] }"
                success-message="Nice and secure!"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage
                name="訂購人姓名"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="col-lg-6">
              <label for="tel" class="form-label"
                ><span></span>｜ 訂購人手機</label
              >
              <Field
                id="tel"
                name="訂購人電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['訂購人電話'] }"
                :rules="phoneRule"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage
                name="訂購人電話"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
          </div>
          <div class="col-12 mb-3">
            <label for="email" class="form-label"><span></span>｜ email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              rules="required|email"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-12 mb-3">
            <label for="address" class="form-label"
              ><span></span>｜ 收貨地址</label
            >
            <Field
              id="address"
              name="收貨地址"
              type="address"
              class="form-control"
              :class="{ 'is-invalid': errors['收貨地址'] }"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage
              name="收貨地址"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="textareaFormControlInput" class="form-label"
              >｜ 想對阿姨說 ..</label
            >
            <textarea
              class="form-control"
              placeholder="備 註"
              id="textareaFormControlInput"
              style="height: 100px"
              v-model="form.message"
            ></textarea>
          </div>
          <a href="#/cart">〈&emsp;返回購物車</a>
        </div>
        <div class="col-lg-4 cart-right">
          <div class="title mb-5"></div>
          <div class="card mx-auto" style="width: 20rem">
            <div class="card-body">
              <h6>訂單資訊</h6>
              <hr />
              <div class="total_price">
                <p class="card-text">總金額</p>
                <p>$ {{ Math.round(cartData.final_total) }}</p>
              </div>
              <select class="form-select mb-3" aria-label="payMethods">
                <option selected Disabled>請選擇付款方式</option>
                <option value="1">信用卡付款</option>
                <option value="2">轉帳方式</option>
                <option value="3">LinePay</option>
              </select>
              <button type="submit" class="btn d-block w-100 btn-dark">
                送出訂單
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </div>
  <Footer />
  <Loading :is-loading="isLoading" :is-loading-item="isLoadingItem" />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";
import swal from "sweetalert2";
import emitter from "@/libraries/emitt.js";

export default {
  data() {
    return {
      validName: false,
      isLoading: false,
      isLoadingItem: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      cartData: {
        carts: "",
      },
    };
  },
  components: {
    Footer,
    Loading,
  },
  methods: {
    phoneRule(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請輸入正確的手機";
    },
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
    addOrder() {
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/order`;
      const order = this.form;
      const swalWithBootstrapButtons = swal.mixin({
        customClass: {
          confirmButton: "btn btn-info",
          cancelButton: "btn btn-outline-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "確定要送出訂單嗎?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "確定",
          cancelButtonText: "取消",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$http.post(api, { data: order }).then(() => {
              swalWithBootstrapButtons.fire(
                "成功送出訂單!",
                "請耐心等待物流配送",
                "success"
              );
              this.$router.push("/checkout");
            });
          }
        });

      emitter.emit("getCart");
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style lang="scss">
@import "src/assets/all.scss";

.order {
  min-height: calc(100vh - 216px);
  .order-title {
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
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
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
  .order-container {
    @include cart-container();
    .form {
      label {
        font-weight: 700;
        letter-spacing: 1px;
      }
    }
    a {
      position: relative;
      text-decoration: none;
      color: #8c8c8c;
      letter-spacing: 1px;
    }
    a:hover {
      color: #000;
      background-color: $primaryColor;
      font-weight: 700;
      transition-duration: 1s;
      &::before {
        position: absolute;
        content: "";
        height: 1px;
        width: 110px;
        background-color: #000;
        top: 30px;
        left: 10px;
      }
    }
    .cart-left {
      .form-first-line {
        display: flex;
        justify-content: space-between;
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
}
</style>
