<template>
  <div class="container about d-flex flex-column">
    <div class="bgc">
      <h5 class="title">- 關於阿姨 -</h5>
      <p class="subtitle">
        關於食品或阿姨服務相關問題，<br />歡迎來電或寫信與阿姨聊聊。
      </p>
      <ul class="content">
        <li>
          <h5>
            <span>|&emsp;客服專線&emsp;|</span>
          </h5>
          <a href="">07-777-7777</a>
          <p>
            服務時間為：<br />
            週一至週五 09:00-18:00
          </p>
        </li>
        <li>
          <h5>
            <span>|&emsp;服務信箱&emsp;|</span>
          </h5>
          <a href="">service@auntieTsai.com</a>
          <p>服務時間和客服相同，<br />還請您耐心等候。</p>
        </li>
        <li>
          <h5>
            <span>|&emsp;常見問題&emsp;|</span>
          </h5>
          <p>
            運送問題可參考 <strong><a href="#/shipping">運送須知</a></strong
            >， <br />其餘問題歡迎來信。
          </p>
        </li>
      </ul>
    </div>
  </div>
  <Footer />
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>
<style lang="scss">
.about {
  min-height: calc(100vh - 216px);
  .bgc {
    margin: auto 1.5rem;
    border: 1px solid #f8f9fa;
    box-shadow: 2px 2px 15px 1px rgba(240, 240, 240, 0.7);
    border-radius: 1rem;
    background-color: #fff;
    min-height: 50vh;
    h5 {
      position: relative;
      text-align: center;
      letter-spacing: 3px;
      color: #2e2e2e;
      width: 20rem;
      margin: 0 auto;
      font-weight: 700;
      padding: 4rem 1rem;
      &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 130px;
        background-color: #65ffbf;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .subtitle {
      font-weight: bold;
      text-align: center;
      letter-spacing: 1px;
      color: #8c8c8c;
    }
    .content {
      padding-left: 0;
      margin: 4rem 2rem;
      display: flex;
      justify-content: space-evenly;
      li {
        text-align: center;
        list-style: none;
        line-height: 30px;
        a {
          text-decoration: none;
          color: #0544f3;
          background-color: #d3d3d3;
          padding: 1px 5px;
        }
        a:hover {
          background-color: #65ffbf;
        }
        h5 {
          font-size: 1rem;
          padding: 1rem 0 2rem;
          font-weight: bold;
          color: #2e2e2e;
          &::before {
            top: 50px;
          }
        }
        p {
          color: #8c8c8c;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .about .bgc .content {
    flex-direction: column;
    margin: 0;
    margin-bottom: 1rem;
  }
}
</style>
