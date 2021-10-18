import { IStudentDTO } from '../../src/interfaces/dto/IStudentDTO';

export class StudentDTOMock implements IStudentDTO {
  id: string;

  ra: number;

  name: string;

  email: string;

  cpf: string;

  fromRequest(request: Record<string, any>): this {
    this.id = request.id;
    this.ra = request.ra;
    this.name = request.name;
    this.cpf = request.cpf;
    this.email = request.email;

    return this;
  }
}
