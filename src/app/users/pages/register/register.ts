import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apiservice } from '../../../services/apiservice';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {

  registerForm!: FormGroup;

  api = inject(Apiservice);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    });
  }

  register() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;

      this.api.registerAPI({ username, email, password }).subscribe({
        next: (res: any) => {
          alert(`Welcome ${res.username}, Login to explore our recipes!!!`);
          this.router.navigateByUrl('/login');
          this.registerForm.reset();
        },
        error: (err: any) => {
          alert(err.error);
        }
      });
    } else {
      alert('Invalid Form');
    }
  }
}
