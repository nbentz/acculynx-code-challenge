import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-results-dialog',
  templateUrl: './results-dialog.component.html',
  styleUrls: ['./results-dialog.component.css']
})
export class ResultsDialogComponent implements OnInit {
  public title: string;
  public score: number;
  public correctScore: string;
  public guessScore: string;
  public scoreScore: string;
  constructor( public dialogRef: MatDialogRef<ResultsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  formatData() {
    let score = 0;
    let correctScore = '';
    let guessScore = '';
    let scoreScore = '';
    this.data.is_accepted ? this.title = 'Correct' : this.title = 'Incorrect';
    if (this.data.is_accepted) {
      this.title = 'Correct';
      score += 5;
      correctScore = '+5';
    } else {
      this.title = 'Incorrect';
      score -= 10;
      correctScore = '-10';
    }
    if (this.data.score < 0) {
      score--;
      scoreScore = '-1';
    } else if (this.data.score > 0 && this.data.score < 10) {
      score++;
      scoreScore = '+1';
    } else {
      score += 5;
      scoreScore = '+5';
    }

    if (this.data.guess_count < 5) {
      score += 1;
      guessScore = '+1';
    } else if (this.data.guess_count >= 5 && this.data.guess_count < 10) {
      score += 2;
      guessScore = '+2';
    } else {
      score += 5;
      guessScore = '+5';
    }
    this.score = score;
    this.correctScore = correctScore;
    this.scoreScore = scoreScore;
    this.guessScore = guessScore;
  }

  ngOnInit() {
    this.formatData();
  }

}
