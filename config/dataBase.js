const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/library", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("connect to mongoDB")
        ).catch((err) => console.log(err.message))
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = connectDB