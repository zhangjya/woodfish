// import Layout from '/@/layouts/Index.vue';

const routes = [
  {
    path: '/',
    component: () => import('/@/pages/home/Home.vue'),
    // redirect: '/home',
    // children: [
    //   {
    //     path: '/home',
    //     component: () => import('/@/pages/home/Home.vue'),
    //   },
    // ],
  },
];

export default routes;
