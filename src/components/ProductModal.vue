<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
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
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    min="0"
                    placeholder="請輸入原價"
                    v-model="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    min="0"
                    placeholder="請輸入售價"
                    v-model="tempProduct.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  rows="10"
                  placeholder="請輸入產品說明內容"
                  v-model="tempProduct.content"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="mb-3">
                <label for="mainImgUrl" class="form-label"
                  >請輸入圖片網址</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="mainImgUrl"
                  v-model="tempProduct.imageUrl"
                  placeholder="please enter imageUrl"
                />
                <img class="img-fluid mt-2" :src="tempProduct.imageUrl" />
                <label for="localUpload" class="mt-3">或 上傳圖片</label>
                <input
                  type="file"
                  class="form-control mt-2"
                  id="localUpload"
                  placeholder="請輸入圖片連結"
                  ref="inputFile"
                  @change="localImg"
                />
                <img class="img-fluid mt-2" :src="imageUrl" />
              </div>
              <hr />
              <h5>多圖新增</h5>
              <!-- 是不是陣列的方法（ Array.isArray ），如果是陣列才會跑迴圈 -->
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <div v-for="(image, key) in tempProduct.imagesUrl" :key="key + '1'">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control mb-1"
                      placeholder="請輸入圖片連結"
                      v-model="tempProduct.imagesUrl[key]"
                    />
                    <img class="img-fluid" :src="tempProduct.imagesUrl[key]" />
                  </div>
                </div>
                <div
                  v-if="
                    !tempProduct.imagesUrl.length ||
                    tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                  "
                >
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.push('')">
                    <!-- 新增為字串形式，所以加 ''  -->
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.pop()">
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="addNewImg()"
                >
                  新增圖片
                </button>
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
            @click="$emit('update-product', tempProduct)"
          >
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
      imageUrl: null,
      file: "",
      tempProduct: {},
    };
  },
  props: ["product", "isNew"],
  mixins: [modalMixins],
  emit: ["update-product"],
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
  methods: {
    localImg() {
      const uploadFile = this.$refs.inputFile.files[0];
      const formData = new FormData();
      // console.log(uploadFile);
      formData.append("file-to-upload", uploadFile);
      // console.log(formData);
      const url = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/upload`;
      this.$http
        .post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addNewImg() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push("");
    },
  },
};
</script>
<style lang="scss">
@import "src/assets/all.scss";

* {
  font-family: "Rowdies", Noto Sans TC, cursive, sans-serif;
}
.modal-body {
  strong span {
    background-color: $primaryColor;
    color: $secondaryColor;
    padding: 2px 5px;
  }
}
</style>
