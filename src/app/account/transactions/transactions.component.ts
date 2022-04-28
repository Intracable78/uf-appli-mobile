import { Component, OnInit } from '@angular/core';
import { ObjectSold } from '../../../models/object-sold';
import { ObjectSoldService } from '../../../services/object-sold.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {

  objectsSold: ObjectSold[] = [];

  constructor(private objectSoldService: ObjectSoldService, private userService: UserService) { }

  ngOnInit() {
    this.getObjectSold(this.userService.getUserData().id);
  }

  async getObjectSold(id: string) {
    this.objectsSold = await this.objectSoldService.getObjectSoldByUserId(id);

  }

}
