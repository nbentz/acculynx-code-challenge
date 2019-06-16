const mongoose = require('mongoose');
const {answer} = require('./Answer');

let QuestionSchema = new mongoose.Schema({
  answers: {
    type: [answer],
    required: true
  },
  is_answered: {
    type: Boolean,
    required: true
  },
  view_count: {
    type: Number,
    required: true
  },
  accepted_answer_id: {
    type: Number,
    required: true
  },
  answer_count: {
    type: Number,
    required: true
  },
  score : {
    type: Number,
    required: true
  },
  last_activity_date : {
    type: Number,
    required: true
  },
  create_date : {
    type: Number,
    required: true
  },
  question_id : {
    type: Number,
    required: true
  },
  body_markdown : {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

let Question = mongoose.model("Question", QuestionSchema);
module.exports = {Question}
