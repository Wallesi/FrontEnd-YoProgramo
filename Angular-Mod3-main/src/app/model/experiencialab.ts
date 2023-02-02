export class Experiencialab {
    id?: number;
    puesto:string;
    empresa:string;
    comienzo:string;
    finalizo:string;
    tareas:string;

    constructor(puesto:string,empresa:string, comienzo:string, finalizo:string, tareas:string) {
        this.puesto = puesto;
        this.empresa = empresa;
        this.comienzo = comienzo;
        this.finalizo=finalizo;
        this.tareas=tareas;
    }   
}