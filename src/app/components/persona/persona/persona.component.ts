import { Component, ViewChild } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Persona } from '../../../Models/persona';
import { PersonasService } from '../../../Service/personas.service';
import { FormPersonaComponent } from '../form-persona/form-persona.component';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @ViewChild("formPersona") formPersona!: FormPersonaComponent;
 
  isLogged = false;
  isAdmin = false;
  
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

  editarPersona(){
    this.formPersona.setPersona(this.persona);
  }
  verPersona(): void {
    this.personaService.verPersona(1)
    .subscribe
    ((data)=>(this.persona = data));
  }
  editar(): void {
    this.editarPersona();
  }
  toggleFormPersona(){
    this.formPersona.toggleForm();
  }
  
  crear(persona: Persona){
    if(persona.id){
      this.personaService.update(persona)
      .subscribe((personaEditada)=>{        
        this.persona = personaEditada;
      });
    }    
  }


  toPersona(){
    document.getElementById("persona")!.scrollIntoView();
  }
  onLogOut(): void {
    this.tokenService.logOut();
  }

  toEstudiosExperiencia(){
    document.getElementById("estudios_experiencia")!.scrollIntoView()
  }
  toHabilidades(){
    document.getElementById("habilidades")!.scrollIntoView()
  }
  toSobreMi(){
    document.getElementById("sobremi")!.scrollIntoView()
  }
  toProyectos(){
    document.getElementById("proyectos")!.scrollIntoView()
  }
}
