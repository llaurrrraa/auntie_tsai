<template>
  <div class="container mt-3 col login-container">
    <div class="row justify-content-center col-8">
      <h5 class="text-center my-3 title">後台頁面登入</h5>
      <form class="form-signin" @submit.prevent="login">
        <div class="form-floating my-2">
          <!-- floating component can not miss the placeholder -->
          <input
            type="email"
            class="form-control"
            id="floatingUser"
            placeholder="name@example.com"
            v-model="user.username"
          />
          <label for="floatingUser" required autofocus>Email</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="password"
            v-model="user.password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button
          type="submit"
          class="btn btn-dark btn-lg w-100 my-1 form-btn-login"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      //   console.log(process.env.VUE_APP_URL);
      this.$http
        .post(`${process.env.VUE_APP_URL}v2/admin/signin`, this.user)
        .then((res) => {
          alert(res.data.message);
          const { token, expired } = res.data;
          document.cookie = `mytoken=${token}; expires=${new Date(expired)};`;
          this.$router.push("/admin/products");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>

<style lang="scss">
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    letter-spacing: 1.5px;
    font-weight: 700;
  }
  .form-signin {
    border: 2px solid #000;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    .form-btn-login:hover {
      background-color: #65ffbf;
      border: 1px solid #65ffbf;
    }
  }
}
</style>
