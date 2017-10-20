# <%= name %>

* 作者：<%= author %>
* 邮箱：<%= email %>
* 版本：**`<%= version %>`**

## 介绍

_<%= desc %>_

---

## 安装

```
npm install
```

- 如果你还没有安装 `npm`，可通过以下方式进行 [安装](https://nodejs.org/en/download/)。
- 安装cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`

---

## 开发调试

进入项目目录后，使用 `node` 命令启动服务

```
npm run start
```

打包发布可通过 `node` 命令执行

```
npm run build
```

---
## 目录结构

```
.
├── README.md
├── build
│   ├── favicon.ico
│   ├── index.html
│   └── static
│       ├── css
│       ├── js
│       └── media
├── config
│   └── paths.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── scripts
│   └── mock-server.js
└── src
    ├── api
    │   └── request.js
    ├── components_common
    │   └── FooterBar
    │       ├── index.js
    │       └── index.scss
    ├── pages
    │   └── index
    │       ├── components
    │       │   ├── HomeLogo
    │       │   └── ListItem
    │       ├── containers
    │       │   ├── App.js
    │       │   ├── Home
    │       │   ├── My
    │       │   └── Site
    │       └── index.js
    ├── scss_mixin
    │   ├── build
    │   │   └── reset.min.css
    │   ├── scss
    │   │   ├── _mixins.scss
    └── tools
        └── polyfill.js
        
```

- src 业务代码
    - api 请求接口
    - components_common 业务公用代码片段
    - pages/* 页面
    - scss_mixin 快捷的布局mixin方法
    - tools
        - polyfill 补丁
- config/paths cdn配置
- public/*.html 项目html页 （默认单页应用为index.html ） 
- scripts/mock-server mock数据

---

## Changelog

### <%= version %>
1. init

---
