const mongoose = require('mongoose')

const connDb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connection Success..!")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connDb;