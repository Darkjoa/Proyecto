import { Injectable } from '@angular/core';

//Importar httpclient, obserbable y la clase de modelo a usar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../Models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

 //se conecta el service
 ExperienciaURL = 'https://portfoliobackjoaquin.herokuapp.com/experiencia/'
 constructor(private httpClient: HttpClient) { }


 //metodos de backend de la clase ExperienciaController
 //Ver Experiencia
 public verExperiencia():Observable<Experiencia[]> {
   return this.httpClient.get<Experiencia[]>(this.ExperienciaURL +'ver');
 }
//buscar
 public buscarExperiencia(id:number):Observable<any>{
  return this.httpClient.get<any>(this.ExperienciaURL+ `buscar/${id}`)
}
 //Crear
 public save(experiencia:Experiencia):Observable<Experiencia>{
   return this.httpClient.post<Experiencia>(this.ExperienciaURL+'new', experiencia);
 }
   //Actualizar
   public update(experiencia:Experiencia):Observable<Experiencia>{
     return this.httpClient.put<any>(this.ExperienciaURL+'editar', experiencia);
   }
   //borrar
   public delete(id:number):Observable<any>{
     return this.httpClient.delete<any>(this.ExperienciaURL+ `delete/${id}`)
   }
}
