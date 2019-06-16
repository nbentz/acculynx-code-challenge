const express = require('express');
const router = express.Router();
const {Question} = require('../models/Question');

router.patch("/update", async (req, res) => {
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

router.get("/guessed", async (req, res) => {
  try{
    const guessedQuestions = await Question.find().sort('-timeStamp').limit(10).exec();
    if(!guessedQuestions) return res.status(404).send({error});
    res.status(200).send(guessedQuestions);
  }catch(e){
    res.status(400).send();
  }
});

module.exports = router;
