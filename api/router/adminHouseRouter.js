const express = require('express')
const router = express.Router()
const HouseModel = require('../db/model/houseModel')
//订单添加
router.get('/addHouse',(req,res)=>{
    
     let {id,name,counts,goodout,goodin} = req.query                                                            
     HouseModel.insertMany({id,name,counts,goodout,goodin })
     .then((data)=>{
         console.log(data)
         res.send({err:0,msg:'出入库存添加已完成'})
     })
 })
 //商品查询
router.get('/getHouse',(req,res)=>{
  HouseModel.find()
    .then((data)=>{
        res.send({err:0,msg:'出入库查询成功',list:data})
    })
})

 //关健字查询
router.get('/getHouseByKw',(req,res)=>{
    let {kw} = req.query
    let reg = new RegExp(kw)
    HouseModel.find({$or:[{ id:{$regex:reg}},{name:{$regex:reg}},{counts:{$regex:reg}},{goodout:{$regex:reg}},{goodin:{$regex:reg}}]})
    .then((data)=>{
        res.send({err:0,msg:'获取出入库信息成功',list:data})
    })
})
//分页+分类
router.get('/getHouseByPage',(req,res)=>{   
    let page = req.query.page||1
    let pageSize = req.query.pageSize||12
    let count = 0
    let name = req.query.name
    let obj = {}
    if(name){obj.name=name}
   HouseModel.find(obj)
    .then((data)=>{
        count = data.length
        return HouseModel.find(obj).skip(Number((page-1)*pageSize)).limit(Number(pageSize))
    }) 
    .then((data)=>{
        res.send({err:0,msg:'获取信息成功',list:data,count:count})
    })
})
module.exports = router