/**
 *
 *
 * @export
 * @interface IDataTransferObject
 */
export interface IDataTransferObject {
  /**
   *
   *
   * @param {Record<string, any>} request
   * @return {*}  {this}
   * @memberof IDataTransferObject
   */
  fromRequest(request: Record<string, any>): this
}