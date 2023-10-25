import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PlayerModule } from './player/player.module';
import { dbProperties } from 'properties/db.properties';


@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dbProperties }),
    AuthModule,
    UserModule,
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
