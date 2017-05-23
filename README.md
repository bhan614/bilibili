# bilibili

> Blilibili by vue2 and koa2

## 前端运行

``` bash
npm install
npm run dev
```

## 后端运行

``` bash
cd bilibili-api
npm install
npm run dev
```

## 技术栈
前端：vue2 + vuex + webpack + stylus
后端：koa2 + axios

## 技术栈
前端：vue2 + vuex + webpack + stylus
后端：koa2 + axios

## 动画
b站首页的动画效果很多，包括很多hover效果和banner、tab的滚动等
1. 配合css3的transition属性用hover触发
2. 用js触发，如轮播通过setInterval和设置marginLeft的百分比来实现
3. 通过vue的transition组件也可以实现动画

## 导航栏
在内容每个section都加上一个id，初始化是获取每部分到顶部距离offsettop = top + scrollTop - clientTop,滚动时将scrollTop和每部分的offsettop进行比较来设置当前状态。
滚动时间可以用函数节流来优化

## 项目展示

 <img src="./src/assets/images/show.png" align=center />
 <img src="./src/assets/images/music.png" align=center />
