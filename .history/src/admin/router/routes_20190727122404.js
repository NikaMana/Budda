export default [
  {
    path: "/",
    component: () => import("@/components/pages/about.vue"),
    meta: {
      title: "Блок «Работы»"
    }
  },
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
  }
];