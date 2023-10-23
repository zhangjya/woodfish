import path from 'path';

const judgeComponent = (file) => {
  const ignore = ['@varlet', 'vant'];
  return ignore.some((item) => path.join(file).includes(path.join('node_modules', item)));
};

export default () => {
  return {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
          "ie >= 8",
        ],
      },
      "cnjm-postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: 750,
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        minPixelValue: 1,
        mediaQuery: true,
        replace: true,
        landscape: false,
        landscapeUnit: "rem",
        landscapeWidth: 1134,
        include: [],
        exclude: [], // 设置忽略文件，用正则做目录名匹配
        customFun: ({ file }) => {
          // 这个自定义的方法是针对处理@varlet组件下的设计稿为375问题
          const designWidth = judgeComponent(file) ? 375 : 750;
          return designWidth;
        },
      },
    },
  };
};
