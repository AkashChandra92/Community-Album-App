const express = require("express");
const image= require("./image/model")
const db = require("./db")
const imageRouter = require("./image/router")
const cors = require('cors')
const bodyParser = require("body-parser")
const authRouter = require("./auth/router")
const userRouter = require("./user/router")

const port = process.env.PORT || 3000

const app = express();
const corsMiddleware = cors()
const parserMiddleware = bodyParser.json()

app.use(parserMiddleware)
app.use(imageRouter)
app.use(corsMiddleware)
app.use(authRouter)
app.use(userRouter)


app.get("/" ,(req,res) => {
    res.send("Hi Akash")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

