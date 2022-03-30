<template>
  <div class="container mt-5 product">
    <div class="row">
      <aside class="col-md-2 aside">
        <CategoryList :products="products"></CategoryList>
      </aside>
      <main class="col-md-10 main">
        <nav style="" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/products">{{ product.category }}</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <router-link :to="`/product/${product.id}`">{{
                product.title
              }}</router-link>
            </li>
          </ol>
        </nav>
        <hr />
        <div class="info-top row row-cols-sm-1 row-cols-md-2">
          <div class="pics col">
            <ThumbsGallery :thumb-product="product" />
          </div>
          <div class="info col">
            <h2 class="title">{{ product.title }}</h2>
            <ul>
              <li>
                <h6>
                  <del>原價 NT$ {{ product.origin_price }}</del>
                </h6>
              </li>
              <li>
                <h4>
                  NT$ {{ product.price }} / <span>{{ product.unit }}</span>
                </h4>
              </li>
              <li><br /></li>
              <li><h6>｜消費滿 $899 即可享免運優惠</h6></li>
              <li><h6>｜米飯類加價購 +89 元起！</h6></li>
            </ul>
            <div class="input-group qtyBtn my-4">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-minus1"
                @click="minus(qty - 1)"
              >
                －
              </button>
              <input
                type="text"
                style="max-width: 50px; text-align: center"
                class="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                v-model="qty"
                readonly
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-add1"
                @click="add(qty + 1)"
              >
                ＋
              </button>
              <button
                type="button"
                class="add-cart btn btn-lg btn-outline-dark"
                @click="addToCart(product.id)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
        <div class="info-bottom">
          <div class="content my-5">
            {{ product.content }}
          </div>
          <span>小農產區：{{ product.description }}</span>
        </div>
      </main>
    </div>
  </div>
  <Footer />
  <Loading :is-loading="isLoading" :is-loading-item="isLoadingItem" />
</template>
<script>
import Loading from "@/components/Loading.vue";
import ThumbsGallery from "@/components/ThumbsGallery.vue";
import CategoryList from "@/components/CategoryList.vue";
import Footer from "@/components/Footer.vue";
import emitter from "@/libraries/emitt.js";

export default {
  data() {
    return {
      isLoading: false,
      isLoadingItem: "",
      products: [],
      product: [],
      qty: 1,
    };
  },
  components: {
    CategoryList,
    ThumbsGallery,
    Footer,
    Loading,
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/product/${id}`
        )
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.product;
        });
    },
    minus(count) {
      if (count > 0) {
        count - 1;
      } else {
        return 1;
      }
      this.qty = count;
    },
    add(count) {
      if (count < 10) {
        count + 1;
      } else {
        return 9;
      }
      this.qty = count;
    },
    addToCart(id) {
      this.isLoading = true ;
      const data = {
        product_id: id,
        qty: this.qty,
      };
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/cart`;
      this.$http.post(api, { data }).then(() => {
        this.isLoading = false;
        emitter.emit("getCart");
        this.$swal("成功加到購物車 !", "詳情請至購物車查看", "success");
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
<style lang="scss">
.product {
  letter-spacing: 1px;
}
.main {
  margin-bottom: 8rem;
  .info-top {
    display: flex;
    align-items: flex-end;
    .info {
      padding: 1rem;
      .title {
        position: relative;
        letter-spacing: 2px;
        font-weight: 700;
        margin-bottom: 2rem;
        &::before {
          content: "";
          position: absolute;
          height: 5px;
          width: 140px;
          background-color: #65ffbf;
          top: 45px;
        }
      }
      ul {
        padding: 0;
        margin-bottom: 3rem;
      }
      ul > li {
        list-style: none;
        del {
          color: #8c8c8c;
        }
        h4 {
          background-color: #65ffbf;
          color: blue;
          padding: 5px;
          text-align: center;
          max-width: 15rem;
          display: inline-block;
          span {
            font-size: 1.15rem;
            font-weight: 700;
          }
        }
        h6 {
          color: #162dff;
        }
      }
      .qtyBtn {
        .add-cart {
          width: 60%;
        }
      }
    }
  }
  .info-bottom {
    background-color: #f8f9fa;
    border-radius: 15px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 7rem;
    .content {
      position: relative;
      text-align: center;
      padding: 1rem 3rem;
      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 90%;
        background-color: #dadada;
        transform: translateX(-50%);
      }
      &::before {
        top: -20px;
        left: 50%;
      }
      &::after {
        bottom: -20px;
        left: 50%;
      }
    }
    span {
      color: #8c8c8c;
    }
  }
  .breadcrumb-item {
    a {
      text-decoration: none;
      color: #8c8c8c;
    }
    .router-link-exact-active {
      color: blue;
      font-weight: 700;
      background-color: #65ffbf;
      padding: 0 5px;
    }
  }
}
@media(max-width:991.98px){
  .info-bottom{
    height:500px !important;
    margin-bottom: 4rem !important;
  }
}
</style>
