import { Component, OnInit } from '@angular/core';
import { ObjectService } from 'src/services/object.service';
import { Object } from '../../../models/object.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss'],
})
export class AnnoncesComponent implements OnInit {

  userObjects: Object[] = [];
  constructor(
    private objectService: ObjectService,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.getObjectByUserId(this.userService.getUserData().id);
  }
  async getObjectByUserId(userId: number) {
    console.log(userId);
    this.userObjects = await this.objectService.getObjectByUserId(userId)
  }
  async deleteObject(object: Object) {
    await this.objectService.deleteObject(object.id);
    this.getObjectByUserId(this.userService.getUserData().id);
  }
}
