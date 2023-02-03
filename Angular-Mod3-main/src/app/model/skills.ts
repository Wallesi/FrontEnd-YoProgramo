export class Skills {
    id?: number;
    img:string;
    name:string;
    progreso:string;
    

    constructor(img:string, name:string, progreso:string) {
        this.img = img;
        this.name = name;
        this.progreso = progreso;
    }   
}