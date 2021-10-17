import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { cpfValidator } from '../utils';

@ValidatorConstraint({ name: 'isValidCpf', async: false })
export class IsValidCpf implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return cpfValidator(text)
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid CPF parameter';
  }
}