<template>
  <div class="container mt-5">
    <div class="row">
      <aside class="col-md-2 aside me-1">
        <CategoryList @change-category="getListedProducts"></CategoryList>
      </aside>
      <main class="col main">
        <h6 v-if="categoryTitle != ''">
          {{ categoryTitle }}
        </h6>
        <h6 v-else>所有產品</h6>
        <hr />
        <ProductCard :cardProduct="products" @add-to-cart="addToCart" />
      </main>
    </div>
  </div>
  <Loading :is-loading="isLoading" :is-loading-item="isLoadingItem" />
</template>

<script>
import Loading from "@/components/Loading.vue";
import ProductCard from "@/components/ProductCard.vue";
import CategoryList from "@/components/CategoryList.vue";
import emitter from "@/libraries/emitt.js";

export default {
  data() {
    return {
      products: [],
      isLoading: false,
      categoryTitle: "",
    };
  },
  components: {
    Loading,
    CategoryList,
    ProductCard,
  },
  methods: {
    getListedProducts(type) {
      this.isLoading = true;
      const { category } = this.$route.params;
      let api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/products?category=${category}`;
      if (type) {
        api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/products?category=${type}`;
      }
      this.$http.get(api).then((res) => {
        this.products = res.data.products;
        this.isLoading = false;
        this.products = res.data.products.reduce((init, current) => {
          current.qty = 1;
          init.push(current);
          return init;
        }, []);
      });
      this.categoryTitle = type;
    },
    addToCart(id, count = 1) {
      const data = {
        product_id: id,
        qty: count,
      };
      this.isLoadingItem = id;
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart`,
          { data }
        )
        .then(() => {
          this.isLoadingItem = "";
          emitter.emit("getCart");
        });
    },
  },
  mounted() {
    this.getListedProducts();
  },
};
</script>

<style lang="scss">
.main {
  h6 {
    margin-left: 1rem;
    letter-spacing: 1.5px;
    color: #9c9c9c;
  }
}
</style>
