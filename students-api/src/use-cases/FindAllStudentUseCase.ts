import { getRepository, Repository } from 'typeorm';
import { Student } from '../entities/Student';
import { IStudent } from '../interfaces/entities/IStudent';
import { IUseCase } from '../interfaces/use-cases/IUseCase';

/**
 *
 *
 * @export
 * @class FindAllStudentUseCase
 * @implements {IUseCase}
 */
export class FindAllStudentUseCase implements IUseCase {
  /**
   *
   *
   * @private
   * @type {Repository<IStudent>}
   * @memberof FindAllStudentUseCase
   */
  private _repository: Repository<IStudent>;

  /**
   *
   *
   * @memberof FindAllStudentUseCase
   */
  public set repository(value: Repository<IStudent>) {
    this._repository = value;
  }

  /**
   * Creates an instance of FindAllStudentUseCase.
   * @param {Repository<IStudent>} [repository=getRepository(Student)]
   * @memberof FindAllStudentUseCase
   */
  constructor(repository: Repository<IStudent> = getRepository(Student)) {
    this._repository = repository;
  }

  /**
   *
   *
   * @param {*} pagination
   * @return {*}  {Promise<[Student[], number]>}
   * @memberof FindAllStudentUseCase
   */
  async run(pagination: { number: number, size: number }): Promise<[IStudent[], number]> {
    return this._repository.findAndCount({
      order: {
        createdAt: 'DESC',
      },
      skip: (pagination.number - 1) * pagination.size,
      take: pagination.size,
    });
  }
}
