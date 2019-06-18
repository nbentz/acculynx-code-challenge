import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ResultsDialogComponent } from './results-dialog/results-dialog.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  @Input() type: string;
  @Input() title: string;
  show = false;
  showGuesses = false;
  questions = [];
  guessedQuestions = [];
  subscription: Subscription;
  selectedRow: number;

  constructor( public questionsService: QuestionsService, public dialog: MatDialog ) {}

  // dialog box opened when clicking an answer
  openDialog(question): void {
    const dialogRef = this.dialog.open(ResultsDialogComponent, {
      data: {
        score: question.score,
        is_accepted: question.is_accepted,
        guess_count: question.guess_count
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.show = false;
      this.showGuesses = false;
    });
  }

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
    this.show = true;
    this.showGuesses = true;
    this.openDialog({
      score: answer.score,
      guess_count: answer.guess_count,
      is_accepted: answer.is_accepted
    });
  }


  public getGuessedQuestions() {
    this.questionsService.getGuessedQuestionsFromAPI();
  }

  ngOnInit() {
    //this.getAllQuestions();
    this.getGuessedQuestions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

