import { ComponentCustomProperties } from '@vue/runtime-core';
import { getAssets } from '../index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $assets: typeof getAssets;
  }
}
// 必须导出，才能在其他文件中使用
export default ComponentCustomProperties;
