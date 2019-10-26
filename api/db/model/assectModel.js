const mongoose = require('mongoose')
const AssectSchema = mongoose.Schema({
    id:{type:Number,required:true},
    //age字段有数据的话就按照数据来，
    //default:0没有数据默认0
    account:{type:String,required:true},
    nickname:{type:String,required:true},
    password:{type:String,required:true},
    sex:{type:String,required:true},
   
})
const model =mongoose.model('assect',AssectSchema)
module.exports = model 