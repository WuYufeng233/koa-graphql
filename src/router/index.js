const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa')
const { saveInfo, fetchInfo } = require('../controllers/info')    // 引入info controller
const { saveStudent, fetchStudent, fetchStudentDetail } = require('../controllers/student')  // 引入 student controller

const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
      .get('/info', fetchInfo)
      .post('/savestudent', saveStudent)
      .get('/student', fetchStudent)
      .get('/studentDetail', fetchStudentDetail)
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
      })
module.exports = router
