const express=require('express')
const app=express()

app.get('/find',(reg,res)=>{
    res.jason('in admin module find')
})
module.export=app