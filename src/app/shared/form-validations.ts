import { FormControl, FormGroup } from '@angular/forms';

export class FormValidations {
  static equalsto(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }
      // Verifica se o campo está pronto para ser validado
      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      // Obtendo o controle raiz para ter acesso a qualquer campo do form
      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }
      if (field.value !== formControl.value) {
        return { equalsto: otherField };
      }
      return null;
    };

    return validator;
  }
}
