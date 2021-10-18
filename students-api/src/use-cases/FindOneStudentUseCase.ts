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
  private _repository: Repository<IStudent>;

  /**
   *
   *
   * @memberof FindOneStudentUseCase
   */
  public set repository(value: Repository<IStudent>) {
    this._repository = value;
  }

  /**
   * Creates an instance of FindOneStudentUseCase.
   * @param {Repository<IStudent>} [repository=getRepository(Student)]
   * @memberof FindOneStudentUseCase
   */
  constructor(repository: Repository<IStudent> = getRepository(Student)) {
    this._repository = repository;
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
