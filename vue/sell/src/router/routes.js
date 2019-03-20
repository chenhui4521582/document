export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/home'),
    children: [
      {
        path: '/',
        name: 'goods',
        component: () => import('@/views/goods/goods')
      },
      {
        path: '/comment',
        name: 'comment',
        component: () => import('@/views/comment/comment')
      },
      {
        path: '/store',
        name: 'store',
        component: () => import('@/views/store/store')
      }
    ]
  }
]
