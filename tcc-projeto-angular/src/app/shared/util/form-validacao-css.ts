import { FormControl } from '@angular/forms';

export default class FormValidacaoCss {

  static cssInvalido(controle: FormControl) {
    if(controle.touched || controle.dirty) {
      if(controle.invalid) return {'is-invalid': true};
      if(controle.valid) return {'is-valid': true};
    }
    return {};
  }
}