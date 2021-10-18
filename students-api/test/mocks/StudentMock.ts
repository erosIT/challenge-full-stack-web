import { IStudent } from '../../src/interfaces/entities/IStudent';

export class StudentMock implements IStudent {
  id?: string;

  ra: number;

  createdAt: Date;

  updatedAt: Date;

  name: string;

  email: string;

  cpf: string;
}
