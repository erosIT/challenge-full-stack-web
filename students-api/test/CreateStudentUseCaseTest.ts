import chai from 'chai';
import { describe, it } from 'mocha';
import { IStudent } from '../src/interfaces/entities/IStudent';
import { CreateStudentUseCase } from '../src/use-cases/CreateStudentUseCase';
import { RepositoryMock } from './mocks/RepositoryMock';
import { StudentDTOMock } from './mocks/StudentDTOMock';
import { StudentMock } from './mocks/StudentMock';

describe('Criação de um Estudante', () => {
  it('Create with correct parameters', async () => {
    const useCase = new CreateStudentUseCase(new RepositoryMock());

    useCase.entity = new StudentMock();

    const request = {
      name: 'name',
      cpf: 'cpf',
      email: 'email',
    };

    const result = await useCase.run(new StudentDTOMock().fromRequest(request));

    chai.expect(result).to.instanceOf(StudentMock);
    chai.expect((result as IStudent)).to.deep.equal({ name: 'name', cpf: 'cpf', email: 'email' });
  });

  it('Create forcing additional parameters', async () => {
    const useCase = new CreateStudentUseCase(new RepositoryMock());

    useCase.entity = new StudentMock();

    const request = {
      id: 'id',
      name: 'name',
      cpf: 'cpf',
      ra: 'ra',
      email: 'email',
      otherParameter: 'other parameter',
    };

    const result = await useCase.run(new StudentDTOMock().fromRequest(request));

    chai.expect(result).to.instanceOf(StudentMock);
    chai.expect((result as IStudent)).to.deep.equal({ name: 'name', cpf: 'cpf', email: 'email' });
  });
});
