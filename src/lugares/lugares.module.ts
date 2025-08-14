import { Module } from '@nestjs/common';
import { LugaresController } from './lugares.controller';


@Module({
  imports: [],
  controllers: [LugaresController],
  providers: [],
})
export class LugaresModule {}
