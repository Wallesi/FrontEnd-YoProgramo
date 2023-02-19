export class Works {
    id?: number;
    fechas:string;
    titulo:string;
    descripcion:string;
    web:string;
    git:string;
    

    constructor(fechas:string,titulo:string,descripcion:string,web:string,git:string) {
        this.fechas = fechas;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.web = web;
        this.git = git;
    }   
}