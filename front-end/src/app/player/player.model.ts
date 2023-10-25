import { IPlayer } from '@shared';

export class Player implements IPlayer {
    id: number;
    name: string;
    age: number;
    nationality: string;
    poste: string;
    image: string;
  
    constructor(
      id: number,
      name: string,
      age: number,
      nationality: string,
      poste: string,
      image: string
    ) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.nationality = nationality,
      this.poste = poste,
      this.image = image;
    }
  }