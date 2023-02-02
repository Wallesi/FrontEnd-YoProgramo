export class Educacion {
    id?: number;
    institucionE:string;
    tituloE:string;
    inicioE:string;
    finalE:string;

    constructor(institucionE:string,tituloE:string,inicioE:string,finalE:string) {
        this.institucionE = institucionE;
        this.tituloE=tituloE;
        this.inicioE=inicioE;
        this.finalE=finalE;
    }   
}
