const mongoose=reguire('mongoose')

const doctorsxheme=new mongoose.Schema({
Username:{
    type:string,
    unique:true,
    required:true
},
password:{
    typr:string,
    required:true
},
firstName:{
    type:string
}
})

let Doctor=mongoose.model('Doctor',doctorscheme,'doctor')
module.export=Doctor