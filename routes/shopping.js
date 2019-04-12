const express=require("express");
const route=express.Router();
const{
users
}=require("../db")
route.post('/shopping',async (req,res)=>{
    // const result=users.create({
    //     username: req.body.username,
    //     email: req.body.email
    // })
    // users.findOne({
    //     where:{
    //         username: req.body.username,
    //         email:req.body.email
    //     }
    // }).then((item)=>{
    //     res.send(item)
    // })
    users.findOrCreate({
        where:{
            username: req.body.username,
            email: req.body.email
        }
    }).then(([user,created])=>{
        res.send(user)
    })
})

console.log("shopping.js working");
module.exports=route;