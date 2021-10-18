import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import {
  IsEmail, IsString, IsUUID, Length, Validate, ValidateIf,
} from 'class-validator';
import { IsValidCpf } from '../validations/IsValidCpf';
import { IStudent } from '../interfaces/entities/IStudent';

/**
 *
 *
 * @export
 * @class Student
 * @implements {IStudent}
 */
@Entity({ name: 'students' })
export class Student implements IStudent {
  /**
   *
   *
   * @type {string}
   * @memberof Student
   */
  @IsUUID()
  @ValidateIf((that: Student) => !!that.id)
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  /**
   *
   *
   * @type {number}
   * @memberof Student
   */
  @Column({ unique: true, generated: true })
  ra: number;

  /**
   *
   *
   * @type {Date}
   * @memberof Student
   */
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  /**
   *
   *
   * @type {Date}
   * @memberof Student
   */
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  /**
   *
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  @IsString()
  name: string;

  /**
   *
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  @IsEmail()
  email: string;

  /**
   *
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  @Length(11, 11)
  @Validate(IsValidCpf)
  cpf: string;
}
