const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    us:{type:Number,required:true},
    //age字段有数据的话就按照数据来，没有数据默认0
    
    ps:{type:Number,required:true}
})
const model =mongoose.model('user',userSchema)
module.exports = model