import { Model } from "@kernel-js/api";
import { Config } from "@kernel-js/api/dist/Interfaces";
import Vue from "vue";

/**
 *
 *
 * @export
 * @class Student
 * @extends {Model}
 */
export class Student extends Model {
  get baseUrl(): string {
    return "http://localhost:3000/api";
  }

  get resourceName(): string {
    return "students";
  }

  get fields(): string[] {
    return ["id", "ra", "name", "cpf", "email"];
  }

  get relationshipNames(): string[] {
    return [];
  }

  protected request(config: Config): Promise<any> {
    return Vue.prototype.$request.request(config);
  }
}
