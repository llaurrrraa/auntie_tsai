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
  <loading v-model:active="isLoading">
    <div class="loadingio-spinner-dual-ball-3b20qdmagcy">
      <div class="ldio-ye7pm4xc68n">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading>
</template>
<script>
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
@keyframes ldio-ye7pm4xc68n-o {
  0% {
    opacity: 1;
    transform: translate(0 0);
  }
  49.99% {
    opacity: 1;
    transform: translate(80px, 0);
  }
  50% {
    opacity: 0;
    transform: translate(80px, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 0);
  }
}
@keyframes ldio-ye7pm4xc68n {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(80px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.ldio-ye7pm4xc68n div {
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  top: 100px;
  left: 20px;
}
.ldio-ye7pm4xc68n div:nth-child(1) {
  background: #00ffbb;
  animation: ldio-ye7pm4xc68n 0.9615384615384615s linear infinite;
  animation-delay: -0.4807692307692307s;
}
.ldio-ye7pm4xc68n div:nth-child(2) {
  background: #005dff;
  animation: ldio-ye7pm4xc68n 0.9615384615384615s linear infinite;
  animation-delay: 0s;
}
.ldio-ye7pm4xc68n div:nth-child(3) {
  background: #00ffbb;
  animation: ldio-ye7pm4xc68n-o 0.9615384615384615s linear infinite;
  animation-delay: -0.4807692307692307s;
}
.loadingio-spinner-dual-ball-3b20qdmagcy {
  width: 180px;
  height: 180px;
  display: inline-block;
  overflow: hidden;
}
.ldio-ye7pm4xc68n {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.ldio-ye7pm4xc68n div {
  box-sizing: content-box;
}
.main {
  h6 {
    margin-left: 1rem;
    letter-spacing: 1.5px;
    color: #9c9c9c;
  }
}
</style>
