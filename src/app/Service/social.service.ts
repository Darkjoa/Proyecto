import { Injectable } from '@angular/core';
//Importar httpclient, obserbable y la clase de modelo a usar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Social } from '../Models/social';
@Injectable({
  providedIn: 'root'
})
export class SocialService {

 //se conecta el service
 SocialUrl = 'https://portfoliobackjoaquin.herokuapp.com/social/'
 constructor(private httpClient: HttpClient) { }


 //metodos de backend de la clase sobremi
 //Ver SobreMi
 public verSocial():Observable<Social> {
   return this.httpClient.get<Social>(this.SocialUrl +'ver');
 }
 //Crear
 public save(social:Social):Observable<Social>{
   return this.httpClient.post<Social>(this.SocialUrl+'new', social);
 }
 public buscarSocial(id:number):Observable<any>{
  return this.httpClient.get<any>(this.SocialUrl+ `buscar/${id}`)
}
   //Actualizar
   public update(social:Social):Observable<Social>{
     return this.httpClient.put<any>(this.SocialUrl+'editar', social);
   }
   //borrar
   public delete(id:number):Observable<any>{
     return this.httpClient.delete<any>(this.SocialUrl+ `delete/${id}`)
   }
}
