import { Component, OnInit, Input} from '@angular/core';
import { QuestionsService } from './questions.service';
import {MatDialog} from '@angular/material/dialog';
import { ResultsDialogComponent } from './results-dialog/results-dialog.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{

  @Input() type: string;
  @Input() title: string;
  show = false;
  showGuesses = false;
  questions = [];
  guessedQuestions = [];
  constructor( public questionsService: QuestionsService, public dialog: MatDialog ) {}

  // dialog box opened when clicking an answer
  openDialog(question): void {
    const dialogRef = this.dialog.open(ResultsDialogComponent, {
      data: question
    });

    dialogRef.afterClosed().subscribe(result => {
      this.show = false;
      this.showGuesses = false;
      this.questionsService.score += result.totalScore;
    });
  }

  // gets the most recent questions & answers
  getAllQuestions() {
    this.questionsService.getAllQuestions();
  }

  // scores points, appends answer with timestamp and guesscount, opens dialog.
  scorePointsAndUpdate(question, answer) {
    this.questions = this.questionsService.questions;
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
    this.questionsService.questions = this.questions;
    this.show = true;
    this.showGuesses = true;
    this.openDialog({
      score: answer.score,
      guess_count: answer.guess_count,
      is_accepted: answer.is_accepted,
      totalScore : this.questionsService.score
    });
  }

  ngOnInit() {
    this.getAllQuestions();
  }
}

