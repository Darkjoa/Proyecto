import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/Models/experiencia';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent{
  isLogged = false;
  isAdmin = false;
@Input() experiencia!:Experiencia;
@Output() borrarExperiencia: EventEmitter<number> = new EventEmitter();
@Output() editarExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  constructor(private tokenService: TokenService) {      
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin(); }

  borrar():void {
    this.borrarExperiencia.emit(this.experiencia.id);
  }
  editar():void {
    this.editarExperiencia.emit(this.experiencia);
  }

}
