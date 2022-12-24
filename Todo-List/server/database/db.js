import mongoose from "mongoose"; 
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection= () => {
  
    mongoose.set('strictQuery',false);

    const URL =`mongodb://${USERNAME}:${PASSWORD}@ac-nwrdaii-shard-00-00.isz8vdo.mongodb.net:27017,ac-nwrdaii-shard-00-01.isz8vdo.mongodb.net:27017,ac-nwrdaii-shard-00-02.isz8vdo.mongodb.net:27017/?ssl=true&replicaSet=atlas-uasw71-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(URL,{useNewUrlParser:true});
    mongoose.connection.on('connected', ()=>{
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', ()=>{
    console.log('Database disconnected');
})
    mongoose.connection.on('error',()=>{
        console.log('Error While connecting to database',error.message);
    })

}

export default Connection;
