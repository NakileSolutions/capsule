import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MagazineModule } from "./magazine/magazine.module";

@Module({
  imports: [MagazineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
