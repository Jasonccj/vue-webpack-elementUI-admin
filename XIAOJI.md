## 个人小计

## 1.input:-webkit-autofill
当input在登录时触发表单后,会在书入库有个下拉列表显示历史输入值,此时的字体显示为了黑色,背景显示为了黄色.
可以用以下来解决
```
:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 0px 1000px #2d3a4b inset !important;
    -webkit-text-fill-color: #fff !important;
  }

```
[参考链接](https://blog.csdn.net/qq_36671474/article/details/77980502)