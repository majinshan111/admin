const mongoose = require('mongoose')
const typeSchema = mongoose.Schema({
    name:{type:String,required:true},
    second:{type:String,required:true},
})
const model =mongoose.model('type',typeSchema)
module.exports = model 