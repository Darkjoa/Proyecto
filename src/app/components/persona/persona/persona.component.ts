import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Persona } from '../../../Models/persona';
import { PersonasService } from '../../../Service/personas.service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  isLogged = false;
  isAdmin = false;
  @Output() editarPersona: EventEmitter<Persona> = new EventEmitter
  persona: Persona={
    nombre: '',
    apellido: '',
    edad: 0,
    imaUrl: '',
    portadaImaUrl: '',
    estudios: [],
    experiencia: [],
    habilidades: [],
    sobremi: [],
    social: [],
    proyectos: [],
};
  constructor( private personaService: PersonasService, 
    private tokenService: TokenService) 
    {
      this.verPersona();
      this.isLogged = this.tokenService.isLogged();
      this.isAdmin = this.tokenService.isAdmin();
  }
  verPersona(): void {
    this.personaService.verPersona(1)
    .subscribe
    ((persona)=>(this.persona = persona));
  }
  editar(): void {
    this.editarPersona.emit(this.persona);
  }
  onLogOut(): void {
    this.tokenService.logOut();
  }
}