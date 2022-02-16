import { Component, OnInit } from '@angular/core';
import { ObjectService } from 'src/services/object.service';
import { Object } from '../../../models/object.model';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
})
export class ObjectListComponent implements OnInit {
  objects: Object[] = [];

  constructor(
    private objectService: ObjectService

  ) { }

  ngOnInit() {

    this.getObjects();
  }

  async getObjects() {
    this.objects = await this.objectService.getObjects();
    console.log(this.objects)
  }

}
