const mongoose = require('mongoose')
const goodsSchema = mongoose.Schema({
    id:{type:Number,required:true},
    //age字段有数据的话就按照数据来，
    //default:0没有数据默认0
    name:{type:String,required:true},
    goodsType:{type:String,required:true},
    nowPrice:{type:Number,default:0},
    oldPrice:{type:Number,default:0},
    counts:{type:Number,default:0},
    sale:{type:Number,default:0},
    guige:{type:String,required:true},
    addRess:{type:String,required:true},
    state:{type:String,required:true},
    imgPath:{type:String,default:0},
    second:{type:String,required:true}
    
})
const model =mongoose.model('goods',goodsSchema)
module.exports = model