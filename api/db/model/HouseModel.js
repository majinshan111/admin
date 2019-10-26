const mongoose = require('mongoose')
const HouseSchema = mongoose.Schema({
    id:{type:String,required:true},
    //age字段有数据的话就按照数据来，
    //default:0没有数据默认0
    name:{type:String,required:true},
    counts:{type:String,required:true},
    goodout:{type:String,default:0},
    goodin:{type:String,default:0},
   
})
const model =mongoose.model('house',HouseSchema)
module.exports = model 