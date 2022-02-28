import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Object } from '../models/object.model';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  readonly ROOT_URL: string;

  constructor(private httpClient: HttpClient) {

    this.ROOT_URL = 'http://localhost:3000/api/';

  }

  async getObjects(): Promise<Object[]> {
    return await this.httpClient.get<Object[]>(this.ROOT_URL + 'object').toPromise();
  }

  async getObjectById(id: string): Promise<Object> {
    return await this.httpClient.get<Object>(this.ROOT_URL + 'object/' + id).toPromise();
  }

  async deleteObject(id: string): Promise<Object> {
    return await this.httpClient.delete<Object>(this.ROOT_URL + 'object/' + id).toPromise();
  }

  async createObject(object: Object): Promise<Object> {
    console.log(object);
    return await this.httpClient.post<Object>(this.ROOT_URL + 'object/create', object).toPromise();
  }

  async updateObject(id: string, object: Object): Promise<Object> {
    return await this.httpClient.patch<Object>(this.ROOT_URL + 'object/update/' + id, object).toPromise();
  }

  async getObjectByUserId(id: number) {
    return await this.httpClient.get<Object[]>(this.ROOT_URL + 'object/user/' + id).toPromise();

  }


}
