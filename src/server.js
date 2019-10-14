// 引入模块
const Koa = require('koa2')
const KoaStatic = require('koa-static')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const { database } = require('./mongodb')   // 引入mongodb

const GraphqlRouter = require('./router')

database() // 链接数据库并且初始化数据模型

const app = new Koa()
const router = new Router()
const port = 5000

// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.use('', GraphqlRouter.routes())

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port);

console.log('graphQL server listen port: ' + port)
