import { Module } from '@nestjs/common';
import { LugaresController } from './lugares.controller';
import { Prisma } from 'generated/prisma';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  imports: [ PrismaModule ],
  controllers: [LugaresController],
  providers: [],
})
export class LugaresModule {}
