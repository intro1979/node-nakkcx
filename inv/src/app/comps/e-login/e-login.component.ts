import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar.service';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-e-login',
  templateUrl: './e-login.component.html',
  styleUrls: ['./e-login.component.scss']
})
export class ELoginComponent implements OnInit {


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authService
      .login(email, password)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
