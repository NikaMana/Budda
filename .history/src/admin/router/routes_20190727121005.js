export default [
  {
    path: "/works",
    component: () => import("@/components/pages/works.vue"),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/comments",
    component: () => import("@/components/pages/comments.vue"),
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