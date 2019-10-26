const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    orderId:{type:String,required:true},
    //age字段有数据的话就按照数据来，没有数据默认0
    userId:{type:String,required:true},
    price:{type:String,required:true},
    state:{type:Boolean,default:false},
    status:{type:String,required:true},
    createTime:{type:String,required:true},
})
const model =mongoose.model('order',orderSchema)
module.exports = model 