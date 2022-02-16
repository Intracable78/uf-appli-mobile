import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ObjectService } from 'src/services/object.service';
import { Object } from '../../../models/object.model';
@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.scss'],
})
export class ObjectDetailComponent implements OnInit {
  object: Object;
  showInputAuction: boolean = false;

  constructor(private objectService: ObjectService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    let objectId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadObject(objectId);
  }

  async loadObject(id: string) {
    this.object = await this.objectService.getObjectById(id);
    console.log(this.object);
  }

  showInput() {
    console.log(this.showInputAuction);
  }

}
