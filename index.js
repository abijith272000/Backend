const express=require('express')
const app=express()
const mongoose = require('mongoose');
const cors=require('cors')
const Doctor =require('./doctor')
mongoose.connect('mongodb://127.0.0.1:27017/hospital')
  .then(() => console.log('Connected!'));

const db=mongoose.connection
app.use(express.json())
app.use(cors())
app.post('/insert',async(req,res)=>{
    console.log(req.body);
    try{
      let newdoctor=new Doctor(req.body)
      console.log(newdoctor);
      let response=await newdoctor.save()
    //    let response=await db.collection('doctor').insertOne(req.body)
    console.log(response);
    res.json(response)
}
catch(e){
  console.log(e.message);
}
})

// app.get('/find',async (req,res)=>{
//     let response=await db.collection('doctor').find().toArray()
//     console.log(response);
//     res.json(response)
})
app.get('/FindOne/:id',async (req,res)=>{
  let id=req.params.id
  //let id=new mongoose.Types.ObjectId(req.params.id)
  console.log(id);
 // let response=await db.collection('doctor').findOne({_id:id})
  console.log(response);
  res.json(response)

})

app.put('/update/:id',async(req,res)=>{
  let id=req.params.id
  let response=await Doctor.findByIdAndUpdate(id,req.body)
 // let id=new mongoose.Types.ObjectId(req.params.id)
  //let response=await db.collection('doctor').updateOne({_id:id},{$set:req.body})
  console.log(response);
})

app.delete('/delete/:id',async(req,res)=>{
  let id=req.params.id
  console.log(id);
  let response=await Doctor.findByIdAndDelete(id)
  // let id=new mongoose.Types.ObjectId(req.params.id)
  // console.log(id);
  // let response=await db.collection('doctor').deleteOne({_id:id})
  console.log(response);
})



app.get('/login',(req,res)=>{
    res.json({login:'success'})
    
})

app.get('/register',(req,res)=>{
    console.log('fdf');
res.send('register')
})
 module.export=app
//app.listen(4000)