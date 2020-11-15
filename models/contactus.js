const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
subject:{
    type:String,
    required:true,
},
message:{
    type:String,
    required:true,
},

name:{
    type:String,
    required:true,
},
email:{
    type:String,
    require:true,
},
createdat:{
    type:Date,
    default:Date.now
},
})

module.exports=mongoose.model('contactus',userschema)