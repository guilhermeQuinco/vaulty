// src/infra/http/http.module.ts
import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  exports: [HttpModule],
  providers: [HttpModule],
})
export class GlobalHttpModule {}
