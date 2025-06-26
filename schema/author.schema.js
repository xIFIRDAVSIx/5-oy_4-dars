const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    dateOfDeath: {
        type: Date,
        required: true
    },
    countOfBooks: {
        type: Number,
        required: false,
        default: 0
    },
    countOfAudiBooks: {
        type: Number,
        required: false,
        default: 0
    },
    period: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    creativity: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    }
},
{
    versionKey: false,
    timestamps: true
})

const AuthorModel = mongoose.model("Author", AuthorSchema)
module.exports = AuthorModel