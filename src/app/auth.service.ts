import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connectedUser: any;

  constructor(private http: HttpClient) {
    this.connectedUser = this.getConnectedUser();
  }

  loginUser(form) {
    return this.http.post<any>('http://localhost:3000/auth/login', form);
  }

  saveToken(token) {
    localStorage.setItem('token', token);
    this.connectedUser = this.getConnectedUser();
    console.log(this.connectedUser)
  }

  getConnectedUser() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      return jwt_decode(token);
    }
  }

  verifEmail(form) {
    return this.http.post('http://localhost:3000/auth/findemail', form);

  }

  register(form) {
    return this.http.post('http://localhost:3000/users/addUser', form);
  }


}
