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
    <div class="row mt-5">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in orderData" :key="index">
            <td>{{item.title}}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
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
      orderData:{
        carts:"",
      }
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
          this.orderData = res.data.orders;
          console.log(this.orderData);
        });
    },
  },
  mounted(){
    this.getOrders();
  },
};
</script>
<style lang="scss">
.checkout {
  min-height: calc(100vh - 216px);
  margin-bottom: 5rem;
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
</style>