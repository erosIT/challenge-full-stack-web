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
  created_at: Date;

  /**
   *
   *
   * @type {Date}
   * @memberof IStudent
   */
  updated_at: Date;

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