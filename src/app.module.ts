import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugaresController } from './lugares/lugares.controller';
import { LugaresModule } from './lugares/lugares.module';

@Module({
  imports: [LugaresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
