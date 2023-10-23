/**
 * 加载assets/images目录下的图片
 * @param url
 * @returns
 */
export const getAssetsImage = (url: string) => {
  return new URL(`../assets/images/${url}`, import.meta.url).href;
};

/**
 * 加载 assets 目录下的静态资源
 * @param url
 * @returns
 */
export const getAssets = (url: string) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};

/**
 * 加载 public 目录下的图片，可能需要针对本地和生产做不同路径配置
 * @param path
 * @returns
 */
export const getPublicImage = (path: string) => {
  return `/${path}`;
};
