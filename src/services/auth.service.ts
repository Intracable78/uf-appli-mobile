import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly ROOT_URL: string;


  constructor(public firebaseAuth: AngularFireAuth, public http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }
  isLoggedIn: boolean = false;

  async signIn(data: Login): Promise<void> {
    const response = await this.http.post<Login>('http://localhost:3000/api/auth/login', data).toPromise();
    localStorage.setItem('data', JSON.stringify(response));
  }
  async signUp(data: Register): Promise<Register> {
    return this.http.post<Register>('http://localhost:3000/api/user/create', data).toPromise();
  }
  logout() {
    const logoutRequest = this.firebaseAuth.signOut();
    if (logoutRequest) {
      this.isLoggedIn = false;
    }
  }

  isLogged() {
    const token = localStorage.getItem('data');
    const tokenParsed = JSON.parse(token);
    if (tokenParsed)
      return true
    return false
  }
}
