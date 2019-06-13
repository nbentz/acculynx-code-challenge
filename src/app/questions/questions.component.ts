import { Component, OnInit, Input } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
