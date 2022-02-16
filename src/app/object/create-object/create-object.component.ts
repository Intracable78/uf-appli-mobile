import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObjectService } from 'src/services/object.service';
import { Toast } from '@capacitor/toast';

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
      await this.objectService.createObject(this.objectForm.value);
      this.showHelloToast();
      // this.router.navigate(['/admin/object']);
    } catch (err) {
      console.log(err)
    }
  }

  async showHelloToast() {
    await Toast.show({
      text: 'Hello!',
    });
  };
}
