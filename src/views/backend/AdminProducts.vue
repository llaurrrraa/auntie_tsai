<template>
  <div class="container-lg my-4 ap">
    <div class="ap-title my-5">
      <h5 class="ap-h5">後台產品列表</h5>
      <button
        type="button"
        class="ap-btn text-end btn btn-outline-dark me-3"
        @click="openModal('isNew')"
      >
        建立新產品
      </button>
    </div>
    <div class="table-responsive mt-5 ap-table">
      <table class="table table-hover">
        <thead>
          <tr>
            <th width="250">id</th>
            <th>分類</th>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th>狀態</th>
            <th>編輯 / 刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td class="text-secondary" style="letter-spacing: 0">
              {{ item.id }}
            </td>
            <td>{{ item.category }}</td>
            <td style="font-weight: bold">{{ item.title }}</td>
            <td>{{ item.origin_price }}</td>
            <td>{{ item.price }}</td>
            <td>
              <div v-if="item.is_enabled === 1" class="form-check form-switch">
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
                  class="btn btn-outline-dark btn-sm"
                  @click="openModal('edit', item)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pages="pagination" @update-page="getProducts" />
    <ProductModal
      :product="tempProduct"
      ref="productModalref"
      :is-new="isNew"
      @update-product="updateProduct"
    ></ProductModal>
    <DelModal
      :product="tempProduct"
      ref="delModalref"
      @del-product="delProduct"
    ></DelModal>
  </div>
</template>

<script>
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";
import Pagination from "../../components/Pagination.vue";
export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false,
      pagination: {},
      currentPage: 1,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      this.currentPage = page;
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/products?page=${page}`;
      this.$http.get(api).then((res) => {
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      });
    },
    openModal(status, item) {
      if (status === "isNew") {
        this.isNew = true;
        this.tempProduct = {
          imagesUrl: [],
        };
      } else if (status === "edit") {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      const modalComponent = this.$refs.productModalref;
      modalComponent.openModal();
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delModalComponent = this.$refs.delModalref;
      delModalComponent.openModal();
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/product/${this.tempProduct.id}`;
      let method = "put";
      if (this.isNew) {
        api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/product`;
        method = "post";
      }
      this.$http[method](api, { data: this.tempProduct }).then(() => {
        const modalComponent = this.$refs.productModalref;
        modalComponent.hideModal();
        this.getProducts();
      });
      this.getProducts();
    },
    delProduct() {
      const api = `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http
        .delete(api)
        .then(() => {
          const delModalComponent = this.$refs.delModalref;
          delModalComponent.hideModal();
          this.getProducts();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
@import "src/assets/all.scss";

.ap {
  letter-spacing: 1px;
}
.ap-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ap-h5 {
    display: inline-block;
    letter-spacing: 1px;
    font-weight: 700;
    margin: 0;
    color: $secondaryColor;
  }
  .ap-btn {
    margin: 0;
  }
}
.ap-table {
  th {
    color: $darkGray;
    font-weight: 300;
  }
}
</style>
