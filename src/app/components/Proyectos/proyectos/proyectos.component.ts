import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyectos } from 'src/app/Models/proyectos';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent{
  @Input() proyectos!:Proyectos;
  @Output() borrarProyectos: EventEmitter<number> = new EventEmitter();
  @Output() editarProyectos: EventEmitter<Proyectos> = new EventEmitter();
  isLogged = false;
  isAdmin = false;
  
  
  constructor(private tokenService: TokenService) {       
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();}

  borrar(): void {
    this.borrarProyectos.emit(this.proyectos.id);
  }
  editar(): void {
    this.editarProyectos.emit(this.proyectos);
  }

}
