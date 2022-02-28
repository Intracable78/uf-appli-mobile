import { Component, OnInit } from '@angular/core';
import { AuctionObjectService } from 'src/services/auction-object.service';
import { ObjectService } from 'src/services/object.service';
import { Object } from '../../../models/object.model';
import { AuctionObject } from 'src/models/auction-object';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
})
export class ObjectListComponent {
  objects: Object[] = [];
  auctionObjects: AuctionObject[] = [];

  constructor(
    private objectService: ObjectService,
    private auctionObjectService: AuctionObjectService

  ) { }

  ionViewWillEnter(): void {
    this.getObjects();
    this.getAuctionObject();
  }


  async getObjects() {
    this.objects = await this.objectService.getObjects();
    console.log(this.objects)
  }

  async getAuctionObject() {
    this.auctionObjects = await this.auctionObjectService.getAllAuctionObject();
  }
}
