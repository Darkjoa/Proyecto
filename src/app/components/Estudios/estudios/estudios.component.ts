import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudios } from '../../../Models/estudios';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent{
@Input() estudios!:Estudios;
@Output() borrarEstudios: EventEmitter <number> = new EventEmitter();
@Output() editarEstudios: EventEmitter <Estudios> = new EventEmitter();
  constructor() { }

  borrar(): void {

    this.borrarEstudios.emit(this.estudios.id);
  }
  editar(): void {
    this.editarEstudios.emit(this.estudios);
  }
}
