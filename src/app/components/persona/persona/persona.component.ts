import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/Models/social';
import { SocialService } from 'src/app/Service/social.service';
import { Persona } from '../../../Models/persona';
import { PersonasService } from '../../../Service/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
persona : Persona = {
  nombre : '',
  apellido: '',
  imaUrl: '',
  portadaImaUrl: '',
  edad: 0,
  estudios:[],
  experiencia:[],
  habilidades:[],
  sobremi:[],
  social:[]

}

;
  constructor( private personaService: PersonasService, private socialService: SocialService) { 
    this.personaService.verPersona(1)
    .subscribe
    ((persona)=>(this.persona = persona));
  }



}
