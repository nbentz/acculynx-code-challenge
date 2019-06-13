import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor( private http: HttpClient) { }
  private baseUrl = 'https://api.stackexchange.com/';

  public getQuestions(page: string) {
    return this.http.get<any>(`${this.baseUrl}/2.2/questions?page=${page}&pagesize=100&order=desc&sort=creation&site=stackoverflow`);
  }
}
