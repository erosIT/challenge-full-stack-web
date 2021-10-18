import { isUUID, ValidationError } from 'class-validator';
import { getRepository, Repository } from 'typeorm';
import { Student } from '../entities/Student';
import { IStudent } from '../interfaces/entities/IStudent';
import { IUseCase } from '../interfaces/use-cases/IUseCase';

/**
 *
 *
 * @export
 * @class FindOneStudentUseCase
 * @implements {IUseCase}
 */
export class FindOneStudentUseCase implements IUseCase {
  /**
   *
   *
   * @private
   * @type {Repository<IStudent>}
   * @memberof FindOneStudentUseCase
   */
  private _repository: Repository<IStudent> = getRepository(Student)

  /**
   *
   *
   * @memberof FindOneStudentUseCase
   */
  public set repository(value: Repository<IStudent>) {
    this._repository = value;
  }

  /**
   *
   *
   * @param {string} id
   * @return {*}  {(Promise<Student | ValidationError[]>)}
   * @memberof FindOneStudentUseCase
   */
  async run(id: string): Promise<Student | ValidationError[]> {
    if (!isUUID(id)) {
      const error = new ValidationError();

      error.property = 'Student';
      error.constraints = {
        nullable: 'Id is must be uuid',
      };

      return [error];
    }

    return this._repository.findOne(id);
  }
}
