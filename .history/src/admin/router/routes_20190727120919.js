export default [
  {
    path: "/",
    component: () => import("@/components/pages/About.vue"),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    component: () => import("@/components/pages/Works.vue"),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/comments",
    component: () => import("@/components/pages/Comments.vue"),
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/login",
    component: () => import("@/components/pages/Login.vue"),
    meta: {
      public: true
    }
  }
];