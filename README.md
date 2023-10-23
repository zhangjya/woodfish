# 开发框架说明

- [TypeScript](https://typescript.bootcss.com/basic-types.html)
- [Vite](https://www.vitejs.net/config/)
- 组合式[vue3](https://cn.vuejs.org/guide/introduction.html)
- 实用工具集[@vueuse/core](http://www.vueusejs.com/guide/)

---

## 启动项目

- 安装依赖

```
npm i
yarn // 推荐使用
```

- 本地服务

```
npm run dev
yarn dev
```

- 打包预览

```
npm run build
npm run preview
```

或

```
yarn build
yarn preview
```

---

## 目录结构

> TODO

---

## 使用别名

- /@/  
   该别名指向`src/`目录，示例如下  
   `import utils from '/@/utils/index'`
- /@images/  
   该别名指向`src/asstes/images/`目录， 示例如下  
   `import imgTopUrl from '/@images/register/top.png';`

---

## 静态资源

### 存放位置

- 静态资源统一放在[`assets`](./src/assets/)目录
- 静态图片放在[`assets/images`](./src/assets/images/)目录

### 如何引入

- 使用`img`标签展示图片时

> 已经封装全局 `$img` 属性 ，可以直接在模板中使用

```
// 展示图片
<template>
    <img class="img-top" :src="$img(图片在images目录下的路径)" alt="" srcset="">
</template>
```

- 在`css`中展示背景图片

```
.box {
    background: url('/@images/register/top.png');
}
```
