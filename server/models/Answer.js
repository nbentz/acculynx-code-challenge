const mongoose = require('mongoose');

let AnswerSchema = new mongoose.Schema({
  up_vote_count: {
    type: Number,
    required: false
  },
  is_accepted: {
    type: Boolean,
    required: true
  },
  score : {
    type: Number,
    required: true
  },
  last_activity_date: {
    type: Number,
    required: false
  },
  last_edit_date: {
    type: Number,
    required: false
  },
  answer_id : {
    type: Number,
    required: true
  },
  question_id: {
    type: Number,
    required: true
  },
  body_markdown: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

let Answer = mongoose.model("Answer", AnswerSchema);
module.exports = {Answer};
