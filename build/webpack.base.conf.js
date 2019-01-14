const path = require('path')                                //path是Node.js中的基本包,用来处理路径


module.exports = {                                          //以一个对象的形式对外暴露
    context: path.resolve(__dirname,"../"),                 //告诉webapck在哪个目录下取寻找入口文件
    entry: {
        app: './src/main.js'                                //设置入口文件
    },
    output: {
        
    }
}