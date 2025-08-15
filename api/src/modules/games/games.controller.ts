import { Controller, Get } from '@nestjs/common';
import { ListAllGamesUseCase } from './use-cases/list-all-games.use-case';

@Controller('games')
export class GamesController {
  constructor(private readonly listAllGamesUseCase: ListAllGamesUseCase) {}

  @Get()
  async list() {
    const response = await this.listAllGamesUseCase.execute();

    return response;
  }
}
