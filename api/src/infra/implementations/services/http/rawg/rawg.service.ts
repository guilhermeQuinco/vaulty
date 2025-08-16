import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RawgService {
  private readonly api_key = process.env.RAWG_API_KEY;

  constructor(private readonly http: HttpService) {}

  async listAllGames() {
    try {
      const response = await firstValueFrom(
        this.http.get(`https://api.rawg.io/api/games?key=${this.api_key}`),
      );

      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar jogos: ${error.message || error}`);
    }
  }
}
