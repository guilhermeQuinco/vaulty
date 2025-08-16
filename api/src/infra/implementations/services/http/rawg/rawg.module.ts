// src/infra/http/rawg/rawg.module.ts
import { Global, Module } from '@nestjs/common';
import { RawgService } from './rawg.service';
import { GlobalHttpModule } from '../http.module';

@Global()
@Module({
  imports: [GlobalHttpModule],
  providers: [RawgService],
  exports: [RawgService],
})
export class RawgModule {}
