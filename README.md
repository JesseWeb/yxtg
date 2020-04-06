# 介绍
本项目为悦享推广前端h5页面，采用nuxt框架开发、支持服务端渲染。开发语言为js，为何不用ts？因为求快，懒得写type文件
## Todos
* 推广动态没有时显示空 ✅
* 邀请推广文案修改 ✅
* 邀请推广页面海报 ✅
* 我的任务页面开发 ✅
* 领取红包页面海报 ✅
* 首页增加登录状态 ✅
* 增加可修改昵称、展示微信号、修改微信号✅
* 生成海报页面：展示海报需要大一点 ✅
* 新增邀请推广海报生成页面 ✅
* 美团需要把url转成二维码，再合成图片 ✅
* 首页counts 和收入明细counts 改成 “今日” “昨日” “本月” “上月” ✅
* 微信打开授权页面、提示使用自带浏览器打开授权。✅
* 首页图片修改 ✅
* 增加淘宝电脑端授权判断 ✅
* 华为手机 position fixed bug问题需要解决（首页和分享红包页面）🧻
* 修改结算页面 https://free.modao.cc/app/c650e371c64cbc75e4fe6a575bf3913da8507388#screen=s3E44A718B61586079642549
* 调试结算记录页面 
## 更新记录
2020-04-04
* 增加禁止缩放功能 。
* 增加绑定支付宝功能。
* 关闭ETag，限制index.html缓存导致rebuild后页面不更新。
* 关闭线上analysis，否则filename命名失效，导致线上出现缓存问题。

## 部署教程

### 安装依赖
确保安装了npx（npx在NPM版本5.2.0默认安装了）：
```
npm i && npm i -g pm2 cross-env
```
或者使用yarn：
```
yarn && yarn global add pm2 cross-env
```

### 服务端渲染部署
``` bash
npm run build
npm run start -u
```
### 单页面应用程序部署 (SPA)
SPA应用的想法很简单！ 使用时启用SPA模式 mode: 'spa' 或 --spa，并且我们运行打包，生成在导报后自动启动，生成包含常见的meta和资源链接，但不包含页面内容。

因此，对于SPA的部署，您必须执行以下操作：

将```nuxt.config.js```中的```mode```更改为```spa```。
运行 ```npm run build```。

，部署到您的服务器，如Surge，GitHub Pages或nginx。
* 使用nuxt作为web容器
```
npm run build
npm run start -s
```
* 使用其他web容器
将自动生成dist/文件夹放入其他web容器根目录中即可


### 纯静态部署
```
npm run generate
```
这个命令会创建一个 dist 文件夹，所有静态化后的资源文件均在其中。
