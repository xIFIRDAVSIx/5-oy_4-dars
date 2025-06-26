const BookModel = require("../schema/book.schema")


const getAllBooks = async (req, res, next) => {
    try {
        const book = await BookModel.find()
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const addBook = async (req, res, next) => {
    try {
        const {
            title, year, genre, pageCount, language, description, author, isAudio, audioLengthMinutes
        } = req.body

        await BookModel.create({
            title, year, genre, pageCount, language, description, author, isAudio, audioLengthMinutes
        })

        res.status(201).json({
            message: "Added new book"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getOneBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const book = await BookModel.findById(id)

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            })
        }

        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const {
            title, year, genre, pageCount, language, description, author, isAudio, audioLengthMinutes
        } = req.body

        const book = await BookModel.findById(id)

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            })
        }

        await BookModel.findByIdAndUpdate(id, {title, year, genre, pageCount, language, description, author, isAudio, audioLengthMinutes})

        res.status(201).json({
            message: "Book updated"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const book = await BookModel.findById(id)

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            })
        }

        await BookModel.findByIdAndDelete(id)

        res.status(200).json({
            message: "Book deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    getAllBooks,
    addBook,
    getOneBook,
    updateBook,
    deleteBook
}