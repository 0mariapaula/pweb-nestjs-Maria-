import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { Gato } from 'src/gato/gato.interface';
import { GatosService } from './gatos.service';

@Controller('gatos')
export class GatosController {

    constructor(private gatosService: GatosService) {}

    private readonly gatos: Gato[] = [
        {
            id: 1,
            nome: "Black",
            raca: "Mestiça",
            idade: 2
        },
        {
            id: 2,
            nome: "Garfield",
            raca: "Desconhecida",
            idade: 45
        }
    ];

    @Get()
    findAll(): Gato[] {
        return this.gatosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number, @Res() response: Response) {
        const gato = this.gatosService.findOne(id);
        if(gato){
            response.status(HttpStatus.OK).json(gato);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
        const index = this.gatosService.findIndexById(id);
        if(index >= 0){
            this.gatosService.deleteByIndex(index);
            response.status(HttpStatus.NO_CONTENT).send(); 
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    create(@Body() gato: Gato) {
        this.gatosService.create(gato);
        return gato;
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id : number, @Body() gato: Gato, @Res() response: Response) {
        const index = this.gatos.findIndex((gato) => gato.id === id);
        if(index >= 0){
            this.gatos.splice(index, 1, gato);
            response.status(HttpStatus.OK).json(gato);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }

}
