## generator-flash

#### 目前仅支持react + react-router + redux + webpack 后续会支持vue等

#### 该脚手架可创建 项目 工程，也可创建 组件 工程

#### 运行环境
- node 6.x 以上版本
- Mac OSX & Windows

#### 安装方法
- ```npm install -g yo generator-flash```

#### 使用方法
- 任意目录 或者 项目目录 ```yo flash```

![](http://7xp5hs.com1.z0.glb.clouddn.com/D8CE86C8-109D-4226-85F6-EAED69F30866.png)

- 选择 创建项目 or 组件 （目前仅支持react 后续会支持vue等)
- 依次输入 或 回车填选 项目所需关键字

![](http://7xp5hs.com1.z0.glb.clouddn.com/1EC695B8-F783-49DC-8014-4B65B8CFE510.png)

- 项目自动生成 目录结构如下

<img src="http://7xp5hs.com1.z0.glb.clouddn.com/B75E3A87-14D5-4ED7-948E-41ECCA2A4773.png" width="300" />

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
│   ├── cdnPath.js
│   ├── filenames.js
│   └── polyfills.js
├── mock
│   ├── README.md
│   ├── config.js
│   └── db
│       ├── delay.json
│       └── test.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── api
    │   ├── index.js
    │   ├── serverGet.js
    │   └── serverPost.js
    ├── components_common
    │   └── FooterBar
    │       ├── index.js
    │       └── index.scss
    ├── pages
    │   └── index
    │       ├── actions
    │       ├── components
    │       │   ├── HomeLogo
    │       │   └── ListItem
    │       ├── containers
    │       │   ├── App.js
    │       │   ├── Home
    │       │   ├── My
    │       │   └── Site
    │       ├── index.js
    │       ├── reducers
    │       └── store
    ├── scss_mixin
    │   ├── build
    │   │   └── reset.min.css
    │   └── scss
    │       └── _mixins.scss
    └── tools
        ├── utils
        └── polyfill
       
```


#### 结构释意
- src 业务代码
    - api 请求
    - components_common 业务公用代码片段
    - pages/* 页面
    - scss_mixin 快捷的布局mixin方法语法糖
    - tools
        - utils 语法糖
        - polyfill 自定义补丁包
- config/cdnPath cdn配置
- public/*.html 项目html页 （默认单页应用为index.html ）
- mock/config mock数据

#### 安装依赖
- ```npm install```

#### 项目运行
- ```npm run start```
- ```npm run build```

#### 支持创建工程种类（目前只支持react的4种）
- 项目 react + react-router
- 项目 react + react-router + redux
- 无状态组件 reactSFC
- 有状态组件 reactComponent


#### 隐藏功能get😉
- mock数据功能 可以提供给你更好的前后端分离力能
- 新增页面 只需要在/src/pages/ 下新建和index平级的目录 并且/publish/ 下新建同名的 html 页面即可，无需多余配置
- 天然的支持 antd && antd-mobile
- scss_mixin 和 utils 语法糖，甜的你不要不要的



<span style="color:red;">划重点！！！划重点！！！ 模板工程 已经为你搞定了一切，你可以立即运行 看效果，唯一要干的事情就是写业务代码</span>



#### issue
- email: sublime3@163.com