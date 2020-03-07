import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestion() {
    return this.http.get<any>('http://localhost:3000/question/getAllQuestion');
  }

  score(id, form) {
    return this.http.post<any>('http://localhost:3000/user/reponse/' + id, form);
  }
}
