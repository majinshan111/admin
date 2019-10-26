const express = require('express')
const router = express.Router()
const FirstTypeModel = require('../db/model/firstTypeModel')
//添加
router.get('/addFirstType',(req,res)=>{
    
     let {name} = req.query
     FirstTypeModel.insertMany({name, })
     .then((data)=>{
         console.log(data)
         res.send({err:0,msg:'一级分类添加已完成'})
     })
 })
//关健字查询
router.get('/getFirstTypeByKw',(req,res)=>{
    let {kw} = req.query
    let reg = new RegExp(kw)
    FirsrTypeModel.find({$or:[{name:{$regex:reg}}]})
    .then((data)=>{
        res.send({err:0,msg:'获取一级分类信息成功',list:data})
    })
})
//商品查询
router.get('/getFirstType',(req,res)=>{
    FirstTypeModel.find()
    .then((data)=>{
        res.send({err:0,msg:'获取一级分类信息成功',list:data})
    })
})




module.exports = router