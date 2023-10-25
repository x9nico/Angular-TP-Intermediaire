import { IPlayer } from '@shared';

export class Player implements IPlayer {
    id: number;
    name: string;
    age: number;
    nationality: string;
    poste: string;
    image: string;
    description: string;
  
    constructor(
      id: number,
      name: string,
      age: number,
      nationality: string,
      poste: string,
      image: string, description: string
    ) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.nationality = nationality,
      this.poste = poste,
      this.image = image,
      this.description = description
    }
  }