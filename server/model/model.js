const mongoose = require("mongoose")



const ATMmodel = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    pin :{
        type:String,
        required:true
    },
    AccNumber :{
        type:String,
        required:true
    },
    balance :{
        type:String,
        required:true
    },
})


module.exports = mongoose.model("ATM",ATMmodel)