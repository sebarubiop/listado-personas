import { FormGroup } from "@angular/forms";

export function ValidRut(
  controlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    if (control.value) {
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(control.value))
        control.setErrors(null);
      var tmp = control.value.split('-');
      var digv = tmp[1];
      var rut = tmp[0];
      if (digv == 'K') digv = 'k';
      var M = 0, S = 1;
      for (; rut; rut = Math.floor(rut / 10))
        S = (S + rut % 10 * (9 - M++ % 6)) % 11;
      var dv = S ? S - 1 : 'k'
      if (dv == digv) {
        control.setErrors(null);
      } else {
        control.setErrors({ invalidRut: true });
      }
    }
  }
}
