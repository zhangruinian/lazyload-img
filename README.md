## 插件简介

利用IntersectionObserver新api的img插件, 不会阻塞主线程.旧版本浏览器可以使用polyfill

## API

### options

参数 | 说明 | 类型 | 默认值
---|--- |--- |---
dataSrc | 懒加载图片的data-属性,只需写data-后的 | string| src
root | 懒加载图片的父元素 | htmlElement | document
rootMargin | 距离图片出现的边界,可提前加载 | string | 0px

## todo
* effect 图片出现效果 fadeIn等
