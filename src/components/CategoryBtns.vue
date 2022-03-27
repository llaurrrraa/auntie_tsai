<template>
  <div class="category">
    <button type="button" class="btn" @click.prevent="changePage('蔬菜類')">
      <img src="../assets/images/vegetables.png" alt="" />
      <p>蔬菜類</p>
    </button>
    <button type="button" class="btn" @click.prevent="changePage('水果類')">
      <img src="../assets/images/fruits.png" alt="" />
      <p>水果類</p>
    </button>
    <button type="button" class="btn" @click.prevent="changePage('肉製品')">
      <img src="../assets/images/meat.png" alt="" />
      <p>肉製品</p>
    </button>
    <button type="button" class="btn" @click.prevent="changePage('乳製品')">
      <img src="../assets/images/milk.png" alt="" />
      <p>乳製品</p>
    </button>
    <button type="button" class="btn" @click.prevent="changePage('植栽類')">
      <img src="../assets/images/plant.png" alt="" />
      <p>植栽類</p>
    </button>
    <button type="button" class="btn" @click.prevent="changePage('食品雜糧')">
      <img src="../assets/images/rice.png" alt="" />
      <p>食品雜糧</p>
    </button>
    <button type="button" class="btn" @click.prevent="changePage('小農特製')">
      <img src="../assets/images/farmer.png" alt="" />
      <p>小農特製</p>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: "",
    };
  },
  props: ["products"],
  methods: {
    changePage(category) {
      this.$router.push(`/products/${category}`);
    },
  },
};
</script>
<style lang="scss">
.category {
  max-width: 1220px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 1.5px;
    border-radius: 10px;
    box-shadow: 1px 0px 15px 1px rgba(240, 240, 240, 1);
    padding: 0.5rem 1.5rem;
    p {
      margin: 0.5rem 0;
      font-weight: 700;
      color: #9c9c9c;
    }
  }
  .btn img {
    max-width: 4rem;
    max-height: 5rem;
    margin: 0.5rem 0;
  }
}
@media (max-width: 768px) {
  .category {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    .btn {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      // padding: 1rem 1.2rem;
      img {
        max-width: 2rem;
      }
    }
  }
}
</style>
