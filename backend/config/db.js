import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb://codeat:user1234@cluster0-shard-00-00.j3f5p.mongodb.net:27017,cluster0-shard-00-01.j3f5p.mongodb.net:27017,cluster0-shard-00-02.j3f5p.mongodb.net:27017/SavvyShopYT?ssl=true&replicaSet=atlas-bqytn1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log
    ("DB Connected"))
        }


// const connectDB = async()=>{
//     await mongoose.connect('mongodb+srv://codeat:user1234@cluster0.j3f5p.mongodb.net/SavvyShopYT')
// }

