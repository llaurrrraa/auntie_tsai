<template>
  <div class="container-lg my-4 ao">
    <div class="ao-title my-5">
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
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td
              class="text-secondary"
              style="font-size: 14px; letter-spacing: 0"
            >
              {{ item.id }}
            </td>
            <td>
              {{ date(item.create_at) }}
            </td>
            <td>{{ item.user.email }}</td>
            <td>{{ item.total }}</td>
            <td>
              <span v-if="item.is_paid">已付款</span>
              <span v-else>未付款</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-danger btn-sm">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pages="pagination" @update-page="getOrders" />
  </div>
</template>

<script>
import Pagination from "../../components/Pagination.vue";
export default {
  data() {
    return {
      orders: [],
      pagination: {},
      currentPage: 1,
    };
  },
  components: {
    Pagination,
  },
  methods: {
    date(time) {
      const date = new Date(parseInt(time * 1000));
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
      return formatDate(date);
    },
    getOrders(page = 1) {
      this.currentPage = page;
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/orders?page=${page}`;
      this.$http.get(api).then((res) => {
        this.orders = res.data.orders;
        this.pagination = res.data.pagination;
      });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>

<style lang="scss">
@import "src/assets/all.scss";

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
    color: $secondaryColor;
  }
  .ao-btn {
    margin: 0;
  }
}
.ao-table {
  th {
    color: $darkGray;
    font-weight: 300;
  }
}
</style>
