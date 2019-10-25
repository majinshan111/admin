var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/advs');
var db = mongoose.connection;
db.on('error', ()=>{
  console.log('db no ok ')
});
db.once('open', function() {
  console.log('db  ok ')
});