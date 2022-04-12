<template>
  <div class="container shipping d-flex flex-column">
    <div class="bgc">
      <h5>- 產品運送須知 -</h5>
      <div class="accordion mx-auto" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              低溫宅配需知
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong
                >-
                低溫分冷藏溫度0℃~7℃、冷凍溫度-15℃以下，乳製品因應運送位置，離島須斟酌收費。</strong
              >
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              商品到貨時間 / 日期
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong
                >出貨後約 2-3 個工作天可送達指定地址。
                食品恕無法指定配送日期與時段，冷藏冷凍商品請務必留下隨時可收貨並冷藏保存的地址與連絡電話，以免食品產生腐壞。</strong
              >
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              退換貨說明
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong
                >除食品本身有瑕疵可退貨外，ㄧ經拆封、食用或消費者造成之外盒變形、失溫或保存不良導致變質，將會影響退貨權限。</strong
              >
            </div>
          </div>
        </div>
      </div>
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
.shipping {
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
        width: 180px;
        background-color: #65ffbf;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .accordion {
      max-width: 80vh;
      margin: auto auto;
      .accordion-item {
        margin-bottom: 0.8rem;
        border: 1px solid #65ffbf;
        button {
          letter-spacing: 1px;
        }
        .accordion-button:not(.collapsed) {
          font-weight: bold;
          background-color: #65ffbf;
        }
        .accordion-body {
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
