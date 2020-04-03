# 介绍
本项目为悦享推广前端h5页面，采用nuxt框架开发、支持服务端渲染。开发语言为js，为何不用ts？因为求快，懒得写type文件
## Todos
* 推广动态没有时显示空 ✅
* 我的任务页面开发
* 邀请推广文案修改 
* 领取红包页面海报
* 新增邀请推广海报生成页面 
  * 邀请推广页面海报
* 调试结算记录页面 
* 

## 更新记录


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
### 部署模式
* 部署该项目最简单的方式是使用内置nuxt框架的http服务器作为web容器
* 默认监听3000端口
* 该项目有多种方式运行


#### 服务端渲染部署
``` bash
npm run build
npm run start -u
```
#### 单页面应用程序部署 (SPA)
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


#### 纯静态部署
```
npm run generate
```
这个命令会创建一个 dist 文件夹，所有静态化后的资源文件均在其中。
