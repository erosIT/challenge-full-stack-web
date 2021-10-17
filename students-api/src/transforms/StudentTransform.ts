import { Serializer, Transform } from 'jsonapi-serializer'
import { IStudentTransform } from '../interfaces/transforms/IStudentTransform'

/**
 *
 *
 * @export
 * @class StudentTransform
 * @extends {Serializer}
 */
export class StudentTransform extends Serializer implements IStudentTransform {
  constructor(total?: number) {
    super('students', {
      id: 'id',
      attributes: [
        'ra',
        'name',
        'cpf',
        'email',
      ],
      meta: {
        total,
      }
    })
  }
}