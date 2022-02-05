import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

interface ApiError {
  code: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  submitted = false;

  error: string;


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    }, { updateOn: 'change' });
  }

  get f() { return this.loginForm.controls; }

  async signIn() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    try {
      await this.authService.signIn(this.loginForm.value);
    } catch (err) {
      this.getError(err)
    }

  }

  getError(error: ApiError): void {
    if (error.code === "auth/user-not-found") {
      this.error = "User not found"
    }

    if (error.code === "auth/wrong-password") {
      this.error = "Wrong password"
    }
  }

}
