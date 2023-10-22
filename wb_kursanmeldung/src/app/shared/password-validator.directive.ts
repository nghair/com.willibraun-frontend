import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

/* RULES */
// at least 6 symbols
// at least 1 uppercase or lowercase letter
// at least 1 number
// symbols allowed:

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    let result = {};

    const lowercase: RegExp = /([a-z])+/g;
    const uppercase: RegExp = /([A-Z])+/g;
    const number: RegExp = /([0-9])+/g;
    const symbols =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?=+-_.,#§$%&/()';

    if (value.length >= 6) {
      result = { ...result, minLengh: true };
    }

    if (lowercase.test(value)) {
      result = { ...result, atLeastOneLowerCase: true };
    }

    if (uppercase.test(value)) {
      result = { ...result, atLeastOneUpperCase: true };
    }

    if (number.test(value)) {
      result = { ...result, atLeastOneNumber: true };
    }

    return { forbiddenName: { value: control.value } };
  };
}
