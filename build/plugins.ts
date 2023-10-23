import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import progress from 'vite-plugin-progress';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import components from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';
import { VarletUIResolver, VantResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
import { viteVConsole } from 'vite-plugin-vconsole';
import * as path from 'path';

export function createVitePlugins(isBuild: boolean, mode: string) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue({
      template: {
        transformAssetUrls: {
          img: ['src'],
        },
      },
    }),
    // 构建时显示进度条
    progress(),
    // 组件按需引入
    // components({
    //   resolvers: [VarletUIResolver()],
    // }),
    // autoImport({
    //   resolvers: [VarletUIResolver({ autoImport: true })],
    // }),
    // viteVConsole({
    //   entry: path.resolve('src/main.ts'), // 或者可以使用这个配置: [path.resolve('src/main.ts')]
    //   localEnabled: false,
    //   enabled: mode === 'staging', // 仅测试环境展示
    //   config: {
    //     theme: 'dark',
    //   },
    // }),
  ];

  // 编译时插件
  if (isBuild) {
    // vite-plugin-imagemin
    // vitePlugins.push(ConfigImageminPlugin());
    // 开启pwa
    // vitePlugins.push(
    //   VitePWA({
    //     manifest: {
    //       name: 'WTP',
    //       short_name: 'WTP',
    //       start_url: '/home',
    //       icons: [
    //         {
    //           src: './pwa/192.png',
    //           sizes: '192x192',
    //           type: 'image/png',
    //         },
    //         {
    //           src: './pwa/512.png',
    //           sizes: '512x512',
    //           type: 'image/png',
    //         },
    //       ],
    //     },
    //   }),
    // );
    // 打包分析
    // vitePlugins.push(visualizer({ open: true }) as any);
    // 兼容低版本浏览器
    // vitePlugins.push(
    //   legacy({
    //     targets: ['chrome 52'],
    //   }),
    // );
    // 开启.gz压缩  rollup-plugin-gzip
    // vitePlugins.push(
    //   viteCompression({
    //     verbose: true, // 默认即可
    //     disable: false, //开启压缩(不禁用)，默认即可
    //     deleteOriginFile: false, //删除源文件
    //     threshold: 10240, //压缩前最小文件大小
    //     algorithm: 'gzip', //压缩算法
    //     ext: '.gz', //文件类型
    //   }),
    // );
  }

  return vitePlugins;
}
