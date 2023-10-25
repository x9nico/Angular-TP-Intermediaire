import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get controls() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      console.log('error', this.loginForm);
      return;
    }

    this.authService
      .login(this.controls['username'].value, this.controls['password'].value)
      .subscribe((login) => {
        console.log('connexion OK');
        this.router.navigate(['player']);
      });
  }
}
