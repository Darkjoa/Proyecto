import { Component, Input, ViewChild } from '@angular/core';
import { Persona } from 'src/app/Models/persona';
import { PersonasService } from 'src/app/Service/personas.service';
import { TokenService } from 'src/app/Service/token.service';
import { FormPersonaComponent } from '../form-persona/form-persona.component';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent {
@ViewChild("formPersona") formPersona!: FormPersonaComponent;
 isLogged = false;
 isAdmin = false;
  constructor(private personaService: PersonasService, private tokenService: TokenService) { 
      this.isLogged = this.tokenService.isLogged();
      this.isAdmin = this.tokenService.isAdmin();
  }

  toggleFormPersona(){
    this.formPersona.toggleForm();
  }
  
  crear(persona: Persona){
    if(persona.id){
      this.personaService.update(persona)
      .subscribe((personaEditada)=>{        
        persona = personaEditada;
      });
    }    
  }
  editarPersona(persona: Persona){
    this.toPersona();
    this.formPersona.setPersona(persona);
  }
  toPersona(){
    document.getElementById("persona")!.scrollIntoView();
  }
}
