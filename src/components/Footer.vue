<template>
  <footer class="footer bg-dark mt-auto">
    <div class="admin">
      <router-link to="/login" class="admin-link">| Admin Login |</router-link>
    </div>
    <div class="text">
      <p>© Auntie Tsai 2020 All Rights Reserved.</p>
      <p>圖片為練習使用，無商業用途。</p>
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  min-width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .admin {
    text-align: center;
    margin: 1rem 0;
    .admin-link {
      text-decoration: none;
      color: #8c8c8c;
    }
  }
  .text {
    letter-spacing: 2px;
    text-align: center;
    color: #afafaf;
    p {
      margin: 0;
      font-size: 12px;
    }
  }
}
</style>
