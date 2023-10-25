import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '@shared'; 

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true,  nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;
}
