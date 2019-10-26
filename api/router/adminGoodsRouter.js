const express = require('express')
const router = express.Router()
const GoodsModel = require('../db/model/goodsModel')
//登录
/**
 * @api {get} /admin/goods/getGoods   商品查询
 * @apiName getGoods 
 * @apiGroup Goods
 *
 * @apiParam {Number}  id 商品id
 * @apiParam {String}  name 商品名称
 * @apiParam {String}  goodsType  商品分类
 * @apiParam {Number}  nowPrice  商品现价
 * @apiParam {Number}  oldPrice  商品原价
 * @apiParam {Number}   counts  商品库存
 * @apiParam {Number}   sale 商品商量
 * @apiParam {String}  guige   商品规格
 * @apiParam {String}  addRess  原产地
 * @apiParam {String}  state  销售状态
 * @apiParam {String}  imgPath  照片
 
 * @apiParam {String}  second  二级分类
 *
 * 
 * @apiSuccess {Number}   err 状态码
 * @apiSuccess {String}  msg  msg
 * 
 */
//商品查询
router.get('/getGoods',(req,res)=>{
    GoodsModel.find()
    .then((data)=>{
        res.send({err:0,msg:'获取信息成功',list:data})
    })
})
/**
 * @api {get} /admin/goods/getGoodsByPage   分页+分类
 * @apiName getGoodsByPage 
 * @apiGroup Goods
 *
 * @apiParam {Number}  id 商品id
 * @apiParam {String}  name 商品名称
 * @apiParam {String}  goodsType  商品分类
 * @apiParam {Number}  nowPrice  商品现价
 * @apiParam {Number}  oldPrice  商品原价
 * @apiParam {Number}   counts  商品库存
 * @apiParam {Number}   sale 商品商量
 * @apiParam {String}  guige   商品规格
 * @apiParam {String}  addRess  原产地
 * @apiParam {String}  state  销售状态
 * @apiParam {String}  imgPath  照片

 * @apiParam {String}   second   二级分类
 * 
 * 
 * @apiSuccess {Number}   err 状态码
 * @apiSuccess {String}  msg  msg
 * 
 */
//分页+分类
router.get('/getGoodsByPage',(req,res)=>{   
    let page = req.query.page||1
    let pageSize = req.query.pageSize||12
    let count = 0
    let addRess = req.query.addRess
    let obj = {}
    if(addRess){obj.addRess=addRess}
    GoodsModel.find(obj)
    .then((data)=>{
        count = data.length
        return GoodsModel.find(obj).skip(Number((page-1)*pageSize)).limit(Number(pageSize))
    }) 
    .then((data)=>{
        res.send({err:0,msg:'获取信息成功',list:data,count:count})
    })
})
/**
 * @api {get} /admin/goods/addGoods   商品添加
 * @apiName addGoods 
 * @apiGroup Goods
 *
 * @apiParam {Number}  id 商品id
 * @apiParam {String}  name 商品名称
 * @apiParam {String}  goodsType  商品分类
 * @apiParam {Number}  nowPrice  商品现价
 * @apiParam {Number}  oldPrice  商品原价
 * @apiParam {Number}   counts  商品库存
 * @apiParam {Number}   sale 商品商量
 * @apiParam {String}  guige   商品规格
 * @apiParam {String}  addRess  原产地
 * @apiParam {String}  state  销售状态
 * @apiParam {String}  imgPath  照片

 * @apiParam {String}   second   二级分类
 * 
 * 
 * @apiSuccess {Number}   err 状态码
 * @apiSuccess {String}  msg  msg
 * 
 */
//添加商品
router.get('/addGoods',(req,res)=>{
   
    let {id,name,goodsType,nowPrice,oldPrice,counts,sale,guige,addRess,state,imgPath, second } = req.query
    GoodsModel.insertMany({id,name,goodsType,nowPrice,oldPrice,counts,sale,guige,addRess,state,imgPath, second })
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'商品添加已完成'})
    })
})
/**
 * @api {get} /admin/goods/delGoods   商品删除
 * @apiName delGoods 
 * @apiGroup Goods
 *
 * @apiParam {Number}  id 商品id
 * 
 * 22 
 * @apiSuccess {Number}   err 状态码
 * @apiSuccess {String}  msg  msg
 * 
 */
//删除商品
router.get('/delGoods',(req,res)=>{
    
     let {id} = req.query
     GoodsModel.deleteOne({id})
     .then((data)=>{
         console.log(data)
         res.send({err:0,msg:'商品已删除'})
     })
 })
 /**
 * @api {get} /admin/goods/updateGoods   商品修改
 * @apiName updateGoods 
 * @apiGroup Goods
 *
 * @apiParam {Number}  id 商品id
 * @apiParam {String}  name 商品名称
 * @apiParam {String}  goodsType  商品分类
 * @apiParam {Number}  nowPrice  商品现价
 * @apiParam {Number}  oldPrice  商品原价
 * @apiParam {Number}   counts  商品库存
 * @apiParam {Number}   sale 商品商量
 * @apiParam {String}  guige   商品规格
 * @apiParam {String}  addRess  原产地
 * @apiParam {String}  state  销售状态
 * @apiParam {String}  imgPath  照片
 
 * @apiParam {String}   second  二级分类
 *
 * 
 * @apiSuccess {Number}   err 状态码
 * @apiSuccess {String}  msg  msg
 * 
 */
 //修改商品

router.get('/updateGoods',(req,res)=>{
    let {id,name,goodsType,nowPrice,oldPrice,counts,sale,guige,addRess,state,imgPath, second } = req.query
    GoodsModel.updateOne({id:id},{id,name,goodsType,nowPrice,oldPrice,counts,sale,guige,addRess,state,imgPath,second })
    .then((data)=>{
        console.log('updata',data)
        res.send({err:0,msg:' 修改信息成功'})
    })
})
/**
 * @api {get} /admin/goods/getGoodsByKw 关健字查询
 * @apiName getGoodsByKw
 * @apiGroup Goods
 *
 * @apiParam {Number}  id 商品id
 * @apiParam {String}  name 商品名称
 * @apiParam {String}  goodsType  商品分类
 * @apiParam {Number}  nowPrice  商品现价
 * @apiParam {Number}  oldPrice  商品原价
 * @apiParam {Number}   counts  商品库存
 * @apiParam {Number}   sale 商品商量
 * @apiParam {String}  guige   商品规格
 * @apiParam {String}  addRess  原产地
 * @apiParam {String}  state  销售状态
 * @apiParam {String}  imgPath  照片
 *
 * @apiParam {String}   second   二级分类
 * 
 * @apiSuccess {Number}   err 状态码
 * @apiSuccess {String}  msg  msg
 * 
 */
//关健字查询
router.get('/getGoodsByKw',(req,res)=>{
    let {kw} = req.query
    let reg = new RegExp(kw)
    GoodsModel.find({$or:[{name:{$regex:reg}},{goodsType:{$regex:reg}},{addRess:{$regex:reg}},{state:{$regex:reg}}]})
    .then((data)=>{
        res.send({err:0,msg:'获取信息成功',list:data})
    })
})
module.exports = router