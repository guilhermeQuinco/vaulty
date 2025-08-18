import { Controller, Get, Param } from '@nestjs/common';
import { ListAllGamesUseCase } from './use-cases/list-all-games.use-case';
import { FindOneGameUseCase } from './use-cases/find-one.use-case';

@Controller('games')
export class GamesController {
  constructor(
    private readonly listAllGamesUseCase: ListAllGamesUseCase,
    private readonly findOneGameUseCase: FindOneGameUseCase,
  ) {}

  @Get()
  async list() {
    const response = await this.listAllGamesUseCase.execute();

    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const response = await this.findOneGameUseCase.execute(id);

    return response;
  }
}
