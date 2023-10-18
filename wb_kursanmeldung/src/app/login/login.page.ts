import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onLogin(): void {
    console.log(this.loginForm.value);
  }
}
