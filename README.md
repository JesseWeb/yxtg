# 介绍
悦享推广前端h5页面。<br/>
采用nuxt框架开发、支持服务端渲染、单页、静态化部署。开发语言为html、scss、js，为何不用ts？因为求快，懒得写type，什么时候更新看心情。什么时候发布看团队心情。有什么功能看用户心情。
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
* 修改结算页面 https://free.modao.cc/app/c650e371c64cbc75e4fe6a575bf3913da8507388#screen=s3E44A718B61586079642549 ✅
* 二维码大小和位置由后端控制 ✅
* 注册登录页面美化 ✅
* 帮助页面 ✅
* 分享页面美团部分优化流程 ✅
* 团队页面新增新用户标示 ✅
* 订单页面新增消费详情 ✅
* 饿了么红包分享，改成url生成二维码 ✅
* 生成文案不够大，去掉底部按钮，点击蒙板要关闭 ✅
* 注册页面如果自带推广码应该禁用编辑推广码 ✅
* 收入明细中 预估收入改成红色加粗 ✅
* 结算、首页的周期文案去掉 ✅
* 海报图加上左右箭头切换按钮 ✅
* 替换logo ✅
* 首页新增自用红包（需要授权，判断rid是否为空）、客服功能  ✅
* 华为手机 position fixed bug问题需要解决（首页和分享红包页面）✅
* 修改登录注册页面bug ✅
* 自用红包action sheets 回退不会消失 ✅
* 注册携带 openid以及resource_from和resource_tag参数 ✅
* 自用和分享增加果蔬红包 ✅
* 公众号二维码 ✅
* 增加授权页面 ✅
* 增加淘口令授权 ✅
* 授权结果增加重复授权结果 ✅
* 落地页和分享红包页面未授权跳往新地址 `/authorize` ✅
* 落地页规则补充 ✅
* 生成海报中带有用户id水印 ✅
* 下拉刷新改成全页面的（收入明细、我的好友页面）⏸️
* 调试结算记录页面 ⏸️
* ~~首页header替换图片~~ 
* ~~分享页复制文案功能是否保留有待商榷（保留，用来发朋友圈）~~ 
## 更新记录
###2020-04-04
* 增加禁止缩放功能 。
* 增加绑定支付宝功能。
* 关闭ETag，限制index.html缓存导致rebuild后页面不更新。
* 关闭线上analysis，否则filename命名失效，导致线上出现缓存问题。
* 我的任务增加反佣策略表
### 2020-04-07
* 解决首页昵称不显示的bug
* 提现页面输入金额iphone默认数字键盘
* 解决页面回退弹窗不消失的问题
### 2020-04-08
* 美化登录、注册、忘记密码页
* 个人信息页按钮美化
* 修复结算页面字体排列bug
* 优化我的任务界面
### 2020-04-10
* 解决登录注册忘记密码页面缩放问题
* 解决退出登录报错的问题（a标签默认行为未阻止）
* 修复首页注册中英文提示的问题
* 解决微信内打开页面被截取的问题（注册、登录、忘记密码）
* 首页部分文案修改
### 2020-04-11
* 团队页面bug修复
### 2020-04-13
* 修复部分样式bug
* 处理首页banner底图下方的细线
### 2020-04-15
* 进入无权限页面用户跳转至首页
### 2020-04-16
* 支持ipad pro分辨率
* 支持自动判断推广图片大小合成
* 优化了CI流程,build更快！
* 修复首页用户名消失的问题
* 调整home页 rebateList>timeType字段为3
### 2020-04-17
* 解决分享红包bug
### 2020-04-18
* 解决首页样式bug
* 解决分享红包页面样式和文案
* 复制客服微信提示优化
### 2020-04-20
* 解决微信windows客户端内置浏览器打开后form表单不显示（将a-form替换为a-form-model）
* 优化切换二维码的操作
### 2020-04-21
* 增加polyfill 解决浏览器兼容性问题
### 2020-04-24
* 授权方式改为只能淘口令
* 切换公众号模式推广文案也随之切换
* 生成海报中带有用户id水印
* 解决订单页面切换团队没有统计数据
### 2020-04-27
* 修复订单页面重复渲染list
### 2020-05-02
* 首页返佣信息和文案修改
### 2020-05-11
* 提现界面入口带有结算的字眼均改为提现
### 2020-05-23
* 首页自用红包领取调用接口，按钮做大
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
pm2 start npm -- run start
```
* 使用其他web容器
将自动生成dist/文件夹放入其他web容器根目录中即可


### 纯静态部署
```
npm run generate
```
这个命令会创建一个 dist 文件夹，所有静态化后的资源文件均在其中。
