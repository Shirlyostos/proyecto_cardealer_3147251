import { Module } from '@nestjs/common';
import { LugaresController } from './lugares.controller';
import { Prisma } from 'generated/prisma';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LugaresService } from './lugares.service';


@Module({
  imports: [ PrismaModule ],
  controllers: [LugaresController],
  providers: [LugaresService],
})
export class LugaresModule {}
