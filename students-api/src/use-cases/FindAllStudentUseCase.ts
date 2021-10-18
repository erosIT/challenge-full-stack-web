import { getRepository, Repository } from "typeorm";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import { Student } from "../entities/Student";
import { IStudent } from "../interfaces/entities/IStudent";
import { IUseCase } from "../interfaces/use-cases/IUseCase";

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
  private _repository: Repository<IStudent> = getRepository(Student)

  /**
   *
   *
   * @memberof FindAllStudentUseCase
   */
  public set repository(value: Repository<IStudent>) {
    this._repository = value
  }

  /**
   *
   *
   * @param {*} pagination
   * @return {*}  {Promise<[Student[], number]>}
   * @memberof FindAllStudentUseCase
   */
  async run(pagination: { number: number, size: number }) {
    // (this._repository.createQueryBuilder('student') as any).paginate(10).then((res) => console.log(res)).catch((e) => console.log(e))
    // return await this._repository.createQueryBuilder('students').orderBy('students.created_at').paginate();
    return await this._repository.findAndCount({ order: {
        created_at: "DESC",
    } , skip: (pagination.number - 1) * pagination.size, take: pagination.size});
  }
}