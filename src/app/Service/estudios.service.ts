import { Injectable } from '@angular/core';
//Importar httpclient, obserbable y la clase de modelo a usar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudios } from '../Models/estudios';
@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  //se conecta el service
  EstudiosURL = 'http://localhost:8080/estudios/'
  constructor(private httpClient: HttpClient) { }


  //metodos de backend de la clase estudiosController
  //Ver estudios
  public verEstudios():Observable<Estudios[]> {
    return this.httpClient.get<Estudios[]>(this.EstudiosURL +'ver');
  }
  //buscar
  public buscarEstudio(id:number):Observable<any>{
    return this.httpClient.get<any>(this.EstudiosURL+ `buscar/${id}`)
  }

  //Crear
  public save(estudios:Estudios):Observable<Estudios>{
    return this.httpClient.post<Estudios>(this.EstudiosURL+'new', estudios);
  }
    //Actualizar
    public update(estudios:Estudios):Observable<Estudios>{
      return this.httpClient.put<any>(this.EstudiosURL+'editar', estudios);
    }
    //borrar
    public delete(id:number):Observable<any>{
      return this.httpClient.delete<any>(this.EstudiosURL+ `delete/${id}`)
    }

}