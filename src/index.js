import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import userRouter from "./routes/users.routes.js"

import cookieParser from "cookie-parser"
import { connectDb } from "./db/index.js"
import { app } from "./app.js"

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("./public/temp"))
app.use(cookieParser())
// db configuration
connectDb().then(() => app.listen(process.env.PORT || 8000, () => {
    console.log("listening on port " + process.env.PORT)
})).catch((err) => {
    console.error(err, "server  not connnected")
})

app.use(userRouter)
