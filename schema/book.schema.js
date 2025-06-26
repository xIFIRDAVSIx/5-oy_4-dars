const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isAudio: {
        type: Boolean,
        default: false
    },
    audioLengthMinutes: {
        type: Number,
        default: 0
    }
}, {
    versionKey: false,
    timestamps: true
});

const BookModel = mongoose.model("Book", BookSchema)
module.exports = BookModel