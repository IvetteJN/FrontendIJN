export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    descripcionP: string;
    tituloP: string;

    constructor(nombre: string, apellido: string, img: string, descripcionP: string, tituloP: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcionP = descripcionP;
        this.tituloP = tituloP;
    }
}