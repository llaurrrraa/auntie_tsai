<template>
  <div class="checkout container d-flex flex-column">
    <div class="checkout-title">
      <ul>
        <li class="col-4">
          <span>1</span>
          <p>購物車</p>
          <div class="bar"></div>
        </li>
        <li class="col-4">
          <span>2</span>
          <p>填寫資料</p>
          <div class="bar"></div>
        </li>
        <li class="col-4">
          <span :style="{ backgroundColor: '#8c8c8c' }">3</span>
          <p :style="{ fontWeight: '700' }">訂單確認</p>
          <div class="bar" :class="{ active: true }"></div>
        </li>
      </ul>
    </div>
    <div class="product-form mt-5 row">
      <p class="order-title">訂 單 編 號 ： {{ orderData.id }}</p>
      <div class="col-lg-6">
        <table class="table align-middle table-borderless">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th>總價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in orderData.products" :key="index">
              <td><img :src="item.product.imageUrl" alt="" /></td>
              <td class="product-title">{{ item.product.title }}</td>
              <td>{{ item.qty }} / {{ item.product.unit }}</td>
              <td>$ {{ item.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4">
        <ul>
          <li>
            <p class="order-title">訂 單 時 間 ： {{ orderTime }}</p>
          </li>
          <li>
            <p class="order-title">付 款 資 訊 ： 
              <span v-if="orderData.is_paid === false">未付款</span>
              <span v-else>已付款</span>
            </p>
          </li>
          <li>
            <p class="order-title">訂 單 總 額 ： $ {{orderData.total}}</p>
          </li>
          <li>
            <p class="order-title">聯 絡 信 箱 ： {{orderData.user}}</p>
          </li>
          <li>
            <p class="order-title">顧 客 資 訊 ： {{}}</p>
          </li>
          <li>
            <p class="order-title">運 送 地 址 ： {{orderData.user.address}}</p>
          </li>
        </ul>
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
      active: true,
      orderData: {
        carts: "",
      },
      orderTime: "",
    };
  },
  components: {
    Footer,
  },
  methods: {
    getOrders() {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/orders`
        )
        .then((res) => {
          this.isLoading = false;
          this.orderData = res.data.orders[0];
          console.log(this.orderData);

          const time = this.orderData.create_at;
          console.log(time);
          const current = new Date(parseInt(this.orderData.create_at * 1000));

          const formatDate = (date) => {
            const current_time =
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate() +
              " " +
              date.getHours() +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds();
            return current_time;
          };
          this.orderTime = formatDate(current);
          // console.log(formatDate(current));
          // const created = date.toUTCString();
          // console.log(created);
        });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
<style lang="scss">
.checkout {
  min-height: calc(100vh - 216px);
  margin-bottom: 5rem;
  letter-spacing: 1px;
}
.checkout-title {
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
    text-align: center;
    display: flex;
    align-items: center;
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
.product-form {
  .order-title {
    color: #8c8c8c;
  }
  table {
    border: 1px solid #e9e9e9;
    thead {
      border: 1px solid #e9e9e9;
      th {
        color: #b8b8b8;
        font-weight: 300;
        letter-spacing: 2px;
        font-size: 13px;
      }
    }
    tbody {
      // background-color: #e9e9e9;
      img {
        width: 50px;
      }
      .product-title {
        font-weight: 700;
      }
    }
  }
}
</style>