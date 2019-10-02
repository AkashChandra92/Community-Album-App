const express = require("express");
const image= require("./image/model")
const db = require("./db")
const app = express();

const port = process.env.PORT || 3000

app.get("/" ,(req,res) => {
    res.send("Hi Akash")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

