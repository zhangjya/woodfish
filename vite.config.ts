import { ConfigEnv, UserConfig } from 'vite';
import { resolve } from 'path';

import { createVitePlugins } from './build/plugins';
import server from './build/server';

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
};

// https://vitejs.dev/config/
export default function ({ command, mode }: ConfigEnv): UserConfig {
  const isProduction = command === 'build';

  return {
    base: './',
    // 本地服务相关配置
    server,
    logLevel: isProduction ? 'error' : 'info',
    // 配置需要的插件
    plugins: createVitePlugins(isProduction, mode),
    resolve: {
      // 指定别名
      alias: [
        // @/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /\/@images\//,
          replacement: pathResolve('src') + '/assets/images/',
        },
        // /#/xxxx => types/xxxx
        // {
        //   find: /\/#\//,
        //   replacement: pathResolve('types') + '/',
        // },
      ],
    },
    // 指定编译目标
    build: {
      target: 'es2015',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: 'static/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        },
      },
    },
    esbuild: {
      drop: isProduction && mode === 'production' ? ['console', 'debugger'] : [], // 生产上移除断点和日志
    },
    css: {
      preprocessorOptions: {
        // 支持scss
        scss: {
          // additionalData: '@import "/@/styles/mixin.scss";',
        },
      },
    },
  };
}
