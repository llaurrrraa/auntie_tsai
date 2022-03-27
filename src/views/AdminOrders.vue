<template>
  <div class="container-lg my-4 ao">
    <div class="ao-title my-3">
      <h5 class="ao-h5">後台產品訂單</h5>
    </div>
    <div class="table-responsive mt-3 ao-table">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>編號</th>
            <th>購買時間</th>
            <th>會員帳號</th>
            <th>金額</th>
            <th>付款狀態</th>
            <th>編輯 / 刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td class="text-secondary" style="letter-spacing: 0">
              {{ item.id }}
            </td>
            <td></td>
            <td>{{ item.user.email }}</td>
            <td>{{ item.total }}</td>
            <td>
              <span v-if="is_paid">已付款</span>
              <span v-else>未付款</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-dark btn-sm">
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/orders`;
      this.$http.get(api).then((res) => {
        this.orders = res.data.orders;
      });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
<style lang="scss">
.ao {
  letter-spacing: 1px;
}
.ao-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ao-h5 {
    display: inline-block;
    letter-spacing: 1px;
    font-weight: 700;
    margin: 0;
    color: #0544f3;
  }
  .ao-btn {
    margin: 0;
  }
}
.ao-table {
  th {
    color: #8c8c8c;
    font-weight: 300;
  }
}
</style>
