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
  questions = [];
  guessedQuestions = [];
  subscription: Subscription;

  constructor( public questionsService: QuestionsService ) { }

  // gets the most recent questions & answers
  onSubmitRecentQuestions() {
    this.questionsService.getQuestionsFromAPI();
  }


  // scores points, appends answer with timestamp and guesscount.
  scorePointsAndUpdate(question, answer) {
    console.warn('scorePointsAndUpdate executed');
    this.questions = this.questionsService.getQuestions();
    answer.is_accepted ? alert('Correct') : alert('Incorrect');
    !answer.guess_count ? answer.guess_count = 1 : answer.guess_count += 1;

    console.log(answer.guess_count);

    const indexAnswer = question.answers.findIndex(x => x.answer_id === answer.answer_id);
    question.answers[indexAnswer] = answer;
    question.timeStamp = new Date().getTime();

    const indexQuestion = this.questions.findIndex(x => x.question_id === question.question_id);
    this.questions[indexQuestion] = question;

    const indexGuessedQuestion = this.guessedQuestions.findIndex( x => x.question_id === question.question_id);
    indexGuessedQuestion >= 0
      ? this.guessedQuestions[indexGuessedQuestion] = question
      : this.guessedQuestions = [...this.guessedQuestions, question];

    console.log(this.guessedQuestions);
    this.questionsService.setGuessedQuestions(this.guessedQuestions);
    console.log(question);
    this.questionsService.updateQuestion(question);

  }

  ngOnInit() {

    if ( this.type === 'normal') {
      this.onSubmitRecentQuestions();
    } else if ( this.type === 'guess') {
      // Todo: Create method to return recently guessed questions.
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

