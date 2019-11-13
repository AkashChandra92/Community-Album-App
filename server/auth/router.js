const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const User = require("../user/model")
const router = new Router();
const bcrypt = require("bcrypt")
const auth = require("./middleware")

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email && !password) {
    res.status(400).send({
      message: "Please supply a valid email and password"
    });
  } else {
    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (!user) {
          res.status(404).send({
            message: "No user found muahahahahah(evil)"
          });
        } else if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            jwt: toJWT({ userId: user.id })
          });
        } else {
          res.status(400).send({
            message: "Password is very wrong.Incorrect. You're a failure."
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          message: "Something went terrible.Very wrong."
        });
      });
  }
});

router.get('/secret-endpoint', auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
  })
})
module.exports = router;

// router.post(
//   '/image',
//   auth,
//   (request, response, next) => {
//     ...
//   }