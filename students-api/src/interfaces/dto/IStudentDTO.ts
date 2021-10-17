import { IDataTransferObject } from "./IDataTransferObject";

/**
 *
 *
 * @export
 * @class IStudentDTO
 */
 export interface IStudentDTO extends IDataTransferObject {
  /**
   *
   *
   * @type {string}
   * @memberof IStudentDTO
   */
  id: string;

  /**
   *
   *
   * @type {number}
   * @memberof IStudentDTO
   */
  ra: number;

  /**
   *
   *
   * @type {string}
   * @memberof IStudentDTO
   */
  name: string;

  /**
   *
   *
   * @type {string}
   * @memberof IStudentDTO
   */
  email: string;

  /**
   *
   *
   * @type {string}
   * @memberof IStudentDTO
   */
  cpf: string;
}
