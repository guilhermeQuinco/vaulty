import { Injectable } from '@nestjs/common';
import { RawgService } from 'src/infra/implementations/services/http /rawg/rawg.service';

@Injectable()
export class ListAllGamesUseCase {
  constructor(private readonly rawgService: RawgService) {}

  async execute() {
    const output = await this.rawgService.listAllGames();
    return output;
  }
}
