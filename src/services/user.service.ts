import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly ROOT_URL: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.ROOT_URL + 'user');
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.ROOT_URL + 'user/delete/' + id)
  }

  updateUser(id: number, data: User): Promise<User> {
    return this.http.patch<User>(this.ROOT_URL + 'user/update/' + id, data).toPromise();
  }

  async getUserById(id: number): Promise<User> {
    return await this.http.get<User>(this.ROOT_URL + 'user/' + id).toPromise();
  }
}