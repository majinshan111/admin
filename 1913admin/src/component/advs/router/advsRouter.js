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

//删除商品
router.get('/delAdvs',(req,res)=>{
    let {_id} =req.query
    console.log(_id)
    AdvsModel.deleteOne({_id})
    .then((data)=>{
        res.send({err:0,msg:'删除成功',data})
    })
})
//修改商品
router.get('/updateAdvs',(req,res)=>{
    let {_id,adv_swiper_id,category_second_id,category_name,name,img}=req.query;
    AdvsModel.updateOne({_id:_id},{adv_swiper_id,category_second_id,category_name,name,img})
    .then((data)=>{
       
        res.send({err:0,msg:'修改成功'})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'内部错误'})
    })
})
module.exports = router