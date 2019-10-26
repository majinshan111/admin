const mongoose = require('mongoose')
const firstTypeSchema = mongoose.Schema({
    name:{type:String,required:true},
    
})
const model =mongoose.model('firstType',firstTypeSchema)
module.exports = model 