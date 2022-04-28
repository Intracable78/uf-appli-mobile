import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectSold } from '../models/object-sold';

@Injectable({
    providedIn: 'root'
})
export class ObjectSoldService {

    ROOT_URL: string;

    constructor(public http: HttpClient) {
        this.ROOT_URL = 'http://localhost:3000/api/';
    }
    async getObjectSoldByUserId(id: string) {
        return await this.http.get<ObjectSold[]>(this.ROOT_URL + `objectSold/${id}`).toPromise();
    }


}