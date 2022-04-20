<template>
  <div class="container-lg my-4 ac">
    <div class="ac-title my-5">
      <h5 class="ac-h5">優惠卷設定</h5>
      <button
        type="button"
        class="ap-btn text-end btn btn-outline-dark me-3"
        @click="openModal('isNew')"
      >
        新增優惠卷
      </button>
    </div>
    <div class="table-responsive mt-3 ac-table">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>優惠卷標題</th>
            <th>期限</th>
            <th>折扣優惠</th>
            <th>折扣代碼</th>
            <th>開放</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.date }}</td>
            <td>{{ coupon.percent }} ％</td>
            <td>{{ coupon.code }}</td>
            <td>
              <div
                v-if="coupon.is_enabled === 1"
                class="form-check form-switch"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked
                />
              </div>
              <div v-else class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelModal(coupon)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <CouponModal
      ref="couponModalref"
      @create-coupon="createCoupon"
    ></CouponModal>
    <DelModal :product="coupons" @del-product="delCoupon" ref="delModalref" />
  </div>
</template>

<script>
import CouponModal from "@/components/CouponModal.vue";
import DelModal from "@/components/DelModal.vue";

export default {
  data() {
    return {
      isNew: true,
      coupons: {},
      couponTime: "",
      tempCoupon: {},
      tempDelCoupon: {},
    };
  },
  components: {
    CouponModal,
    DelModal,
  },
  methods: {
    getCoupons() {
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/coupons`;
      this.$http.get(api).then((res) => {
        this.coupons = res.data.coupons.map((coupon) => {
          const time = new Date(parseInt(coupon.due_date * 100));
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
              date.getMinutes();
            return current_time;
          };
          coupon.date = formatDate(time);
          return coupon;
        });
      });
    },
    createCoupon(data) {
      console.log(data);
      this.tempCoupon = { ...data };
      const time = Date.parse(data.due_date) * 0.01;
      const dataTime = {
        title: data.title,
        is_enabled: 1,
        percent: parseInt(data.percent),
        due_date: time,
        code: data.code,
      };
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/coupon`;
      this.$http
        .post(api, { data: dataTime })
        .then((res) => {
          console.log(res);
          const modalComponent = this.$refs.couponModalref;
          modalComponent.hideModal();
          this.getCoupons();
        })
        .catch((e) => {
          console.dir(e);
        });
    },
    openModal(status) {
      if (status === true) {
        this.tempCoupon = "";
      }
      const modalComponent = this.$refs.couponModalref;
      modalComponent.openModal();
    },
    openDelModal(coupon) {
      this.tempDelCoupon = { ...coupon };
      const delModal = this.$refs.delModalref;
      delModal.openModal();
    },
    delCoupon() {
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/coupon/${this.tempDelCoupon.id}`;
      this.$http.delete(api).then(() => {
        const delModal = this.$refs.delModalref;
        delModal.hideModal();
        this.getCoupons();
      });
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>

<style lang="scss">
@import "src/assets/all.scss";

.ac {
  letter-spacing: 1px;
}
.ac-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ac-h5 {
    display: inline-block;
    letter-spacing: 1px;
    font-weight: 700;
    margin: 0;
    color: $secondaryColor;
  }
  .ac-btn {
    margin: 0;
  }
}
.ac-table {
  th {
    color: $darkGray;
    font-weight: 300;
  }
}
</style>
