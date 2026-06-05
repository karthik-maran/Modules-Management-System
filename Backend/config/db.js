const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb database is connected")
    } catch (error) {
        console.error("Mongodb Connection Error:"+error.message);
        
    }
};
module.exports = connectDB;