const express = require('express')
const db = require('./db/connect')
const app =  express()
const fs = require('fs')
const path = require('path')
const AdminUserRouter = require('./router/adminUserRouter')
const AdminGoodsRouter = require('./router/adminGoodsRouter')
const AdminFileRouter = require('./router/adminFileRouter')
const Jwt= require('./utils/jwt') 
//post解析
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//静态资源路径
app.use('/public',express.static(path.join(__dirname,'./public')))
app.use(express.static(path.join(__dirname,'./www')))
app.use('/admin/user',AdminUserRouter)
app.use('/admin/file',AdminFileRouter)
app.use('/admin/goods', AdminGoodsRouter)
// (req,res,next)=>{
//   let {token} = req.query
//   Jwt.verifyToken(token)
//   .then(()=>{
//     next()
//   })
//   .catch((err)=>{
//     res.send({err:-998,msg:'token失效请重新登录'})
//   }) 
// },
app.listen(3000,()=>{
    console.log(`
    /**
     * 　　　　　　　 ┏┓　　　┏┓
     * 　　　　　　　┏┛┻━━━━━┛┻┓
     * 　　　　　　　┃　　　　　　┃ 　
     * 　　　　　　　┃　　　━　　 ┃
     * 　　　　　　　┃　＞　　＜　 ┃
     * 　　　　　　　┃　　　　　　 ┃
     * 　　　　　　　┃... ⌒ ... ┃
     * 　　　　　　　┃　　　　　　┃
     * 　　　　　　　┗━┓　　　┏━┛
     * 　　　　　　　　 ┃　　　┃　Code is far away from bug with the animal protecting　　　　　　　　　　
     * 　　　　　　　　 ┃　　　┃   神兽保佑,代码无bug
     * 　　　　　　　　 ┃　　　┃　　　　　　　　　　　
     * 　　　　　　　　 ┃　　　┃  　　　　　　
     * 　　　　　　　　 ┃　　　┃
     * 　　　　　　　　 ┃　　　┃　　　　　　　　　　　
     * 　　　　　　　　 ┃　　　┗━━━┓
     * 　　　　　　　　 ┃　　　　　　　┣┓
     * 　　　　　　　　 ┃　　　　　　　┏┛
     * 　　　　　　　　 ┗┓┓┏━┳┓┏┛
     * 　　　　　　　　　┃┫┫　┃┫┫
     * 　　　　　　　　　┗┻┛　┗┻┛
     */
    `)
})