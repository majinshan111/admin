const express = require('express')
const db = require('./db/connect')
const app =  express()
const fs = require('fs')
const path = require('path')
const AdminUserRouter = require('./router/adminUserRouter')
const AdminGoodsRouter = require('./router/adminGoodsRouter')
const AdminFileRouter = require('./router/adminFileRouter')
const AdminOrderRouter = require('./router/adminOrderRouter')
const AdminTypeRouter = require('./router/adminTypeRouter')
const AdminFirstTypeRouter = require('./router/adminFirstTypeRouter')
const AdminAssectRouter = require('./router/adminAssectRouter')
const AdminHouseRouter = require('./router/adminHouseRouter')
const Jwt= require('./utils/jwt') 
//post解析
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//静态资源路径
app.use('/public',express.static(path.join(__dirname,'./public')))
app.use(express.static(path.join(__dirname,'./www')))

app.use('/admin/file',AdminFileRouter)
app.use('/admin/order',AdminOrderRouter)
app.use('/admin/type', AdminTypeRouter)
app.use('/admin/firstType', AdminFirstTypeRouter)
app.use('/admin/assect', AdminAssectRouter)
app.use('/admin/house', AdminHouseRouter)
app.use('/admin/user',AdminUserRouter)
app.use('/admin/goods', 
// (req,res,next)=>{
//     let {token} = req.query
//     Jwt.verifyToken(token)
//     .then(()=>{
//       next()
//     })
//     .catch((err)=>{
//       res.send({err:-998,msg:'token失效请重新登录'})
//     }) 
// } 
AdminGoodsRouter)

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