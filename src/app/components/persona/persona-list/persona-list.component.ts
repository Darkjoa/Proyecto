import { Component, Input, ViewChild } from '@angular/core';
import { Persona } from 'src/app/Models/persona';
import { PersonasService } from 'src/app/Service/personas.service';
import { FormPersonaComponent } from '../form-persona/form-persona.component';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent {
@ViewChild("formPersona") formPersona!: FormPersonaComponent;

  constructor(private personaService: PersonasService) { }
  toggleFormPersona(){
    this.formPersona.toggleForm();
  }
  editarPersona(persona: Persona){
    this.formPersona.setPersona(persona)
  }
}
