/**
 *
 *
 * @export
 * @class IStudent
 */
export interface IStudent {
  /**
   *
   *
   * @type {string}
   * @memberof IStudent
   */
  id?: string;

  /**
   *
   *
   * @type {number}
   * @memberof IStudent
   */
  ra: number;

  /**
   *
   *
   * @type {Date}
   * @memberof IStudent
   */
  createdAt: Date;

  /**
   *
   *
   * @type {Date}
   * @memberof IStudent
   */
  updatedAt: Date;

  /**
   *
   *
   * @type {string}
   * @memberof IStudent
   */
  name: string;

  /**
   *
   *
   * @type {string}
   * @memberof IStudent
   */
  email: string;

  /**
   *
   *
   * @type {string}
   * @memberof IStudent
   */
  cpf: string;
}
