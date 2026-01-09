import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Apiservice } from '../../../services/apiservice';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  loginForm!: FormGroup;

  api = inject(Apiservice);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.api.loginAPI({ email, password }).subscribe({
        next: (res: any) => {
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('existingUser', JSON.stringify(res.user));
          alert('Login successful');

          res.user.role === 'user'
            ? this.router.navigateByUrl('/')
            : this.router.navigateByUrl('/admin');

          this.loginForm.reset();
        },
        error: (err: any) => {
          alert(err.error);
        }
      });
    } else {
      alert('Invalid form');
    }
  }
}
