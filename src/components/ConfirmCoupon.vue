<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Email 折扣碼</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="coupon-modal-body modal-body">
          <input
            id="emailCouponID"
            type="text"
            class="email-input"
            value="#useEmailCoupon"
          />
          <button class="btn btn-outline-dark coupon-btn" type="button" @click="copyCoupon()">
            <span class="tooltip-text" id="myTooltip">Copy to clipboard !</span>
            複製
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixins from "@/mixins/modalMixins";

export default {
  data() {
    return {};
  },
  mixins: [modalMixins],
  methods: {
    copyCoupon() {
      const copyTxt = document.getElementById("emailCouponID");
      copyTxt.select();
      copyTxt.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyTxt.value);

      const tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = "複製好摟!";
    },
  },
};
</script>
<style lang="scss">
@import "src/assets/all.scss";

.modal-header {
  .modal-title {
    letter-spacing: 1px;
    margin: 0 auto;
    color: $darkGray;
    font-weight: 700;
  }
  .btn-close {
    margin: 0;
  }
}
.coupon-modal-body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primaryColor;
  .email-input {
    color: $secondaryColor;
    text-align: center;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    height: 2.5rem;
    margin: 1rem;
  }
  .tooltip-text {
    visibility: hidden;
    width: 140px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .tooltip-text::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  .coupon-btn {
    position: relative;
    display: inline-block;
  }
  .coupon-btn:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
}
</style>