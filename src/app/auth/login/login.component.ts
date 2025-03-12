import { Component, Optional, SkipSelf } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, @SkipSelf() @Optional() private appService: AppService) {}

  loginForm = new FormGroup({
    email: new FormControl<string>('', { updateOn: 'change', validators: [Validators.required, Validators.email] }),
    password: new FormControl<string>('', {
      updateOn: 'change',
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  onSubmit() {
    if (this.loginForm.invalid) return console.log('Invalid form');
    console.log(this.loginForm.value);
    this.appService.setName = this.loginForm.value.email as string;
    this.router.navigate(['/table']);
  }
}
