import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Habilidades } from 'src/app/Models/habilidades';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
@Input() habilidades!: Habilidades;
@Output() borrarHabilidad: EventEmitter <number> = new EventEmitter();
@Output() editarHabilidad: EventEmitter <Habilidades> = new EventEmitter();
  constructor() { }

  borrar(): void{
    this.borrarHabilidad.emit(this.habilidades.id);
  }
  editar():void {
    this.editarHabilidad.emit(this.habilidades);
  }

}
