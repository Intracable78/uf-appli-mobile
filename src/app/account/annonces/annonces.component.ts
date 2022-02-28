import { Component, OnInit } from '@angular/core';
import { ObjectService } from 'src/services/object.service';
import { Object } from '../../../models/object.model';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss'],
})
export class AnnoncesComponent implements OnInit {
  userObjects: Object[] = [];
  constructor(private objectService: ObjectService) { }

  ngOnInit() {
    this.getObjectByUserId(8);
  }
  async getObjectByUserId(userId: number) {
    this.userObjects = await this.objectService.getObjectByUserId(userId)
  }
  async deleteObject(object: Object) {
    await this.objectService.deleteObject(object.id)
  }
}
