export class Nota
{
    id: string;
    titulo: string;
    contenido: string;
    autor: string;

    constructor(id: string, titulo: string = '', contenido: string = '', autor: string = '')
    {
        this.id = id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.autor = autor;
    }


}