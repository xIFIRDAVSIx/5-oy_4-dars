const AuthorModel = require("../schema/author.schema")

const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await AuthorModel.find()
        res.status(200).json(authors)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const addAuthor = async (req, res, next) => {
    try {
        const {
            fullName, dateOfBirth, dateOfDeath, countOfBooks, countOfAudioBooks, period, bio, creativity, region
        } = req.body

        await AuthorModel.create({
            fullName, dateOfBirth, dateOfDeath, countOfBooks, countOfAudioBooks, period, bio, creativity, region
        })

        res.status(201).json({
            message: "Added new author"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getOneAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const author = await AuthorModel.findById(id)

        if (!author) {
            return res.status(404).json({
                message: "Author not found"
            })
        }

        res.status(200).json(author)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const updateAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const {
            fullName, dateOfBirth, dateOfDeath, countOfBooks, countOfAudioBooks, period, bio, creativity, region
        } = req.body

        const author = await AuthorModel.findById(id)

        if (!author) {
            return res.status(404).json({
                message: "Author not found"
            })
        }

        await AuthorModel.findByIdAndUpdate(id, {fullName, dateOfBirth, dateOfDeath, countOfBooks, countOfAudioBooks, period, bio, creativity, region})

        res.status(201).json({
            message: "Author updated"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const author = await AuthorModel.findById(id)

        if (!author) {
            return res.status(404).json({
                message: "Author not found"
            })
        }

        await AuthorModel.findByIdAndDelete(id)

        res.status(200).json({
            message: "Author deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    getAllAuthors,
    addAuthor,
    getOneAuthor,
    updateAuthor,
    deleteAuthor
}