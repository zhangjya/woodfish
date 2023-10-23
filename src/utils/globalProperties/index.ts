import { App } from 'vue';
import { getAssets } from '../index';

/**
 * 添加全局属性，可以直接在template中使用
 * @param app
 */
export const initGlobalProperties = (app: App<Element>) => {
  app.config.globalProperties.$assets = getAssets;
};
