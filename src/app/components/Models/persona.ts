import { Estudios } from "./estudios";
export interface Persona{
        //datos de la clase
        id?: number;
        nombre: string;
        apellido: string;
        imaUrl: string;
        edad: number;
        estudios:Estudios[];
        
}