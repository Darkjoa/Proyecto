import { Estudios } from "./estudios";
import { Experiencia } from "./experiencia";
import { Habilidades } from "./habilidades";
import { Proyectos } from "./proyectos";
import { Sobremi } from "./sobremi";
import { Social } from "./social";
export interface Persona{
        //datos de la clase
        id?: number;
        nombre: string;
        apellido: string;
        imaUrl: string;
        portadaImaUrl: string;
        edad: number;
        estudios:Estudios[];
        experiencia:Experiencia[];
        habilidades:Habilidades[];
        sobremi:Sobremi[];
        social:Social[];
        proyectos:Proyectos[];
        
}