import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  constructor( private http: HttpClient) { }

  private questions = [];

  public getQuestionsFromAPI() {
    return this.http.get<any>(
      `https://api.stackexchange.com/2.2/search/advanced?pagesize=10&order=desc&sort=creation&accepted=True&answers=2&site=stackoverflow&filter=!)rh-4Rv3X0MXqJcCydZX`
    ).subscribe( data => {
      this.questions = data.items;
      return this.questions;
    });
  }

  public getQuestions() {
    return this.questions;
  }

  public setQuestions( questions ) {
    this.questions = questions;
  }

  public getGuessedQuestions() {
    return null;
  }

}
