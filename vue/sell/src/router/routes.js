const routes = [
  {
    path: "/",
    name: "travel-home",
    component: () => import('@view/home/home')
  },
  {
    path: "/city",
    name: "travel-city",
    component: () => import('@view/city/city')
  },
  {
    path: "/detail/:id",
    name: "travel-detail",
    component: () => import("@view/detail/detail")
  }
];

export default routes;
