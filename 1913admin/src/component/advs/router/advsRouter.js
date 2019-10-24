const express = require('express')
const router =express.Router()
const AdvsModel=require('../db/model/AdvsModel')

//获取全部信息
router.get('/getAdvs',(req,res)=>{
    AdvsModel.find()
    .then((data)=>{
        res.send({err:0,msg:'获取信息ok',list:data})
    })
})

//添加商品
router.get('/addAdvs',(req,res)=>{
    let {adv_swiper_id,category_second_id,category_name,name,img}=req.query
    AdvsModel.insertMany({adv_swiper_id,category_second_id,category_name,name,img})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'添加ok'})
    })
})
module.exports = router