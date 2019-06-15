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


  constructor( private questionsService: QuestionsService ) { }

  //gets the most recent questions
  onSubmitRecentQuestions() {
    this.questionsService.getQuestions().subscribe( data => {
      this.questions = data.items;
    });
  }

  ngOnInit() {
    if ( this.type === 'normal') {
      this.onSubmitRecentQuestions();
    } else if ( this.type === 'guess') {
      // Todo: Create method to return recently guessed questions.
    }
  }
}

