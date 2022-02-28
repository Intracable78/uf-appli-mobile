import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { ObjectService } from 'src/services/object.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  userObject: Object;

  constructor(
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.getUser(8);

  }

  async getUser(id: number) {
    this.currentUser = await this.userService.getUserById(id)
    console.log(this.currentUser);
  }



}
