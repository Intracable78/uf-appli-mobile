import { Component, OnInit } from '@angular/core';
import { ObjectService } from 'src/services/object.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  countUserObject: number;

  constructor(
    private objectService: ObjectService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getObjectByUserId(this.userService.getUserData().id);
  }
  async getObjectByUserId(userId: number) {
    this.countUserObject = (await this.objectService.getObjectByUserId(userId)).length
    console.log(this.countUserObject)
  }
}
