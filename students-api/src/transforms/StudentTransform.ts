import { Serializer } from 'jsonapi-serializer';
import { IStudentTransform } from '../interfaces/transforms/IStudentTransform';

/**
 *
 *
 * @export
 * @class StudentTransform
 * @extends {Serializer}
 */
export class StudentTransform extends Serializer implements IStudentTransform {
  constructor({ count, size, number }: any) {
    super('students', {
      id: 'id',
      attributes: [
        'ra',
        'name',
        'cpf',
        'email',
      ],
      meta: {
        pagination: {
          count,
          total: count,
          current_page: number,
          per_page: size,
        },
      },
    });
  }
}
