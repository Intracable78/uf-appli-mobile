import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObjectService } from 'src/services/object.service';
import { Toast } from '@capacitor/toast';
import { UserService } from '../../../services/user.service';
import { Object } from '../../../models/object.model';
import { AuctionObjectService } from '../../../services/auction-object.service';
import { AuctionObject } from '../../../models/auction-object';

@Component({
  selector: 'app-create-object',
  templateUrl: './create-object.component.html',
  styleUrls: ['./create-object.component.scss'],
})
export class CreateObjectComponent implements OnInit {

  objectForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private objectService: ObjectService,
    private router: Router,
    private userService: UserService,
    private auctionObjectService: AuctionObjectService,
  ) { }

  ngOnInit(): void {
    this.objectForm = this.fb.group({
      name: ['', Validators.required],
      dateEnd: ['', Validators.required],
      priceStart: ['', Validators.required],
    },
      { updateOn: 'change' });
  }

  get f() { return this.objectForm.controls; }

  async createObject() {
    this.submitted = true;

    if (this.objectForm.invalid) {
      return;
    }
    try {
      const newObject: Object = {
        name: this.objectForm.value.name,
        dateEnd: this.objectForm.value.dateEnd,
        priceStart: this.objectForm.value.priceStart,
        user: this.userService.getUserData(),
      }

      const auctionObject: AuctionObject = {
        object: newObject,
        user: this.userService.getUserData(),
        auction_price: this.objectForm.value.priceStart,
        auction_date: new Date()
      }
      console.log(newObject)
      await this.objectService.createObject(newObject);
      //await this.auctionObjectService.createAuctionObject(auctionObject);
      this.showHelloToast();
      // this.router.navigate(['/admin/object']);
    } catch (err) {
      console.log(err)
    }
  }

  async showHelloToast() {
    await Toast.show({
      text: 'Object has been created',
    });
  };
}
