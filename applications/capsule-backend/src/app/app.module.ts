import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MagazineModule } from './magazine/magazine.module';
import { AuthJWTModule } from '@capsule/auth';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MagazineModule, AuthModule, AuthJWTModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
