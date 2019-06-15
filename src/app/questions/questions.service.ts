import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor( private http: HttpClient) { }

  public getQuestions() {
    return this.http.get<any>(
      `https://api.stackexchange.com/2.2/search/advanced?pagesize=10&order=desc&sort=creation&accepted=True&answers=2&site=stackoverflow&filter=!)rh-4Rv3X0MXqJcCydZX`
    );
  }

}
