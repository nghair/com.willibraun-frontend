import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { controlMatchValidator } from 'src/app/shared/control-match-validator.directive';
import { passwordValidator } from 'src/app/shared/password-validator.directive';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  /* todo: validation */
  /* todo: api call */

  resetPasswordForm = new FormGroup(
    {
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        // passwordValidator(),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        // passwordValidator(),
      ]),
    },
    { validators: controlMatchValidator('password', 'passwordConfirm') }
  );

  constructor() {}

  ngOnInit() {}

  resetPassword() {
    console.log(this.resetPasswordForm.value);
  }

  getMatchErrorText(): string {
    if (this.resetPasswordForm.errors?.['noMatch']) {
      return 'Passwörter stimmen nicht überein.';
    }
    return '';
  }
}
