import { Injectable } from '@nestjs/common';
import { RawgService } from 'src/infra/implementations/services/http/rawg/rawg.service';
import { GameOutputMapper } from '../common/game-output';

@Injectable()
export class FindOneGameUseCase {
  constructor(private readonly rawgService: RawgService) {}

  async execute(id: number) {
    const output = await this.rawgService.findOne(id);
    return GameOutputMapper.toOutput(output);
  }
}
