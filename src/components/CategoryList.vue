<template>
  <div class="sticky-top" style="top: 76px">
    <div class="list-group list-group-flush">
      <a
        @click.prevent="changeProducts('')"
        class="cl-all list-group-item list-group-item-action"
      >
        👜 ｜ 全部
      </a>
      <a
        @click.prevent="changeProducts('蔬菜類')"
        class="list-group-item list-group-item-action"
      >
        🥬 ｜ 蔬菜類
      </a>
      <a
        @click.prevent="changeProducts('水果類')"
        class="list-group-item list-group-item-action"
      >
        🍎 ｜ 水果類
      </a>
      <a
        @click.prevent="changeProducts('肉製品')"
        class="list-group-item list-group-item-action"
      >
        🥩 ｜ 肉製品
      </a>
      <a
        @click.prevent="changeProducts('乳製品')"
        class="list-group-item list-group-item-action"
      >
        🥛 ｜ 乳製品
      </a>
      <a
        @click.prevent="changeProducts('植栽類')"
        class="list-group-item list-group-item-action"
      >
        🪴 ｜ 植栽類
      </a>
      <a
        @click.prevent="changeProducts('食品雜糧')"
        class="list-group-item list-group-item-action"
      >
        🍚 ｜ 食品雜糧
      </a>
      <a
        @click.prevent="changeProducts('小農特製')"
        class="list-group-item list-group-item-action"
      >
        🧑‍🌾 ｜ 小農特製
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeProducts(category) {
      this.$emit("change-category", category);
      this.$router.push(`/products/${category}`);
    },
  },
};
</script>

<style lang="scss">
.list-group {
  a {
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 1px;
    padding: 1rem;
  }
  a.cl-all {
    font-weight: 700;
  }
  a:hover {
    font-weight: 700;
  }
  .list-group-item:hover,
  .list-group-item-action:focus {
    background-color: #f8f9fa;
  }
}
</style>
