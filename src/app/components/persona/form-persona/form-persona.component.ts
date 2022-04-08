import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Models/persona';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent{
  mostrarFormulario: boolean = false;
  @Output() nuevaPersona: EventEmitter<Persona> = new EventEmitter();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id:[0],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      imaUrl:['', [Validators.required]],
      portadaImaUrl: ['', [Validators.required]],
      edad: [0, [Validators.required]],
    });
   }
   onSubmit(event: Event){
     event.preventDefault;
     if(this.form.valid){
      this.nuevaPersona.emit(this.form.value);
       this.form.reset();
       this.mostrarFormulario=false; 
     }else{
       console.log('form invalido')
     }
   }
   Cancelar(): void{
    this.form.reset();
    this.mostrarFormulario=false;
   }
   setPersona(persona: Persona){
     this.form.patchValue({
       id: persona.id,
       nombre: persona.nombre,
       apellido: persona.apellido,
       imaUrl: persona.imaUrl,
       portadaImaUrl: persona.portadaImaUrl,
       edad: persona.edad,
     });
     this.mostrarFormulario = true;
   }
   toggleForm(){
     this.mostrarFormulario = !this.mostrarFormulario;
   }
}
