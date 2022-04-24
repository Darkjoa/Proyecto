import { Injectable } from '@angular/core';
//Importar httpclient, obserbable y la clase de modelo a usar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Sobremi} from '../Models/sobremi'
@Injectable({
  providedIn: 'root'
})
export class SobremiService {

 //se conecta el service
 SobreMiUrl = 'https://portfoliobackjoaquin.herokuapp.com/sobremi/'
 constructor(private httpClient: HttpClient) { }


 //metodos de backend de la clase sobremi
 //Ver SobreMi
 public verSobreMi():Observable<Sobremi[]> {
   return this.httpClient.get<Sobremi[]>(this.SobreMiUrl +'ver');
 }
 //Crear
 public save(sobremi:Sobremi):Observable<Sobremi>{
   return this.httpClient.post<Sobremi>(this.SobreMiUrl+'new', sobremi);
 }
 public buscarSobreMi(id:number):Observable<any>{
  return this.httpClient.get<any>(this.SobreMiUrl+ `buscar/${id}`)
}
   //Actualizar
   public update(sobremi:Sobremi):Observable<Sobremi>{
     return this.httpClient.put<any>(this.SobreMiUrl+'editar', sobremi);
   }
   //borrar
   public delete(id:number):Observable<any>{
     return this.httpClient.delete<any>(this.SobreMiUrl+ `delete/${id}`)
   }
}
