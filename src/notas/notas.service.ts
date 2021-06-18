import { Injectable, NotFoundException } from "@nestjs/common";
import { Nota } from "./nota.model";
import { v4 as id_generator } from 'uuid';

@Injectable()
export class NotasService
{
    notas: Nota[] = [];

    notas_favoritas: Nota[] = [];

    crearNota(titulo: string, contenido: string, autor: string)
    {
        //id_generator generates an unique and random ID that we'll use for each Nota

        const id: string = id_generator();

        const nuevaNota = new Nota(id,titulo,contenido,autor);
        this.notas.push(nuevaNota);
        return id;
    }
    
    addNotaFav(notaID: string)
    {
        const nota = this.notas.find((nota) => nota.id === notaID);

        if (!nota)
        {
            throw new NotFoundException('Nota no encontrada');
        }

        this.notas_favoritas.push({...nota});
        
        return nota.id;
    }

    getNotas()
    {
        return [...this.notas];
    }

    getNota(notaID: string)
    {
        const nota = this.notas.find((nota) => nota.id === notaID);

        if (!nota)
        {
            throw new NotFoundException('Nota no encontrada');
        }

        return {...nota};
    }

    getNotasFav()
    {
        return [...this.notas_favoritas];
    }
}