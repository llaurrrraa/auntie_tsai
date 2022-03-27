<template>
  <div
    class="modal fade"
    id="delModalref"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            移除 {{ product.title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <strong>
            確定刪除
            <span>
              {{ product.title }}
            </span>
            嗎？
          </strong>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-outline-danger"
            @click="$emit('del-product')"
          >
            刪除
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
  props: ["product"],
  mixins: [modalMixins],
  emit: ["del-product"],
};
</script>
