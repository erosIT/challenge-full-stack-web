import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { IsEmail, IsEmpty, IsString, IsUUID, Length, Matches, max, min, Validate, ValidateIf } from 'class-validator'
import { IsValidCpf } from "../validations/IsValidCpf";
import { IStudent } from '../interfaces/entities/IStudent'

@Entity({name: 'students'})
export class Student implements IStudent {
  @IsUUID()
  @ValidateIf( (that: Student) => !!that.id )
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ unique: true, generated: true })
  ra: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @Length(11, 11)
  @Validate(IsValidCpf)
  cpf: string;
}
