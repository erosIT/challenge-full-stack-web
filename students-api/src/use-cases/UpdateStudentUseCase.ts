import { validate, ValidationError } from "class-validator";
import { getRepository, Repository } from "typeorm";
import { Student } from "../entities/Student";
import { IStudentDTO } from "../interfaces/dto/IStudentDTO";
import { IStudent } from "../interfaces/entities/IStudent";
import { IUseCase } from "../interfaces/use-cases/IUseCase";

/**
 *
 *
 * @export
 * @class UpdateStudentUseCase
 * @implements {IUseCase}
 */
export class UpdateStudentUseCase implements IUseCase {
  /**
   *
   *
   * @private
   * @type {Repository<IStudent>}
   * @memberof UpdateStudentUseCase
   */
  private _repository: Repository<IStudent> = getRepository(Student)

  /**
   *
   *
   * @memberof UpdateStudentUseCase
   */
  public set repository(value: Repository<IStudent>) {
    this._repository = value;
  }

  /**
   *
   *
   * @param {string} id
   * @param {IStudentDTO} dto
   * @return {*}  {(Promise<Student | ValidationError[]>)}
   * @memberof UpdateStudentUseCase
   */
  async run(dto: IStudentDTO): Promise<Student | ValidationError[]> {
    const student = await this._repository.findOne(dto.id)

    if (!student) {
      const error = new ValidationError()

      error.property = 'Student',
      error.constraints = {
        nullable: 'Student not find'
      }

      return [ error ]
    }

    student.name = dto.name;
    student.email = dto.email;

    const errors = await validate(student)

    if (errors.length > 0) {
      return errors
    }

    return await this._repository.save(student)
  }
}