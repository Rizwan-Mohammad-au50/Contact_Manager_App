const { timeStamp } = require('console');
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: Number,
        required: true,
    },
    DOB:{
        type: String,
    },
    image:{
        type: String,
    },
},{timeStamps: true, collection: "contacts"})

const Contact = mongoose.model("contact_model",contactSchema);
module.exports = Contact;