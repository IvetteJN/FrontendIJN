export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    imgE: string;
    fechaInicio: Date;
    fechaFin: Date;

    constructor(nombreE: string, descripcionE: string, imgE: string, fechaInicio: Date, fechaFin: Date){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
