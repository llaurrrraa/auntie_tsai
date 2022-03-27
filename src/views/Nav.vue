<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">
        <img
          src="../assets/images/icons/auntieTsai02-icon.png"
          height="60"
          class="d-inline-block align-text-top"
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
              <router-link to="/home" class="router-link nav-link"
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
            <div class="p-2 bd-highlight nav-item ms-3">
              <HeartIcon class="heart-icon pb-1" />
            </div>
            <div class="p-2 bd-highlight nav-item ms-3 position-relative">
              <router-link to="/cart" class="nav-link shopping-bag-bg">
                <ShoppingBagIcon class="shopping-icon pb-1" />
                <span
                  class="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger"
                  >{{ cartData.carts.length }}</span
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <loading v-model:active="isLoading"></loading>
</template>

<script>
import { ShoppingBagIcon } from "@heroicons/vue/outline";
import { HeartIcon } from "@heroicons/vue/solid";
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
    HeartIcon,
    ShoppingBagIcon,
  },
  methods: {
    getCart() {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/cart`
        )
        .then((res) => {
          this.cartData = res.data.data;
          // console.log(res);
        });
    },
  },
  mounted() {
    this.getCart();
    // mitt 建立監聽
    emitter.on("getCart", () => {
      this.getCart();
    });
  },
};
</script>

<style lang="scss">
.router-link {
  text-decoration: none;
  color: #000;
  font-weight: 700;
}
.router-link:hover {
  background-color: #65ffbf;
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
  color: #9c9c9c;
}
.heart-icon:hover {
  color: tomato;
  cursor: pointer;
}
.shopping-bag-bg:hover {
  background-color: #65ffbf;
  border-radius: 5px;
}
</style>
