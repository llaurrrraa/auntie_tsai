<template>
  <div class="cards row">
    <div class="col my-3" v-for="item in cardProduct" :key="item.id">
      <div class="card h-260">
        <div class="card-body">
          <router-link :to="`/product/${item.id}`" class="router-link">
            <img
              :src="item.imageUrl"
              class="card-img-top"
              :alt="`${item.title}` + `Image`"
            />
            <div class="first-line mt-3 mb-2">
              <p class="card-title">{{ item.title }}</p>
              <p class="card-price">
                $ {{ item.price }} <span>/ {{ item.unit }}</span>
              </p>
            </div>
            <p class="card-text">
              {{ item.description }}<del>$ {{ item.origin_price }}</del>
            </p>
          </router-link>
        </div>
        <div class="card-footer">
          <div class="wrapper" ref="count">
            <a class="minus" @click="minus(item)">－</a>
            <input type="text" class="num" min="1" :value="item.qty" />
            <a class="plus" @click="add(item)">＋</a>
          </div>

          <button
            class="btn"
            type="button"
            @click="$emit('addToCart', item.id, item.qty)"
          >
            <ShoppingBagIcon class="shoppingbag-icon h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ShoppingBagIcon } from "@heroicons/vue/outline";

export default {
  name: "ProductCard",
  data() {
    return {};
  },
  props: ["cardProduct"],
  emits: ["addToCart"],
  components: {
    ShoppingBagIcon,
  },
  methods: {
    minus(item) {
      if (item.qty > 1) {
        item.qty = item.qty - 1;
      } else {
        return (item.qty = 1);
      }
    },
    add(item) {
      if (item.qty < 9) {
        item.qty = item.qty + 1;
      } else {
        return (item.qty = 9);
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "src/assets/all.scss";

.cards {
  .card {
    border: none;
    box-shadow: 2px 2px 15px 1px rgba(240, 240, 240, 1);
    border-radius: 10px;
    min-height: 280px;
  }
  .card:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 0.5s;
    box-shadow: 2px 2px 15px 1px rgba(134, 134, 134, 0.3);
  }
  .card-body {
    padding-bottom: 0rem;
    img {
      height: 140px;
      object-fit: cover;
    }
    .first-line {
      .card-title {
        display: inline;
        font-size: 1.1rem;
        font-weight: 700;
        letter-spacing: 1.2px;
      }
      .card-price {
        display: inline;
        float: right;
        background-color: $primaryColor;
        color: $secondaryColor;
        border-radius: 5px;
        padding: 0 5px;
        margin-bottom: 0;
        font-size: 1rem;
        span {
          font-size: 0.7rem;
        }
      }
    }
    .card-text {
      font-size: 0.9rem;
      letter-spacing: 1px;
      color: #8c8c8c;
      font-weight: 300;
      margin-bottom: 0.5rem;
      del {
        float: right;
        font-weight: 300;
      }
    }
    .router-link {
      color: #000;
    }
    .router-link:hover {
      color: #000000;
    }
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    border-top: none;
    background-color: #fff;
    border-radius: 10px;
    padding: 0.5rem 1rem 1rem;
    .wrapper {
      height: 40px;
      min-width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 12px;
      border: 1px solid rgba(134, 134, 134, 0.3);
      // box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      a {
        width: 70%;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
        margin-bottom: 0;
        text-decoration: none;
      }
      .num {
        max-width: 2rem;
        text-align: center;
        border: none;
        border-right: 2px solid rgba(0, 0, 0, 0.2);
        border-left: 2px solid rgba(0, 0, 0, 0.2);
        pointer-events: none;
        margin-bottom: 0;
        padding: 0 5px;
      }
    }
    .btn {
      background-color: $secondaryColor;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      .shoppingbag-icon {
        color: $primaryColor;
        width: 23px;
      }
    }
  }
}
@media (min-width: 768px) {
  .cards {
    .card {
      min-width: 250px;
      max-width: 251px;
    }
  }
}
</style>
