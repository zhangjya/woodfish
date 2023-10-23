// import Layout from '/@/layouts/Index.vue';

const routes = [
  {
    path: '/',
    // redirect: '/home',
    component: () => import('/@/pages/home/Home.vue'),
    // children: [
    //   {
    //     path: '/home',
    //     component: () => import('/@/pages/home/Home.vue'),
    //     meta: {
    //       title: 'Home',
    //       keepAlive: true,
    //       bottomBar: true,
    //     },
    //   },
    // ],
  },
];

export default routes;
