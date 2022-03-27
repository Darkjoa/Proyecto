import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Models/persona';
import { PersonasService } from '../../Service/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
persona : Persona = {
  nombre : '',
  apellido: '',
  imaUrl: '',
  edad: 0,
  estudios:[]
};
  constructor( private personaService: PersonasService) { 
    this.personaService.verPersona(1)
    .subscribe
    ((persona)=>(this.persona = persona));
  }


  ngOnInit(): void {
  }

}
