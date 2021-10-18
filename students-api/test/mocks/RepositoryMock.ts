/* eslint-disable max-len */
/* eslint-disable no-dupe-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import {
  DeepPartial, DeleteResult, EntityManager, EntityMetadata, FindConditions, FindManyOptions, FindOneOptions, InsertResult, ObjectID, QueryRunner, RemoveOptions, Repository, SaveOptions, SelectQueryBuilder, UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IStudent } from '../../src/interfaces/entities/IStudent';
import { StudentMock } from './StudentMock';

export class RepositoryMock implements Repository<IStudent> {
  manager: EntityManager;

  metadata: EntityMetadata;

  queryRunner?: QueryRunner;

  createQueryBuilder(alias?: string, queryRunner?: QueryRunner): SelectQueryBuilder<IStudent> {
    throw new Error('Method not implemented.');
  }

  get target(): string | Function {
    throw new Error('Method not implemented.');
  }

  hasId(entity: IStudent): boolean {
    throw new Error('Method not implemented.');
  }

  getId(entity: IStudent) {
    throw new Error('Method not implemented.');
  }

  create(): IStudent;

  create(entityLikeArray: DeepPartial<IStudent>[]): IStudent[];

  create(entityLike: DeepPartial<IStudent>): IStudent;

  create(entityLike?: any): IStudent | IStudent[] {
    throw new Error('Method not implemented.');
  }

  merge(mergeIntoEntity: IStudent, ...entityLikes: DeepPartial<IStudent>[]): IStudent {
    throw new Error('Method not implemented.');
  }

  preload(entityLike: DeepPartial<IStudent>): Promise<IStudent> {
    throw new Error('Method not implemented.');
  }

  save<T extends DeepPartial<IStudent>>(entities: T[], options: SaveOptions & { reload: false; }): Promise<T[]>;

  save<T extends DeepPartial<IStudent>>(entities: T[], options?: SaveOptions): Promise<(T & IStudent)[]>;

  save<T extends DeepPartial<IStudent>>(entity: T, options: SaveOptions & { reload: false; }): Promise<T>;

  save<T extends DeepPartial<IStudent>>(entity: T, options?: SaveOptions): Promise<T & IStudent>;

  save<T>(entity: any, options?: any): Promise<T[]> | Promise<(T & IStudent)[]> | Promise<T> | Promise<T & IStudent> {
    return entity;
  }

  remove(entities: IStudent[], options?: RemoveOptions): Promise<IStudent[]>;

  remove(entity: IStudent, options?: RemoveOptions): Promise<IStudent>;

  remove(entity: any, options?: any): Promise<IStudent> | Promise<IStudent[]> {
    throw new Error('Method not implemented.');
  }

  softRemove<T extends DeepPartial<IStudent>>(entities: T[], options: SaveOptions & { reload: false; }): Promise<T[]>;

  softRemove<T extends DeepPartial<IStudent>>(entities: T[], options?: SaveOptions): Promise<(T & IStudent)[]>;

  softRemove<T extends DeepPartial<IStudent>>(entity: T, options: SaveOptions & { reload: false; }): Promise<T>;

  softRemove<T extends DeepPartial<IStudent>>(entity: T, options?: SaveOptions): Promise<T & IStudent>;

  softRemove<T>(entity: any, options?: any): Promise<T[]> | Promise<(T & IStudent)[]> | Promise<T> | Promise<T & IStudent> {
    throw new Error('Method not implemented.');
  }

  recover<T extends DeepPartial<IStudent>>(entities: T[], options: SaveOptions & { reload: false; }): Promise<T[]>;

  recover<T extends DeepPartial<IStudent>>(entities: T[], options?: SaveOptions): Promise<(T & IStudent)[]>;

  recover<T extends DeepPartial<IStudent>>(entity: T, options: SaveOptions & { reload: false; }): Promise<T>;

  recover<T extends DeepPartial<IStudent>>(entity: T, options?: SaveOptions): Promise<T & IStudent>;

  recover<T>(entity: any, options?: any): Promise<T[]> | Promise<(T & IStudent)[]> | Promise<T> | Promise<T & IStudent> {
    throw new Error('Method not implemented.');
  }

  insert(entity: QueryDeepPartialEntity<IStudent> | QueryDeepPartialEntity<IStudent>[]): Promise<InsertResult> {
    throw new Error('Method not implemented.');
  }

  update(criteria: string | number | Date | ObjectID | string[] | number[] | Date[] | ObjectID[] | FindConditions<IStudent>, partialEntity: QueryDeepPartialEntity<IStudent>): Promise<UpdateResult> {
    throw new Error('Method not implemented.');
  }

  delete(criteria: string | number | Date | ObjectID | string[] | number[] | Date[] | ObjectID[] | FindConditions<IStudent>): Promise<DeleteResult> {
    throw new Error('Method not implemented.');
  }

  softDelete(criteria: string | number | Date | ObjectID | string[] | number[] | Date[] | ObjectID[] | FindConditions<IStudent>): Promise<UpdateResult> {
    throw new Error('Method not implemented.');
  }

  restore(criteria: string | number | Date | ObjectID | string[] | number[] | Date[] | ObjectID[] | FindConditions<IStudent>): Promise<UpdateResult> {
    throw new Error('Method not implemented.');
  }

  count(options?: FindManyOptions<IStudent>): Promise<number>;

  count(conditions?: FindConditions<IStudent>): Promise<number>;

  count(conditions?: any): Promise<number> {
    throw new Error('Method not implemented.');
  }

  find(options?: FindManyOptions<IStudent>): Promise<IStudent[]>;

  find(conditions?: FindConditions<IStudent>): Promise<IStudent[]>;

  find(conditions?: any): Promise<IStudent[]> {
    throw new Error('Method not implemented.');
  }

  findAndCount(options?: FindManyOptions<IStudent>): Promise<[IStudent[], number]>;

  findAndCount(conditions?: FindConditions<IStudent>): Promise<[IStudent[], number]>;

  findAndCount(conditions?: any): Promise<[IStudent[], number]> {
    throw new Error('Method not implemented.');
  }

  findByIds(ids: any[], options?: FindManyOptions<IStudent>): Promise<IStudent[]>;

  findByIds(ids: any[], conditions?: FindConditions<IStudent>): Promise<IStudent[]>;

  findByIds(ids: any, conditions?: any): Promise<IStudent[]> {
    throw new Error('Method not implemented.');
  }

  findOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<IStudent>): Promise<IStudent>;

  findOne(options?: FindOneOptions<IStudent>): Promise<IStudent>;

  findOne(conditions?: FindConditions<IStudent>, options?: FindOneOptions<IStudent>): Promise<IStudent>;

  async findOne(conditions?: any, options?: any): Promise<IStudent> {
    const student = new StudentMock();

    if (conditions !== 'id') {
      return undefined;
    }

    student.id = conditions;
    student.name = 'Estudante';
    student.email = 'estudante@email.com';
    student.cpf = '43701843805';
    student.ra = 10;

    return student;
  }

  findOneOrFail(id?: string | number | Date | ObjectID, options?: FindOneOptions<IStudent>): Promise<IStudent>;

  findOneOrFail(options?: FindOneOptions<IStudent>): Promise<IStudent>;

  findOneOrFail(conditions?: FindConditions<IStudent>, options?: FindOneOptions<IStudent>): Promise<IStudent>;

  findOneOrFail(conditions?: any, options?: any): Promise<IStudent> {
    throw new Error('Method not implemented.');
  }

  query(query: string, parameters?: any[]): Promise<any> {
    throw new Error('Method not implemented.');
  }

  clear(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  increment(conditions: FindConditions<IStudent>, propertyPath: string, value: string | number): Promise<UpdateResult> {
    throw new Error('Method not implemented.');
  }

  decrement(conditions: FindConditions<IStudent>, propertyPath: string, value: string | number): Promise<UpdateResult> {
    throw new Error('Method not implemented.');
  }
}
