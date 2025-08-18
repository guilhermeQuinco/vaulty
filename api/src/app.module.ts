import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { GamesModule } from './modules/games/games.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), GamesModule],
})
export class AppModule {}
