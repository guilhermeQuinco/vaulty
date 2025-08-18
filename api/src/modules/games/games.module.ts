import { Module } from '@nestjs/common';
import { RawgService } from 'src/infra/implementations/services/http/rawg/rawg.service';
import { ListAllGamesUseCase } from './use-cases/list-all-games.use-case';
import { HttpModule } from '@nestjs/axios';
import { GamesController } from './games.controller';
import { FindOneGameUseCase } from './use-cases/find-one.use-case';

@Module({
  imports: [HttpModule],
  controllers: [GamesController],
  providers: [ListAllGamesUseCase, FindOneGameUseCase, RawgService],
})
export class GamesModule {}
