export class persona{
    id?:number;
    apellido:String;
    banner:String;
    cv:String;
    email:String;
    img:String;
    nombre:String;
    sobreMi:String;
    titulo:String;
    ubicacion:String;
    

    constructor(apellido:String,banner:String,cv:String,email:String,img:String,nombre:String,sobreMi:String,titulo:String,ubicacion:String){
        this.apellido = apellido;
        this.banner = banner;
        this.cv = cv;
        this.email = email;
        this.img = img;
        this.nombre = nombre;
        this.sobreMi = sobreMi;
        this.titulo = titulo;
        this.ubicacion = ubicacion;
    }
}