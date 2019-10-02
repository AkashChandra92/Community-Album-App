const express = require("express");
const Image = require("./model");
const { Router } = require("express");
const router = new Router();


router.get("/", (req, res, next) => {
  res.send("test");
});

router.get("/image", (req, res, next) => {
  Image.findAll()
    .then(image => {
      return res.send(image);
    })
    .catch(next);
});

router.post("/image", (req,res,next) => {
    Image.create(req.body)
    .then(image => res.json(image))
    .catch(next)
})

module.exports = router;