<template>
  <loading :active="isLoading" >
    <div class="loadingio-spinner-dual-ball-3b20qdmagcy">
      <div class="ldio-ye7pm4xc68n">
        <div></div>
        <div></div>
        <div></div>
      </div>
      Î
    </div>
  </loading>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props:["is-loading","is-loading-item"],
};
</script>
<style lang="scss">
@keyframes ldio-ye7pm4xc68n-o {
  0% {
    opacity: 1;
    transform: translate(0 0);
  }
  49.99% {
    opacity: 1;
    transform: translate(80px, 0);
  }
  50% {
    opacity: 0;
    transform: translate(80px, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 0);
  }
}
@keyframes ldio-ye7pm4xc68n {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(80px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.ldio-ye7pm4xc68n div {
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  top: 100px;
  left: 20px;
}
.ldio-ye7pm4xc68n div:nth-child(1) {
  background: #00ffbb;
  animation: ldio-ye7pm4xc68n 0.9615384615384615s linear infinite;
  animation-delay: -0.4807692307692307s;
}
.ldio-ye7pm4xc68n div:nth-child(2) {
  background: #005dff;
  animation: ldio-ye7pm4xc68n 0.9615384615384615s linear infinite;
  animation-delay: 0s;
}
.ldio-ye7pm4xc68n div:nth-child(3) {
  background: #00ffbb;
  animation: ldio-ye7pm4xc68n-o 0.9615384615384615s linear infinite;
  animation-delay: -0.4807692307692307s;
}
.loadingio-spinner-dual-ball-3b20qdmagcy {
  width: 180px;
  height: 180px;
  display: inline-block;
  overflow: hidden;
}
.ldio-ye7pm4xc68n {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.ldio-ye7pm4xc68n div {
  box-sizing: content-box;
}
</style>