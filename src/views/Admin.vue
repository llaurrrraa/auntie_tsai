<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#/home">
        <img
          src="../assets/images/icons/auntieTsai02-icon.png"
          height="40"
          class="d-inline-block align-text-top"
        />
      </a>
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex bd-highlight me-5 navbar-nav">
          <div class="p-2 bd-highlight nav-item ms-3">
            <router-link to="/admin/products" class="router-link"
              >產品列表</router-link
            >
          </div>
          <div class="p-2 bd-highlight nav-item ms-3">
            <router-link to="/admin/orders" class="router-link"
              >產品訂單</router-link
            >
          </div>
          <div class="p-2 bd-highlight nav-item ms-3">
            <router-link to="/admin/coupons" class="router-link"
              >優惠卷</router-link
            >
          </div>
          <!-- <div class="p-2 bd-highlight nav-item ms-3">
            <router-link to="/admin/posts" class="router-link"
              >貼文頁面</router-link
            >
          </div> -->
        </div>
      </div>
      <div class="navbar-text me-5">
        <div class="bd-highlight nav-item ms-3">
          <button class="btn btn-outline-primary me-3">
            <router-link to="/home" class="router-link-right">
              &#60; 返回前台</router-link
            >
          </button>
          <button class="btn btn-light btn-logout" @click.prevent="logout">
            登出
          </button>
        </div>
      </div>
    </div>
  </nav>
  <router-view v-if="checkStatus" />
</template>
<script>
export default {
  data() {
    return {
      checkStatus: false,
    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)mytoken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      // 如果找到 token 就進行以下處理
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;

        const api = `${process.env.VUE_APP_URL}/v2/api/user/check`;
        this.$http
          .post(api, { api_token: this.token })
          .then(() => {
            this.checkStatus = true;
          })
          .catch((err) => {
            alert(err.message);
            this.$router.push("/login");
          });
      } else {
        alert("請重新登入");
        this.$router.push("/login");
      }
    },
    logout() {
      // 將儲存在 cookie 中的 Token 清空
      document.cookie = "mytoken=;expires=;";
      alert("您已登出");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.checkLogin();

    // axios.defaults.headers.common.Authorization = token;
  },
};
</script>
<style lang="scss">
.router-link,
.router-link-right,
.router-link-logout {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
}
.btn-logout {
  font-weight: 700;
  letter-spacing: 1px;
}
.router-link:hover {
  background-color: #65ffbf;
  transition-duration: 0.5s;
  padding: 0 0.5rem;
  border-radius: 5px;
}
.nav-link {
  padding: 0;
  color: #000;
}
.nav-right {
  display: flex;
  justify-content: end;
}
</style>
