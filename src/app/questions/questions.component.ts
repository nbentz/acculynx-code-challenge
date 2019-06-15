import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  questions = [];
  guessedQuestions = [];

  constructor( private questionsService: QuestionsService ) { }

  // gets the most recent questions & answers
  onSubmitRecentQuestions() {
    this.questionsService.getQuestions().subscribe( data => {
      this.questions = data.items;
    });
  }


  // scores points, appends answer with timestamp and guesscount.
  scorePointsAndUpdate(question, answer) {
    if (answer.is_accepted) {
      // modal Thats correct, score, etc.
      alert("Correct");
    } else {
      // modal incorrect, score, etc.
      alert("incorrect");
    }
    if (!answer.guess_count) {
      answer.guess_count = 1;
    } else {
      answer.guess_count += 1;
    }
    answer.timeStamp = new Date().getTime();
    const indexAnswer = question.answers.findIndex(x => x.answer_id === answer.answer_id);
    question.answers[indexAnswer] = answer;

    // this part may not be needed. Maybe for the frontend.
    const indexQuestion = this.questions.findIndex(x => x.question_id === question.question_id);
    this.questions[indexQuestion] = question;
    console.log(this.questions);

    // push object to database, update score if exists.

  }

  ngOnInit() {
    if ( this.type === 'normal') {
      this.onSubmitRecentQuestions();
    } else if ( this.type === 'guess') {
      // Todo: Create method to return recently guessed questions.
    }
  }
}

