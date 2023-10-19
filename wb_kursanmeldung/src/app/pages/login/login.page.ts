import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = this.fb.group({
    username: '',
    password: '',
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onLogin(): void {
    console.log(this.loginForm.value);
    // todo: open login
    // this.authService.login(
    //   this.loginForm.get('username')?.value || '',
    //   this.loginForm.get('password')?.value || ''
    // );
    this.router.navigate(['client']);
  }
}
