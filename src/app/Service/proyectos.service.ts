import { Injectable } from '@angular/core';
//Importar httpclient, obserbable y la clase de modelo a usar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../Models/proyectos';
@Injectable({
    providedIn: 'root'
  })
  export class ProyectosService {
      ProyectosURL = 'https://portfoliobackjoaquin.herokuapp.com/proyectos/'
      constructor(private httpClient: HttpClient) { }

      public verProyectos():Observable<Proyectos[]> {
        return this.httpClient.get<Proyectos[]>(this.ProyectosURL +'ver');
      }
      //buscar
      public buscarProyectos(id:number):Observable<any>{
        return this.httpClient.get<any>(this.ProyectosURL+ `buscar/${id}`)
      }
    
      //Crear
      public save(estudios:Proyectos):Observable<Proyectos>{
        return this.httpClient.post<Proyectos>(this.ProyectosURL+'new', estudios);
      }
        //Actualizar
        public update(estudios:Proyectos):Observable<Proyectos>{
          return this.httpClient.put<Proyectos>(this.ProyectosURL+"editar", estudios);
        }
        //borrar
        public delete(id:number):Observable<any>{
          return this.httpClient.delete<any>(this.ProyectosURL+ `delete/${id}`)
        }
  }