### Install

```
npm install @forzoom/vue-load;
```

### Description

其中提供了一个插件，并且定义了一个指令，用来在加载图片时，对图片url进行操作。
大部分逻辑受到 [vue-Lazyload](https://www.npmjs.com/package/vue-lazyload) 启发。

目前只试吃浏览器端，不支持SSR

#### 插件配置

|key|type|default|description|
|---|---|---|---|
|directiveName|string \| null|"load"|所生成指令名字|
|filters|object|{}|图片文件过滤器|

#### 插件参数

|key|type|default|description|
|---|---|---|---|
|style|string|null|将图片以<image>形式设置为key为style的值|

例如:
```
v-load:background="xxx" // background: url(xxx)
v-load:background-image="xxx" // background-image: url(xxx)
```

#### 过滤器函数

例子：
```
{
	addPostfix: function(listener, config) {
		// 在所有的图片url结尾添加`-120`
		listener.src += '-120';
	},
}
```

listener结构为 `{ el, src, }`

key|description
---|---
el|图片DOM元素
src|图片链接

config结构为 `{ supportWebp }`

key|description
---|---
supportWebp|浏览器是否支持webp

### Usage

```
import Vue from 'vue';
import VueLoad from '@forzoom/vue-load';

Vue.use(VueLoad, {
	directiveName: 'my-load',
	filters: {
		addPostfix: function(listener, config) {
			// 在所有的图片url结尾添加`-120`
			listener.src += '-120';
		},
	},
});
```

```
<img />
```