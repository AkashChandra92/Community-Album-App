const {Router} = require("express")
const db = require("../db")
const User = require("./model")
const bcrypt = require("bcrypt")

const router = new Router()

router.post("/signup", (req,res) => {
    console.log("Inside post signup")
    const user = {
        email: req.body.email,
        password : bcrypt.hashSync(req.body.password, 10)
    }
    User.create(user)
    .then(user => {
        if(!user){
            res.status(404).end()
        }
        return res.json(user)
    })
})

router.get("/user", (req, res, next) => {
    User.findAll()
      .then(user => {
        return res.send(user);
      })
      .catch(next);
  });


module.exports = router