<template>
  <div class="modal fade" tabindex="-1" ref="modal" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="titleInput" class="form-label">優惠卷標題：</label>
                <input
                  type="text"
                  id="titleInput"
                  class="form-control"
                  v-model="data.title"
                />
              </div>
              <div class="mb-3">
                <label for="customRange" class="form-label">折扣：</label>
                <span class="span-range">{{ data.percent }} ％</span>
                <input
                  v-model="data.percent"
                  type="range"
                  class="form-range"
                  min="10"
                  max="100"
                  step="10"
                  id="customRange"
                />
              </div>
              <div class="mb-3">
                <label for="titleInput" class="form-label">期限：</label>
                <input
                  v-model="data.due_date"
                  type="datetime-local"
                  id="titleInput"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label for="titleInput" class="form-label">優惠碼：</label>
                <input
                  type="text"
                  id="titleInput"
                  class="form-control"
                  v-model="data.code"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('create-coupon', data)"
          >
            <!-- @click="$emit('create-coupon', data)" -->
            確認
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
    return {
      range: 100,
      data: {
        title: "",
        is_enabled: "",
        percent: "",
        due_date: "",
        code: "",
      },
    };
  },
  props: ["isNew"],
  mixins: [modalMixins],
  emit: ["create-coupon"],
  methods: {},
  watch: {
    range: function (n) {
      this.data.percent = n;
    },
    "data.due_date": function (newValue) {
      return Date.parse(newValue);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/all.scss";
* {
  font-weight: bold;
}
.span-range {
  background-color: $primaryColor;
  color: $secondaryColor;
  padding: 1px 5px;
}
</style>
