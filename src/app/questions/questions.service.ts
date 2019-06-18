import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  constructor( private http: HttpClient) { }

  private baseUrl = 'https://localhost:3000/';
  public score = 0;
  public questions = [];
  public guessedQuestions = [];

  /* retrieves a list of questions from stackexchange api and a list of recently guessed questions from MongoDB db
  *  Each lists answers array gets shuffled.
  */
  public getAllQuestions() {
    const questionsResult = this.http.get<any>(
      `https://api.stackexchange.com/2.2/search/advanced?pagesize=10&order=desc&sort=creation&accepted=True&answers=2&site=stackoverflow&filter=!)rh-4Rv3X0MXqJcCydZX`
    );
    const guessedQuestionsResult = this.http.get<any>(`/questions/guessed`);
    forkJoin([questionsResult, guessedQuestionsResult]).subscribe( results => {
      this.questions = results[0].items;
      this.questions = this.shuffleNestedArrays(this.questions);
      // let qArr = results[0].items.$.questions;
      // qArr = this.shuffle(qArr);
      this.guessedQuestions = results[1];
      this.guessedQuestions = this.shuffleNestedArrays(this.guessedQuestions);
      this.updateLocalQuestions();
      return results;
    });
  }

  // updates a question with current question values.
  public updateQuestion(question) {
    return this.http.patch<any>(`/questions/update`, question).subscribe( data => {});
  }

  // updates local questions array with current question values.
  private updateLocalQuestions() {
    this.guessedQuestions.forEach( g => {
      this.questions.forEach(q => {
        if (q.question_id === g.question_id) {
          const index = this.questions.findIndex(x => x.question_id === g.question_id);
          this.questions[index] = g;
        }
      });
    });
    return;
  }

  // Shuffles child array in each parent array
  private shuffleNestedArrays(array) {
    array.forEach( (x, i) => {
      array[i].answers = this.shuffle(array[i].answers);
    });
    return array;
  }

  // shuffles items in array.
  private shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

}
