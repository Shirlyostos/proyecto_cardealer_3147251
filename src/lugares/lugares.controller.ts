import { Controller, Delete, Get, Patch, Post, Param, Body} from '@nestjs/common';
import { LugaresService } from './lugares.service'; 




@Controller('lugares')
export class LugaresController {

  constructor(private service:LugaresService) {}
//endpoint:
//destino de la request
//se escribe una función 
//en una clase controlador 
  @Get()
  consultarLugares() {
    return  this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  //desde la request se va
  //a capturar el paremetro id 
  @Get(':id')
  consultarLugaresPorId(@Param("id") id:string){

   return `aqui se va consultar lugares por id: ${ id }` 

  }
 


@Post()
create(@Body() body: any){
  return this.service.create(body);  
}



  @Patch(':id')
  update(@Param("id") id: string, @Body() body: any) { 
    return {
      "exito": true,
      "mensaje": "Actualizado Correctamente",
      "id": id,
      "data": this.service.update(+id, body)
    };

  }

@Delete(':id')
remove(@Param("id") id: string) {
  return this.service.remove(+id);

}
  
  
  }