const mongoose=require('mongoose');
//const session=require('express-session')
const contactus=require('../models/contactus');
module.exports={
    contact:function(req,res,next){
        const cont=new contactus({
            subject:req.body.subject,
            message:req.body.message,
            name:req.body.name,
            email:req.body.email
        })
        cont.save()
        .then((result)=>{
            console.log("contact us saved")
            next();
        })
        .catch((err)=>{
            console.log(err)
        })

        

    }



}

