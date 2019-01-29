# 搭建vue-admin

## 1.vue-cli3.0初始化vue-webpack工程
vue init webpack vue-admin

    ? Project name vue-admin
    ? Project description a vue admin
    ? Author Jasonccj <981015619@qq.com>
    ? Vue build standalone
    ? Install vue-router? Yes
    ? Use ESLint to lint your code? Yes
    ? Pick an ESLint preset Standard
    ? Set up unit tests No
    ? Setup e2e tests with Nightwatch? No
    ? Should we run `npm install` for you after the project has been created? (recommended) npm

锁定项目版本:package.json 的一些版本号,因为webpack不受控制,故需要按本框架重新配置下webpack的所有配置,包括build和config文件夹
因webpack-dev-server为3.0以上版本,故需要安装webpackCli

## 2.配置vue-Router
    1.配置路由,新建router文件夹,index.js作为路由的配置文件,并在main.js引入
    2.上传基本的图片和SVG
    3.配置permission.js




