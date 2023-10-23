import { ServerOptions } from 'vite';

export default {
  // 指定端口
  port: 9999,
  // 显示 ip
  host: true,
  hmr: true,
  // 本地代理
  // proxy: {
  //   "/api": {
  //     target: "",
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(new RegExp(`^/api`), ""),
  //   },
  // },
} as ServerOptions;
