# <%= name %>

* 作者：<%= author %>
* 邮箱：<%= email %>
* 版本：**`<%= version %>`**

## 介绍

_<%= desc %>_

---

## 安装

`flash-*` 组件使用 `npm` 进行管理，命名空间统一为 `flash-`，请使用以下命令进行组件安装。

```
npm i flash-<%= name %> --save
```

- 如果你还没有安装 `npm`，可通过以下方式进行 [安装](https://nodejs.org/en/download/)。
- 安装cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`

---

## 使用

### 样例文档

- 待开发

### 使用
最少配置参数为：
- 传入`content`增加内容

```
<<%= upperCaseName %> content="React test app" styles="custom-style" handle={() => console.log("React test app")} />

```
### 配置参数

| Prop | Type | Default | Description |
| ---- |:----:|:-------:| :----------:|
| **`content`** | `string` | `undefined` | 主要内容 |
| **`handle`** | `func` | `undefined` | 点击触发事件 |
| **`styles`** | `string` | `undefined` | 自定义className |

---

## 注意事项

- 组件注意事项

---

## 开发调试

进入项目目录后，使用 `node` 命令启动服务

```
npm run start
```

打包发布可通过 `node` 命令执行

```
npm run build
npm publish
```

---

## 相关资料

* [flash 组件开发规范](http://)

---

## Changelog

### <%= version %>
1. init

---
