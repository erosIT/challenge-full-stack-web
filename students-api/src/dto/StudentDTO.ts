import { IStudentDTO } from "../interfaces/dto/IStudentDTO";

/**
 *
 *
 * @export
 * @class StudentDTO
 */
export class StudentDTO implements IStudentDTO {
  /**
   *
   *
   * @type {string}
   * @memberof StudentDTO
   */
  public id: string;

  /**
   *
   *
   * @type {number}
   * @memberof StudentDTO
   */
  public ra: number;

  /**
   *
   *
   * @type {string}
   * @memberof StudentDTO
   */
  public name: string;

  /**
   *
   *
   * @type {string}
   * @memberof StudentDTO
   */
  public email: string;

  /**
   *
   *
   * @type {string}
   * @memberof StudentDTO
   */
  public cpf: string;

  /**
   *
   *
   * @param {Record<string, any>} body
   * @return {*}  {this}
   * @memberof StudentDTO
   */
  public fromRequest(body: Record<string, any>): this {
    this.ra = body.ra;
    this.name = body.name;
    this.email = body.email;
    this.cpf = body.cpf;

    return this;
  }
}
