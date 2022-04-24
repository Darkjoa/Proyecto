import { Injectable } from '@angular/core';
//Importar httpclient, obserbable y la clase de modelo a usar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../Models/habilidades';
@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  //se conecta el service
  HabilidadesURL = 'https://portfoliobackjoaquin.herokuapp.com/habilidades/'
  constructor(private httpClient: HttpClient) { }


  //metodos de backend de la clase habilidadesController
  //Ver estudios habilidades
  public verHabilidades():Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.HabilidadesURL +'ver');
  }
  //Crear
  public save(habilidades:Habilidades):Observable<Habilidades>{
    return this.httpClient.post<Habilidades>(this.HabilidadesURL+'new', habilidades);
  }
  public buscarHabilidades(id:number):Observable<any>{
    return this.httpClient.get<any>(this.HabilidadesURL+ `buscar/${id}`)
  }
    //Actualizar
    public update(habilidades:Habilidades):Observable<Habilidades>{
      return this.httpClient.put<any>(this.HabilidadesURL+'editar', habilidades);
    }
    //borrar
    public delete(id:number):Observable<any>{
      return this.httpClient.delete<any>(this.HabilidadesURL+ `delete/${id}`)
    }
}
