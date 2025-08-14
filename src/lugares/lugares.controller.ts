import { Controller, Delete, Get, Patch, Post, Param} from '@nestjs/common';


@Controller('lugares')
export class LugaresController {

//endpoint:
//destino de la request
//se escribe una función 
//en una clase controlador 
  @Get()
  consultarLugares(): string {
  return "aqui se podra consultar todos los lugares";
  }

  //desde la request se va
  //a capturar el paremetro id 
  @Get(':id')
  consultarLugaresPorId(@Param("id") id:string){

   return `aqui se va consultar lugares por id: ${ id }` 

  }
 


  @Post()
  registrarLugares(): string {
    //aqui se podra registrar un lugar
 return "aqui se podran registrar lugares";
}
@Post(':id')
registrarLugaresPorId(@Param("id") id:string): string { 
  return `aqui se va registrar lugares por id: ${ id }`;
}

@Patch()
  actualizarLugares(): string {
    //aqui se podra actualizar un lugar
    return "aqui se podran actualizar lugares";
  }
  @Patch(':id')
  actualizarLugaresPorId(@Param("id") id:string): string { 
    return `aqui se va actualizar lugares por id: ${ id }`;
  }
@Delete()
  eliminarLugares(): string {
    //aqui se podra eliminar un lugar
    return "aqui se podran eliminar lugares";
  }
@Delete(':id')
  eliminarLugaresPorId(@Param("id") id:string): string {    
    return `aqui se va eliminar lugares por id: ${ id }`;
  }

}