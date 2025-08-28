import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LugaresService {

  constructor(
    private prismaService: PrismaService) {}


  create(body: any) {
    return this.prismaService.lugar.create({
      data: body
    })
  }
  

  findAll() {
    return this.prismaService.lugar.findMany({
      orderBy: { lugar_nombre: 'desc' },
    });
  }

  findOne(id: number) {
   return this.prismaService.lugar.findFirst({
    where:{ id: id }
   })

  }

  async update(id: number, 
    body: any) {
    return await this.prismaService.lugar.update({
      where: { id: id },
      data: body
    });
  }

async remove(id: number) {
  await this.prismaService.lugar.delete({
    where: { id: id } 
  });

  return {
    "exito": true,
    "mensaje": "Eliminado Correctamente",
    "id": id,
  };
}
}