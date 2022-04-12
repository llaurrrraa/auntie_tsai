import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/frontend/Nav.vue"),
    meta: {
      title: "Entrance",
    },
    children: [
      {
        path: "",
        component: () => import("../views/frontend/Home.vue"),
      },
      {
        path: "about",
        component: () => import("../views/frontend/About.vue"),
      },
      {
        path: "shipping",
        component: () => import("../views/frontend/Shipping.vue"),
      },
      {
        path: "products", // 多個產品列表
        component: () => import("../views/frontend/Products.vue"),
      },
      {
        path: "products/:category", // 分類產品列表
        component: () => import("../views/frontend/ProductsList.vue"),
      },
      {
        path: "product/:id", // 單一產品列表
        component: () => import("../views/frontend/Product.vue"),
      },
      {
        path: "cart", // 購物車
        component: () => import("../views/frontend/Cart.vue"),
      },
      {
        path: "order", // 訂單
        component: () => import("../views/frontend/Order.vue"),
      },
      {
        path: "checkout", // 結帳
        component: () => import("../views/frontend/Checkout.vue"),
      },
    ],
  },
  {
    path: "/login", // 後台登入
    component: () => import("../views/backend/AdminLogin.vue"),
  },
  {
    path: "/admin", // 後台
    component: () => import("../views/backend/Admin.vue"),
    children: [
      {
        path: "products", // 多個產品列表
        component: () => import("../views/backend/AdminProducts.vue"),
      },
      {
        path: "orders", // 訂單列表
        component: () => import("../views/backend/AdminOrders.vue"),
      },
      {
        path: "coupons", // 優惠卷列表
        component: () => import("../views/backend/AdminCoupons.vue"),
      },
      {
        path: "posts", // 貼文列表
        component: () => import("../views/backend/AdminPosts.vue"),
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
