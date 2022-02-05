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
    const signInRequest = await this.firebaseAuth.signInWithEmailAndPassword(data.email, data.password);
    if (signInRequest) {
      this.isLoggedIn = true;
      console.log("logged")
      localStorage.setItem('user', JSON.stringify(signInRequest.user));

    }
  }
  async signUp(data: Register): Promise<void> {
    const signUpRequest = await this.firebaseAuth.createUserWithEmailAndPassword(data.email, data.password);
    if (signUpRequest) {
      this.isLoggedIn = true;
      console.log(signUpRequest)
      data.firebaseId = signUpRequest.user.uid;
      this.signUpDatabase(data);
    }
  }
  signUpDatabase(data: Register): Promise<Register> {
    return this.http.post<Register>('http://localhost:3000/api/user/create', data).toPromise();
  }

  async logout() {
    const logoutRequest = this.firebaseAuth.signOut();
    if (logoutRequest) {
      this.isLoggedIn = false;
    }
  }
}
