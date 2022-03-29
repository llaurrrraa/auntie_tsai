import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Nav.vue"),
    meta: {
      title: "Entrance",
    },
    children: [
      {
        path: "home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "about",
        component: () => import("../views/About.vue"),
      },
      {
        path: "shipping",
        component: () => import("../views/Shipping.vue"),
      },
      {
        path: "products", // 多個產品列表
        component: () => import("../views/Products.vue"),
      },
      {
        path: "products/:category", // 分類產品列表
        component: () => import("../views/ProductsList.vue"),
      },
      {
        path: "product/:id", // 單一產品列表
        component: () => import("../views/Product.vue"),
      },
      {
        path: "cart", // 購物車
        component: () => import("../views/Cart.vue"),
      },
      {
        path: "order", // 訂單
        component: () => import("../views/Order.vue"),
      },
      {
        path: "checkout", // 結帳
        component: () => import("../views/Checkout.vue"),
      },
    ],
  },
  {
    path: "/login", // 後台登入
    component: () => import("../views/AdminLogin.vue"),
  },
  {
    path: "/admin", // 後台
    component: () => import("../views/Admin.vue"),
    children: [
      {
        path: "products", // 多個產品列表
        component: () => import("../views/AdminProducts.vue"),
      },
      {
        path: "orders", // 訂單列表
        component: () => import("../views/AdminOrders.vue"),
      },
      {
        path: "coupons", // 優惠卷列表
        component: () => import("../views/AdminCoupons.vue"),
      },
      {
        path: "posts", // 貼文列表
        component: () => import("../views/AdminPosts.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
