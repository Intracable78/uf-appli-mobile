import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuctionObject } from '../models/auction-object';

@Injectable({
  providedIn: 'root'
})
export class AuctionObjectService {

  ROOT_URL: string;

  constructor(public http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000/api/';
  }

  async createAuctionObject(object: AuctionObject) {
  
    return await this.http.post(this.ROOT_URL + 'auction-object/create', object).toPromise();
  }

  async getAllAuctionObject() {
    return await this.http.get<AuctionObject[]>(this.ROOT_URL + 'auction-object').toPromise();
  }

  async getAuctionObjectById(id: string) {
    return await this.http.get<AuctionObject>(this.ROOT_URL + `auction-object/${id}`).toPromise();
  }
  async updateAuctionobjectById(id: string, data: AuctionObject) {
    return await this.http.patch<AuctionObject>(this.ROOT_URL + `auction-object/${id}`, data).toPromise();
  }
}
