import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  @Input() type: string;
  @Input() title: string;
  show = false;
  questions = [];
  guessedQuestions = [];
  subscription: Subscription;
  resultStyles = {
    "correct" : this.show,
    "incorrect" : !this.show
  };
  constructor( public questionsService: QuestionsService ) {}

  // gets the most recent questions & answers
  getAllQuestions() {
    this.questionsService.getAllQuestions();
  }

  // scores points, appends answer with timestamp and guesscount.
  scorePointsAndUpdate(question, answer) {
    this.questions = this.questionsService.questions;
    answer.is_accepted ? alert('Correct') : alert('Incorrect');
    !answer.guess_count ? answer.guess_count = 1 : answer.guess_count += 1;

    const indexAnswer = question.answers.findIndex(x => x.answer_id === answer.answer_id);
    question.answers[indexAnswer] = answer;
    question.timeStamp = new Date().getTime();

    const indexQuestion = this.questions.findIndex(x => x.question_id === question.question_id);
    this.questions[indexQuestion] = question;

    this.guessedQuestions = this.questionsService.guessedQuestions;
    const indexGuessedQuestion = this.guessedQuestions.findIndex( x => x.question_id === question.question_id);
    indexGuessedQuestion >= 0
      ? this.guessedQuestions[indexGuessedQuestion] = question
      : this.guessedQuestions = [question, ...this.guessedQuestions];

    this.questionsService.guessedQuestions = this.guessedQuestions;
    this.questionsService.updateQuestion(question);
  }

  private showAnswerAndGuesses() {
    this.show = true;

  }

  ngOnInit() {
    this.getAllQuestions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

