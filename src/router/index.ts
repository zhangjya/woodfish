import { createRouter, createWebHashHistory, Router } from 'vue-router';

import routes from './routes';

const router: Router = createRouter({
  history: createWebHashHistory('/'),
  routes: routes,
});

router.beforeEach((_to, _from, next) => {
  next();
});

router.afterEach((_to, _from) => {});

export default router;
