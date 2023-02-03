export class Works {
    id?: number;
    img:string;
    titulo:string;
    descripcion:string;
    web:string;
    git:string;
    

    constructor(img:string,titulo:string,descripcion:string,web:string,git:string) {
        this.img = img;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.web = web;
        this.git = git;
    }   
}