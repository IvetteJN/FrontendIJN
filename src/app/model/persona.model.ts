export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcionP: string;
    tituloP: string;
    img: string;

    constructor(nombre: string, apellido: string, descripcionP: string, tituloP: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcionP = descripcionP;
        this.tituloP = tituloP;
        this.img = img;
    }
}