import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  constructor( private http: HttpClient) { }

  private baseUrl = 'https://localhost:3000/';
  public questions = [];
  public guessedQuestions = [];

  public getQuestionsFromAPI() {
    return this.http.get<any>(
      `https://api.stackexchange.com/2.2/search/advanced?pagesize=10&order=desc&sort=creation&accepted=True&answers=2&site=stackoverflow&filter=!)rh-4Rv3X0MXqJcCydZX`
    ).subscribe(data => {
      this.questions = data.items;
      return this.questions;
    });
  }

  public getQuestions() {
    return this.questions;
  }

  public getGuessedQuestions() {
    return this.guessedQuestions;
  }

  public setGuessedQuestions(guessedQuestions) {
    this.guessedQuestions = guessedQuestions;
  }

  public getGuessedQuestionsFromfAPI() {
    return this.http.get<any>(`${this.baseUrl}questions/guessed`).subscribe( data => {
      this.guessedQuestions = data;
    });
  }

  public updateQuestion(question) {
    return this.http.patch<any>(`/questions/update`, question).subscribe( data => {
      console.warn(`Update question: ${data}`);
    });
  }


}
