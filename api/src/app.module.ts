import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { GamesModule } from './modules/games/games.module';
import { UsersModule } from './modules/users/user.module';
import { AppDataSource, dataSourceOptions } from './infra/database/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      entities: [User],
    }),
    GamesModule,
    UsersModule,
  ],
})
export class AppModule {}
