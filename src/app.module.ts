import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugaresController } from './lugares/lugares.controller';
import { LugaresModule } from './lugares/lugares.module';
import { BrandsModule } from './brands/brands.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LugaresModule, BrandsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
