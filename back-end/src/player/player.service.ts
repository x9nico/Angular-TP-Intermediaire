import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async create(CreatePlayerDto: CreatePlayerDto): Promise<InsertResult> {
    return await this.playerRepository.insert(CreatePlayerDto);
  }

  async findAll(): Promise<Player[]> {
    return await this.playerRepository.find();
  }

  async findOne(id: number) {
    return await this.playerRepository.findOneBy({ id: id });
  }

  async update(id: number, UpdatePlayerDto: UpdatePlayerDto) {
    return await this.playerRepository.update(id, UpdatePlayerDto);
  }

  remove(id: number) {
    return this.playerRepository.delete(id);
  }
}
