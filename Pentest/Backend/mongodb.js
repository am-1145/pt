const mongoose=require("mongoose")

mongoose.connect("mongodb://foodiezone:priyanka@ac-svxf7ya-shard-00-00.ugavg21.mongodb.net:27017,ac-svxf7ya-shard-00-01.ugavg21.mongodb.net:27017,ac-svxf7ya-shard-00-02.ugavg21.mongodb.net:27017/Cybersec?ssl=true&replicaSet=atlas-jrvlfh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection