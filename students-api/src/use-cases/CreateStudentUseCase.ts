import { validate, ValidationError } from 'class-validator';
import { getRepository, Repository } from 'typeorm';
import { Student } from '../entities/Student';
import { IStudentDTO } from '../interfaces/dto/IStudentDTO';
import { IStudent } from '../interfaces/entities/IStudent';
import { IUseCase } from '../interfaces/use-cases/IUseCase';

/**
 *
 *
 * @export
 * @class CreateStudentUseCase
 * @implements {IUseCase}
 */
export class CreateStudentUseCase implements IUseCase {
  /**
   *
   *
   * @private
   * @type {IStudent}
   * @memberof CreateStudentUseCase
   */
  private _entity: IStudent = new Student();

  /**
   *
   *
   * @memberof CreateStudentUseCase
   */
  public set entity(value: IStudent) {
    this._entity = value;
  }

  /**
   *
   *
   * @private
   * @type {Repository<IStudent>}
   * @memberof CreateStudentUseCase
   */
  private _repository: Repository<IStudent>;

  /**
   *
   *
   * @memberof CreateStudentUseCase
   */
  public set repository(value: Repository<IStudent>) {
    this._repository = value;
  }

  /**
   * Creates an instance of CreateStudentUseCase.
   * @param {*} [repository=getRepository(Student)]
   * @memberof CreateStudentUseCase
   */
  constructor(repository: Repository<IStudent> = getRepository(Student)) {
    this._repository = repository;
  }

  /**
   *
   *
   * @param {IStudentDTO} studentDTO
   * @return {*}
   * @memberof CreateStudentUseCase
   */
  public async run(studentDTO: IStudentDTO): Promise<ValidationError[] | IStudent> {
    this._entity.name = studentDTO.name;
    this._entity.cpf = studentDTO.cpf;
    this._entity.email = studentDTO.email;

    const errors = await validate(this._entity);

    if (errors.length > 0) {
      return errors;
    }

    return this._repository.save(this._entity);
  }
}
