const mongoose = require('mongoose')

//创建userSchema
const userSchema = mongoose.Schema({
    adv_swiper_id:{type:Number},
    category_second_id:{type:Number},
    category_name:{type:String,required:true},
    name:{type:String,required:true},
    img:{type:String,required:true}
})
const AdvsMode=mongoose.model('foods',userSchema)

module.exports = AdvsMode