import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Habilidades } from 'src/app/Models/habilidades';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  isLogged = false;
  isAdmin = false;
@Input() habilidades!: Habilidades;
@Output() borrarHabilidad: EventEmitter <number> = new EventEmitter();
@Output() editarHabilidad: EventEmitter <Habilidades> = new EventEmitter();
  constructor(private tokenService: TokenService) {       this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();}

  borrar(): void{
    this.borrarHabilidad.emit(this.habilidades.id);
  }
  editar():void {
    this.editarHabilidad.emit(this.habilidades);
  }

}
