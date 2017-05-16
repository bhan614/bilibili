import Koa from 'koa';
import http from 'http'
import convert from 'koa-convert'
import logger from 'koa-logger'
import cors from 'koa-cors' //跨域
import bodyParser from 'koa-bodyparser' //请求体JSON解析
import onerror from 'koa-onerror' //错误处理
import resource from 'koa-static' //静态资源托管

import path from 'path'

import router from './routes'
import config from '../config/config';

// 同步已定义的模型到数据库
// models.sync({force: true}).then(function () {
// 	console.log('Server Success')
// }).catch (function (error) {
// 	console.log('Server Failed' + error)
// })

// import router from './routes';

// import middlewares from './middlewares';
// import cacheMiddle from './middlewares/cache';

// const redisStore = koaRedis({
//   url: config.redisUrl
// });

const app = new Koa();

onerror(app)

app.use(convert(cors()))

app.use(convert(logger()))

app.use(bodyParser())

app.use(resource(path.join(__dirname, '../public')))
console.log(path.join(__dirname, '../public'))
// app.use(json({ pretty: false, param: 'pretty' }))

app.use(async (ctx, next) => {
	const start = new Date()
	await next()
	const ms = new Date() - start
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// router
app.use(router.routes(), router.allowedMethods());


app.on('error', (error, ctx) => {
	console.log('奇怪的错误' + JSON.stringify(ctx.onerror))
	console.log('server error:' + error)
})

http.createServer(app.callback()).listen(config.port).on('listening', function () {
	console.log('正在监听端口' + config.port)
})

export default app;
