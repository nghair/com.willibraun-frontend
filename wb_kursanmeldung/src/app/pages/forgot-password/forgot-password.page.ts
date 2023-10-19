import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email = this.fb.control('');

  /* todo: forgot password service. waiting for api and swagger */
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  sendForgotPasswordMail() {
    console.log(this.email.value);
  }
}
