import { createRouter, createWebHistory, Router } from 'vue-router';

import routes from './routes';

const router: Router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
});

router.beforeEach((_to, _from, next) => {
  next();
});

router.afterEach((_to, _from) => {});

export default router;
