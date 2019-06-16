import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

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

  public getAllQuestions() {
    const questionsResult = this.http.get<any>(
      `https://api.stackexchange.com/2.2/search/advanced?pagesize=10&order=desc&sort=creation&accepted=True&answers=2&site=stackoverflow&filter=!)rh-4Rv3X0MXqJcCydZX`
    );
    const guessedQuestionsResult = this.http.get<any>(`/questions/guessed`);
    forkJoin([questionsResult, guessedQuestionsResult]).subscribe( results => {
      this.questions = results[0].items;
      this.guessedQuestions = results[1];
      console.log(this.questions);
      console.log(this.guessedQuestions);
      this.updateLocalQuestions();
      return results;
    });
  }
    public getGuessedQuestionsFromAPI() {
      return this.http.get<any>(`/questions/guessed`).subscribe( data => {
        this.guessedQuestions = data;
        return this.guessedQuestions;
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


  public updateQuestion(question) {
    return this.http.patch<any>(`/questions/update`, question).subscribe( data => {
      console.log('Updated Question');
      console.log(data);
    });
  }

  public updateLocalQuestions() {
    this.guessedQuestions.forEach( g => {
      this.questions.forEach(q => {
        if (q.question_id === g.question_id) {
          let index = this.questions.findIndex(x => x.question_id === g.question_id)
          this.questions[index] = g
        }
      });
    });
    return;
  }

}
