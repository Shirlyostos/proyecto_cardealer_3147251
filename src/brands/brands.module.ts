import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { Prisma } from 'generated/prisma';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BrandsService } from './brands.service';


@Module({
  imports: [ PrismaModule ],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
