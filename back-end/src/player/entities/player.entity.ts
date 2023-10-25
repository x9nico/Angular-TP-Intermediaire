import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IPlayer } from '../../../../shared/interfaces/player.inferface';

@Entity()
export class Player implements IPlayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false })
  name: string;

  @Column()
  age: number;

  @Column()
  nationality: string;

  @Column()
  poste: string;

  @Column()
  image: string;

  @Column()
  description: string;
}
