const express = require("express")
const cors = require("cors")
const authorRouter = require("./router/auhtor.routes")
const bookRouter = require("./router/book.routes")
const connectDB = require("./config/dataBase")
require("dotenv").config()

const app = express()
app.use(cors({credentials: true}))
app.use(express.json())
const PORT = process.env.PORT || 3001

app.use(authorRouter)
app.use(bookRouter)

connectDB()

app.listen(PORT, () => {
    console.log("server running at: " + PORT);
})