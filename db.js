const mongoose = require('mongoose');

let url = 'mongodb://127.0.0.1:27017/hotels';

const connectDb = async ()=>{
    try{
        await mongoose.connect(url);
        console.log('connection successful');

    }catch(error){
        console.log('database connection failed')
        process.exit(0);
    }
};

module.exports = connectDb;
