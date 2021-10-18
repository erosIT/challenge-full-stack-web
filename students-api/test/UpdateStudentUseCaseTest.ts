import chai from 'chai';
import { ValidationError } from 'class-validator';
import { describe, it } from 'mocha';
import { IStudent } from '../src/interfaces/entities/IStudent';
import { UpdateStudentUseCase } from '../src/use-cases/UpdateStudentUseCase';
import { RepositoryMock } from './mocks/RepositoryMock';
import { StudentDTOMock } from './mocks/StudentDTOMock';
import { StudentMock } from './mocks/StudentMock';

describe('Editção de um Estudante', () => {
  it('Updated with correct parameters', async () => {
    const useCase = new UpdateStudentUseCase(new RepositoryMock());

    const request = {
      id: 'id',
      name: 'name',
      email: 'email',
    };

    const result = await useCase.run(new StudentDTOMock().fromRequest(request));

    chai.expect(result).to.instanceOf(StudentMock);
    chai.expect((result as IStudent)).to.deep.equal({
      id: 'id', ra: 10, name: 'name', cpf: '43701843805', email: 'email',
    });
  });

  it('Updated with invalid id', async () => {
    const useCase = new UpdateStudentUseCase(new RepositoryMock());

    const request = {
      id: 'id-inexistente',
      name: 'name',
      email: 'email',
    };

    const result = await useCase.run(new StudentDTOMock().fromRequest(request));

    chai.expect(result).to.instanceOf(Array);
    chai.expect(result[0]).to.instanceOf(ValidationError);
    chai.expect((result[0] as ValidationError).constraints).to.includes({ nullable: 'Student not found' });
  });

  it('Updated forcing additional parameters', async () => {
    const useCase = new UpdateStudentUseCase(new RepositoryMock());

    const request = {
      id: 'id',
      name: 'name',
      email: 'email',
      otherParameter: 'other parameter',
    };

    const result = await useCase.run(new StudentDTOMock().fromRequest(request));

    chai.expect(result).to.instanceOf(StudentMock);
    chai.expect((result as IStudent)).to.deep.equal({
      id: 'id', ra: 10, name: 'name', cpf: '43701843805', email: 'email',
    });
  });

  it('Updated forcing prohibited parameters', async () => {
    const useCase = new UpdateStudentUseCase(new RepositoryMock());

    const request = {
      id: 'id',
      name: 'name',
      email: 'email',
      cpf: 'novo cpf',
      ra: 'novo ra',
    };

    const result = await useCase.run(new StudentDTOMock().fromRequest(request));

    chai.expect(result).to.instanceOf(StudentMock);
    chai.expect((result as IStudent)).to.deep.equal({
      id: 'id', ra: 10, name: 'name', cpf: '43701843805', email: 'email',
    });
  });
});
