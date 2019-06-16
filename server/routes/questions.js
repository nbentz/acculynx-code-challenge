const express = require('express');
const router = express.Router();
const {Question} = require('../models/Question');

router.patch("/update", async (req, res) => {
  console.log('made it into patch route!');
  console.log(req.body.question_id);
  try{
    const question = await Question.findOneAndUpdate({
      question_id: req.body.question_id
    }, {$set : req.body}, {upsert: true, new: true, useFindAndModify: false});
    if(!question) return res.status(404).send();
    res.send({question});
  } catch(e) {
    res.status(400).send();
  }
});

router.get("/test", (req, res) => {
  try {
    res.status(200).send({message : "test"})
  }catch(e) {
    console.log(e);
  }
});

module.exports = router;
