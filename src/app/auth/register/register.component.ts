import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
interface ApiError {
  code: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})


export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  submitted: boolean = false;

  error: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      birthDate: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required]


    }, { updateOn: 'change' });
  }

  get f() { return this.registerForm.controls; }

  async signUp() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    try {
      await this.authService.signUp(this.registerForm.value);
      this.router.navigate(['/']);
    } catch (err) {
      this.getError(err)
    }
  }

  getError(error: ApiError) {
    this.error = "";
    if (error.code === "auth/email-already-in-use") {
      this.error = "User is already in use"
    }

    if (error.code === "auth/weak-password") {
      this.error = "Password is too short"
    }
  }

}
