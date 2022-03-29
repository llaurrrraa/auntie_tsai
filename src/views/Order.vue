<template>
  <div class="container d-flex flex-column order">
    <div class="cart-title">
      <ul>
        <li class="col-4">
          <span>1</span>
          <p>購物車</p>
          <div class="bar"></div>
        </li>
        <li class="col-4">
          <span :style="{ backgroundColor: '#8c8c8c' }">2</span>
          <p :style="{ fontWeight: '700' }">填寫資料</p>
          <div class="bar" :class="{ active: true }"></div>
        </li>
        <li class="col-4">
          <span>3</span>
          <p>訂單確認</p>
          <div class="bar"></div>
        </li>
      </ul>
    </div>
    <div class="row mt-3">
      <div class="col-lg-8 cart-left my-5">
        <Form ref="form" class="row" v-slot="{ errors }" >
          <div class="col mb-3">
            <label for="name" class="form-label">｜ 訂購人姓名</label>
            <Field
              id="name"
              name="訂購人姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['訂購人姓名'] }"
              placeholder="請輸入 姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="訂購人姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col">
            <label for="tel" class="form-label"
              >｜ 訂購人手機</label
            >
            <Field
              id="tel"
              name="訂購人電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['訂購人電話'] }"
              placeholder="請輸入 電話"
              rules="required|min:8|max:10"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="訂購人電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-12 mb-3">
            <label for="email" class="form-label"
              >｜ email</label
            >
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="required|email"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-12 mb-3">
            <label for="address" class="form-label"
              >｜ 收貨地址</label
            >
            <Field
              id="address"
              name="收貨地址"
              type="address"
              class="form-control"
              :class="{ 'is-invalid': errors['收貨地址'] }"
              placeholder="請輸入 地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="收貨地址" class="invalid-feedback"></ErrorMessage>
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
        </Form>
        <a href="#/cart">〈&emsp;返回購物車</a>
      </div>
      <div class="col-lg-4 cart-right">
        <div class="title mb-5"></div>
        <div class="card mx-auto" style="width: 20rem">
          <div class="card-body">
            <div class="total_price">
              <p class="card-text">總金額</p>
              <p></p>
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
            <button class="btn d-block w-100 btn-dark" @click="addOrder">
              送出訂單
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  components: {
    Footer,
  },
  methods: {
    addOrder() {
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/order`;
      const order = this.form;
      this.$http
        .post(api, { data: order })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>

<style lang="scss">
.cart-title {
  margin: 3rem 0 1rem;
  width: 100%;
  // display: flex;
  // justify-content: center;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    span {
      // background-color:#8C8C8C;
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
    p {
      letter-spacing: 3px;
      // font-weight: 700;
      color: #c8c8c8;
    }
    .bar {
      background-color: #dbfff0;
      height: 5px;
      width: 100%;
    }

    .active {
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
.order {
  min-height: calc(100vh - 216px);
  .title {
    display: flex;
    justify-content: center;
    h6 {
      margin-bottom: 0;
      letter-spacing: 1.5px;
      color: #9c9c9c;
    }
  }
  .form {
    margin-bottom: 2rem;
  }
  a {
    position: relative;
    text-decoration: none;
    color: #8c8c8c;
    letter-spacing: 1px;
  }
  a:hover {
    color: #000;
    background-color: #f8f9fa;
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
}
</style>
