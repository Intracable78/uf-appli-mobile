import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ObjectService } from 'src/services/object.service';
import { Object } from '../../../models/object.model';
import { AuctionObject } from '../../../models/auction-object';
import { AuctionObjectService } from 'src/services/auction-object.service';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.scss'],
})
export class ObjectDetailComponent implements OnInit {
  object: Object;
  auctionObject: AuctionObject;
  showInputAuction: boolean = false;
  auctionObjectForm: FormGroup;
  error: string;

  submitted: boolean = false;
  constructor(
    private objectService: ObjectService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private auctionObjectService: AuctionObjectService,
    private userService: UserService) {
  }
  ngOnInit() {
    let objectId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadObject(objectId);
    this.auctionObjectForm = this.fb.group({
      price: ['', [Validators.required]]
    },
      { updateOn: 'change' });
  }

  get f() { return this.auctionObjectForm.controls; }

  async createAuctionObject() {
    this.submitted = true;

    if (this.auctionObjectForm.invalid) {
      return;
    }
    if (this.auctionObjectForm.value.price <= this.object.priceStart) {
      this.error = 'The auction can not be less of the price of the object';
      return;
    }
    try {

      this.auctionObject = {
        object: this.object,
        user: this.userService.getUserData(),
        auction_price: this.auctionObjectForm.value.price,
        auction_date: new Date(),
      }

      console.log(this.auctionObject)

      await this.auctionObjectService.updateAuctionobjectById(this.object.id, this.auctionObject);
      this.loadObject(this.object.id,);
      // this.showHelloToast();
      // this.router.navigate(['/admin/object']);
    } catch (err) {
      console.log(err)
    }
  }

  async loadObject(id: string) {
    this.object = await this.objectService.getObjectById(id);
    console.log(this.object);
  }
}
