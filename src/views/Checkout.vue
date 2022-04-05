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
    <div class="product-form mt-5 row col-lg-7">
      <p class="order-title">訂 單 編 號 ： {{ orderData.id }}</p>
      <div class="order-table">
        <table class="table align-middle table-borderless mb-5">
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
              <td class="product-title">
                <span>{{ item.product.title }}</span>
              </td>
              <td>{{ item.qty }} / {{ item.product.unit }}</td>
              <td>$ {{ item.total }}</td>
            </tr>
          </tbody>
        </table>
        <table
          class="table align-middle table-borderless mb-5"
          style="font-size: 13px"
        >
          <thead>
            <tr>
              <th>訂單時間</th>
              <th>付款資訊</th>
              <th>訂單總額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ orderTime }}</td>
              <td>
                <span v-if="orderData.is_paid === false">未付款</span>
                <span v-else>已付款</span>
              </td>
              <td>$ {{ orderData.total }}</td>
            </tr>
          </tbody>
        </table>
        <table
          class="table align-middle table-borderless"
          style="font-size: 13px"
        >
          <thead>
            <tr>
              <th>顧客信箱</th>
              <th>訂購人姓名</th>
              <th>運送地址</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ orderData.user.email }}</td>
              <td>{{ orderData.user.name }}</td>
              <td>{{ orderData.user.address }}</td>
            </tr>
          </tbody>
        </table>
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
        products: {},
        user: {},
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
  letter-spacing: 1.5px;
  align-items: center;
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
  p {
    font-size: 13px;
  }
  .order-title {
    color: #8c8c8c;
  }
  .order-table {
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
        img {
          width: 50px;
        }
        .product-title {
          span {
            font-weight: 700;
            background-color: #65ffbf;
            color: #0b58ca;
            padding:5px;
          }
        }
      }
    }
  }
  .order-customer {
    ul {
      list-style: none;
      li p {
        color: #000;
      }
    }
  }
}
</style>