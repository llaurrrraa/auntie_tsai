<template>
  <div class="container mt-5">
    <div class="row">
      <aside class="col-md-2 aside me-1">
        <CategoryList @change-category="getProducts"></CategoryList>
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
  <Footer />
</template>

<script>
import Loading from "@/components/Loading.vue";
import ProductCard from "@/components/ProductCard.vue";
import CategoryList from "@/components/CategoryList.vue";
import Footer from "@/components/Footer.vue";
import emitter from "@/libraries/emitt.js";

export default {
  data() {
    return {
      isLoading: false,
      isLoadingItem: "",
      products: [],
      categoryTitle: "",
      show: false,
    };
  },
  components: {
    ProductCard,
    CategoryList,
    Loading,
    Footer,
  },
  methods: {
    getProducts(category) {
      this.isLoading = true;
      let api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/products/all`;
      if (category) {
        api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/products?category=${category}`;
        this.categoryTitle = category;
      }
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products.reduce((init, current) => {
          current.qty = 1;
          init.push(current);
          return init;
        }, []);
      });
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
          this.$swal("成功加到購物車 !", "詳情請至購物車查看", "success");
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/all.scss";

* {
  .container {
    .row {
      margin-bottom: 5rem;
      .main {
        h6 {
          margin-left: 1rem;
          letter-spacing: 1.5px;
          color: $darkGray;
        }
        .cards {
          .card {
            border: none;
            box-shadow: 2px 2px 15px 1px rgba(240, 240, 240, 1);
            border-radius: 10px;
            min-height: 280px;
          }
          .card:hover {
            transform: scale(1.1, 1.1);
            transition-duration: 0.5s;
            box-shadow: 2px 2px 15px 1px rgba(134, 134, 134, 0.3);
          }
          .card-body {
            padding-bottom: 0rem;
            img {
              height: 140px;
              object-fit: cover;
            }
            .first-line {
              .card-title {
                display: inline;
                font-size: 1.1rem;
                font-weight: 700;
                letter-spacing: 1.2px;
              }
              .card-price {
                display: inline;
                float: right;
                background-color: $primaryColor;
                color: $secondaryColor;
                border-radius: 5px;
                padding: 0 5px;
                margin-bottom: 0;
                font-size: 1rem;
                span {
                  font-size: 0.7rem;
                }
              }
            }
            .card-text {
              font-size: 0.9rem;
              letter-spacing: 1px;
              color: $darkGray;
              font-weight: 300;
              margin-bottom: 0.5rem;
              del {
                float: right;
                font-weight: 300;
              }
            }
            .router-link {
              color: #000;
            }
            .router-link:hover {
              color: #000000;
            }
          }
          .card-footer {
            display: flex;
            justify-content: space-between;
            border-top: none;
            background-color: #fff;
            border-radius: 10px;
            padding: 0.5rem 1rem 1rem;
            .wrapper {
              height: 40px;
              min-width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #fff;
              border-radius: 12px;
              border: 1px solid rgba(134, 134, 134, 0.3);
              // box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
              a {
                width: 70%;
                text-align: center;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                user-select: none;
                margin-bottom: 0;
                text-decoration: none;
              }
              .num {
                max-width: 2rem;
                text-align: center;
                border: none;
                border-right: 2px solid rgba(0, 0, 0, 0.2);
                border-left: 2px solid rgba(0, 0, 0, 0.2);
                pointer-events: none;
                margin-bottom: 0;
                padding: 0 5px;
              }
            }
            .btn {
              background-color: $secondaryColor;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0;
              .shoppingbag-icon {
                color: $primaryColor;
                width: 23px;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767.98px) {
  .card-body {
    padding: 0.5rem;
    img {
      max-height: 100px !important;
      object-fit: cover;
    }
    .first-line {
      .card-title {
        display: block;
      }
      .card-price {
        display: block !important;
        float: none !important;
      }
    }
    .card-text {
      font-size: 0.7rem !important;
    }
  }
  .card-footer {
    padding: 0 0.5rem 1.5rem !important;
  }
}
</style>
