const express = require('express')
const router = express.Router()
const OrderModel = require('../db/model/orderModel')
//订单添加
router.get('/addOrder',(req,res)=>{
    
     let {orderId,userId,price,status,createTime,state} = req.query                                                            
     OrderModel.insertMany({orderId,userId,price,status,createTime,state })
     .then((data)=>{
         console.log(data)
         res.send({err:0,msg:'订单添加已完成'})
     })
 })
 //商品查询
router.get('/getOrder',(req,res)=>{
    OrderModel.find()
    .then((data)=>{
        res.send({err:0,msg:'获取订单信息成功',list:data})
    })
})




 //关健字查询
router.get('/getOrderByKw',(req,res)=>{
    let {kw} = req.query
    let reg = new RegExp(kw)
    OrderModel.find({$or:[{status:{$regex:reg}},{createTime:{$regex:reg}},{orderId:{$regex:reg}},{userId:{$regex:reg}},{price:{$regex:reg}}]})
    .then((data)=>{
        res.send({err:0,msg:'获取订单信息成功',list:data})
    })
})
//分页+分类
router.get('/getOrderByPage',(req,res)=>{   
    let page = req.query.page||1
    let pageSize = req.query.pageSize||12
    let count = 0
    let userId = req.query.userId
    let obj = {}
    if(userId){obj.userId=userId}
    OrderModel.find(obj)
    .then((data)=>{
        count = data.length
        return OrderModel.find(obj).skip(Number((page-1)*pageSize)).limit(Number(pageSize))
    }) 
    .then((data)=>{
        res.send({err:0,msg:'获取信息成功',list:data,count:count})
    })
})


//多条件查询

module.exports = router