import { Injectable } from '@angular/core';
//Importar httpclient, obserbable y la clase de modelo a usar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../Models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  //se conecta el service
  personaURL = 'http://localhost:8080/persona/'
  constructor(private httpClient: HttpClient) { }


  //metodos de backend de la clase persona
  //Ver Personas
  public verPersona(id:number):Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL +`ver/${id}`);
  }
  //Crear
  public save(persona:Persona):Observable<Persona>{
    return this.httpClient.post<Persona>(this.personaURL+'new', persona);
  }
    //Actualizar
    public update(id:number, persona:Persona):Observable<Persona>{
      return this.httpClient.put<any>(this.personaURL+`editar/${id}`, persona);
    }
    //borrar
    public delete(id:number):Observable<any>{
      return this.httpClient.delete<any>(this.personaURL+ `delete/${id}`)
    }
}
