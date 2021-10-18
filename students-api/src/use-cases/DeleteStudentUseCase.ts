import { ValidationError } from 'class-validator';
import { getRepository, Repository } from 'typeorm';
import { Student } from '../entities/Student';
import { IStudent } from '../interfaces/entities/IStudent';
import { IUseCase } from '../interfaces/use-cases/IUseCase';

/**
 *
 *
 * @export
 * @class DeleteStudentUseCase
 * @implements {IUseCase}
 */
export class DeleteStudentUseCase implements IUseCase {
  /**
   *
   *
   * @private
   * @type {Repository<IStudent>}
   * @memberof DeleteStudentUseCase
   */
  private _repository: Repository<IStudent>;

  /**
   *
   *
   * @param {Repository<IStudent>} value
   * @memberof DeleteStudentUseCase
   */
  public repository(value: Repository<IStudent>) {
    this._repository = value;
  }

  /**
   * Creates an instance of DeleteStudentUseCase.
   * @param {Repository<IStudent>} [repository=getRepository(Student)]
   * @memberof DeleteStudentUseCase
   */
  constructor(repository: Repository<IStudent> = getRepository(Student)) {
    this._repository = repository;
  }

  /**
   *
   *
   * @param {string} id
   * @return {*}
   * @memberof DeleteStudentUseCase
   */
  async run(id: string): Promise<ValidationError[] | void> {
    const res = await this._repository.delete(id);

    if (res.affected === 0) {
      const error = new ValidationError();

      error.property = 'Student';

      error.constraints = {
        nullable: 'Student not found',
      };

      return [error];
    }

    return Promise.resolve();
  }
}
