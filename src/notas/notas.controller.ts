import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { NotasService } from "./notas.service";

@Controller('notas')
export class NotasController
{
    constructor(private readonly notasService: NotasService)
    {

    }

    @Post()
    crearNota(@Body('titulo') titulo: string, @Body('contenido') contenido: string, @Body('autor') autor: string): any
    {
        const idProducto = this.notasService.crearNota(titulo,contenido,autor);

        return { id: idProducto};

    }

    @Post('favoritas')
    addNotaFav(@Body('id') id: string): any
    {
        const idProducto = this.notasService.addNotaFav(id);

        return { id: idProducto};

    }

    @Get('favoritas')
    getNotasFav()
    {
        return this.notasService.getNotasFav();
    }

    @Get()
    getNotas()
    {
        return this.notasService.getNotas();
    }

    @Get(':id')
    getNota(@Param('id') notaID: string)
    {
        return this.notasService.getNota(notaID);
    }

    
}