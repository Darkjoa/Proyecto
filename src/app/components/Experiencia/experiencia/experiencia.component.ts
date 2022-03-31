import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/Models/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent{
@Input() experiencia!:Experiencia;
@Output() borrarExperiencia: EventEmitter<number> = new EventEmitter();
@Output() editarExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  constructor() { }

  borrar():void {
    this.borrarExperiencia.emit(this.experiencia.id);
  }
  editar():void {
    this.editarExperiencia.emit(this.experiencia);
  }

}
