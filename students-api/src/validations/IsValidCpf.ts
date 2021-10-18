import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { cpfValidator } from '../utils';

@ValidatorConstraint({ name: 'isValidCpf', async: false })
export class IsValidCpf implements ValidatorConstraintInterface {
  // eslint-disable-next-line class-methods-use-this
  validate(text: string) {
    return cpfValidator(text);
  }

  // eslint-disable-next-line class-methods-use-this
  defaultMessage() {
    return 'Invalid CPF parameter';
  }
}
