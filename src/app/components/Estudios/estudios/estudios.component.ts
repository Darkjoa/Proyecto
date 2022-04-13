import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Estudios } from 'src/app/Models/estudios';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent{
@Input() estudios!:Estudios;

@Output() borrarEstudios: EventEmitter <number> = new EventEmitter();
@Output() editarEstudios: EventEmitter <Estudios> = new EventEmitter();
isLogged = false;
isAdmin = false;
  constructor(private tokenService: TokenService) {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
   }

  borrar(): void {
    if(this.isAdmin){
      this.borrarEstudios.emit(this.estudios.id);
    }
    
  }
  editar(): void {
    if(this.isAdmin){
      this.editarEstudios.emit(this.estudios);
    }
  }
}
