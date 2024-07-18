const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
        unique:true
    }
})

const menuItem = mongoose.model('menuItem',menuItemSchema);
module.exports = menuItem;