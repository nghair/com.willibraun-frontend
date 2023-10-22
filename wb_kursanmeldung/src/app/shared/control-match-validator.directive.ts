import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function controlMatchValidator(
  control1: string,
  control2: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const c1 = control.get(control1);
    const c2 = control.get(control2);
    return !c1 && c1 !== c2 ? { noMatch: true } : null;
  };
}
