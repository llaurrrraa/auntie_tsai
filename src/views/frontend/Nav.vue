<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../../assets/images/icons/auntieTsai02-icon.png"
          height="60"
          class="d-inline-block align-text-top"
          alt="auntieTsai_logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex bd-highlight me-5 navbar-nav">
            <div class="p-2 bd-highlight nav-item ms-3">
              <router-link to="/" class="router-link nav-link"
                >首頁</router-link
              >
            </div>
            <div class="p-2 bd-highlight nav-item ms-3">
              <router-link to="/products" class="router-link nav-link"
                >所有產品</router-link
              >
            </div>
            <div class="p-2 bd-highlight nav-item ms-3">
              <router-link to="/shipping" class="router-link nav-link"
                >運送須知</router-link
              >
            </div>
            <div class="p-2 bd-highlight nav-item ms-3">
              <router-link to="/about" class="nav-link router-link"
                >關於我們</router-link
              >
            </div>
            <!-- <div class="p-2 bd-highlight nav-item ms-3">
              <HeartIcon class="heart-icon pb-1" />
            </div> -->
            <div class="p-2 bd-highlight nav-item ms-3 position-relative">
              <a
                class="cart-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <ShoppingBagIcon class="shopping-icon pb-1" />
              </a>
              <span
                class="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger"
                >{{ cartData.carts.length }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <div
    ref="offcanvasRef"
    tabindex="-1"
    class="offcanvas offcanvas-end"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">購物車清單</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <table class="table align-middle table-borderless table-hover">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartData.carts" :key="index">
            <td>
              <img
                :src="item.product.imageUrl"
                alt="auntieTsai_logo"
                class="cart-img"
              />
            </td>
            <td>
              <ul>
                <li class="td-title">
                  <h4>{{ item.product.title }}</h4>
                </li>
                <li class="td-price">
                  價格：$ {{ item.product.price }} / {{ item.product.unit }}
                </li>
              </ul>
            </td>
            <td>
              <div class="input-group input-group-sm qtyBtn">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-minus1"
                  @click="minusCart(item)"
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
                  v-model="item.qty"
                  readonly
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-add1"
                  @click="addCart(item)"
                >
                  ＋
                </button>
              </div>
            </td>
            <td>
              <button
                type="btn"
                class="btn btn-outline-dark"
                @click="deleteCart(item.id)"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="text-end">
              總金額：$ {{ cartData.final_total }}
            </td>
          </tr>
        </tfoot>
      </table>
      <a
        href="#/cart"
        type="btn"
        class="btn btn-lg go-cart"
        @click.prevent="goToCart"
      >
        前往結賬&emsp;〉
      </a>
    </div>
  </div>
  <loading v-model:active="isLoading"></loading>
</template>

<script>
import { ShoppingBagIcon } from "@heroicons/vue/outline";
// import { HeartIcon } from "@heroicons/vue/solid";
import emitter from "@/libraries/emitt.js";

export default {
  data() {
    return {
      isLoading: false,
      cartData: {
        carts: [],
      },
    };
  },
  components: {
    // HeartIcon,
    ShoppingBagIcon,
  },
  mounted() {
    this.getCart();
    // mitt 建立監聽
    emitter.on("getCart", () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart`
        )
        .then((res) => {
          this.cartData = res.data.data;
        });
    },
    minusCart(item) {
      item.qty--;
      this.isLoadingItem = item.id;
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${item.id}`,
          { data }
        )
        .then(() => {
          this.getCart();
          this.isLoadingItem = "";
        });
    },
    addCart(item) {
      item.qty++;
      this.isLoadingItem = item.id;
      this.isLoading = true;
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${item.id}`,
          { data }
        )
        .then(() => {
          this.isLoading = false;
          this.isLoadingItem = "";
          this.getCart();
        });
    },
    deleteCart(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`;
      this.$http.delete(api).then(() => {
        this.isLoading = false;
        this.getCart();
        emitter.emit("getCart");
      });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/all.scss";

.cart-link {
  cursor: pointer;
  color: #000;
}
.offcanvas {
  display: flex;
  justify-content: center;
  .offcanvas-header {
    justify-content: center;
    h5 {
      position: relative;
      border-radius: 5px;
      color: $darkGray;
      padding: 5px 15px;
      letter-spacing: 2px;
      &::before {
        position: absolute;
        content: "";
        height: 2px;
        width: 100px;
        background: #a1a1a1;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.table {
  letter-spacing: 1px;
  tbody {
    tr {
      td {
        .cart-img {
          width: 80px;
          object-fit: cover;
        }
        ul {
          padding-left: 0;
          list-style: none;
          margin-bottom: 0;
        }
        .td-title {
          h4 {
            font-weight: 700;
          }
        }
        .td-price {
          color: $darkGray;
        }
      }
    }
  }
  tfoot {
    color: $darkGray;
  }
}
.go-cart {
  width: 100%;
  font-weight: 700;
  letter-spacing: 2px;
  background-color: rgba(101, 255, 191, 0.5);
}
.go-cart:hover {
  background-color: $primaryColor;
}
.offcanvas-end {
  width: 600px;
}
.router-link {
  text-decoration: none;
  color: #000;
  font-weight: 700;
}
.router-link:hover {
  background-color: $primaryColor;
  border-radius: 5px;
}
.nav-link {
  padding: 0;
  color: #000;
}
.heart-icon,
.shopping-icon {
  width: 25px;
}
.heart-icon {
  color: $darkGray;
}
.heart-icon:hover {
  color: tomato;
  cursor: pointer;
}
.shopping-bag-bg:hover {
  background-color: $primaryColor;
  border-radius: 5px;
}
@media (max-width: 768px) {
  .offcanvas-end {
    width: 300px;
  }
  .offcanvas-header h5 {
    font-size: 1rem;
    &::before {
      top: 30px !important;
      width: 90px;
    }
  }
  .offcanvas-body {
    .table {
      tbody {
        tr {
          display: flex;
          flex-direction: column;
          align-items: center;
          td {
            ul {
              .td-title > h4 {
                font-size: 1rem;
                text-align: center;
              }
              .td-price {
              }
            }
          }
        }
      }
    }
  }
}
</style>
