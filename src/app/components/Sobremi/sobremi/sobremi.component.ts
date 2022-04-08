import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sobremi } from 'src/app/Models/sobremi';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
@Input() sobremi!: Sobremi;
@Output() borrarSobremi: EventEmitter<number>= new EventEmitter();
@Output() editarSobremi: EventEmitter<Sobremi>= new EventEmitter();
isLogged = false;
isAdmin = false;
  constructor(private tokenService: TokenService) {       
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();}

  borrar(): void {
    this.borrarSobremi.emit(this.sobremi.id);
  }
  editar(): void {
    this.editarSobremi.emit(this.sobremi);
  }


}
