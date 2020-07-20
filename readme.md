## 简介

参考文档：https://juejin.im/entry/59791d8f6fb9a03c391b557e

使用 nextjs 框架，完成服务端页面生成和数据渲染。

使用 Link 组件完成客户端路由跳转，原理通过 location.history 的浏览器 API 保持历史路由。复用性强，只要包含一个能触发 onClik 事件的组件即可

所有页面都需要放在 pages 目录下，并且以文件名为路由地址来访问。

components 目录存放公用组件

完成功能如下：

1. pages 页面搭建
2. components 封装公共组件
3. 实现博客首页展示，详情页面跳转
4. 路由遮盖，创建简介路由地址，浏览器显示地址与服务器真正走的路由地址不同。

### 启动

```sh
npm install

# 开发环境
npm run dev

# 生产环境
npm start

# 编译打包
npm run build
```

### Next 特性

next 在 react 的基础上为组件添加一个新的特性 getInitialProps ，用于获取并处理组件的属性，返回组件的默认属性。

提供 css-in-js 特性，支持在组件内部写样式
，需要使用 <style jsx>标签来写 css。styled-jsx 的样式不会应用到子组件，如果想要该样式适用于子组件，可以在 styled-jsx 标签添加属性 global：<style jsx global>。
