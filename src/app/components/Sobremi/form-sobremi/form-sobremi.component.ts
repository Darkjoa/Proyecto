import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sobremi } from 'src/app/Models/sobremi';

@Component({
  selector: 'app-form-sobremi',
  templateUrl: './form-sobremi.component.html',
  styleUrls: ['./form-sobremi.component.css']
})
export class FormSobremiComponent{
  mostrarFormulario: boolean = false;
  @Output() nuevoSobremi: EventEmitter<Sobremi>= new EventEmitter();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id:[0],
      nombreDato: ['',[Validators.required]],
      dato:['',[Validators.required]],
    })
   }

   onSubmit(event: Event){
     event.preventDefault;
     if(this.form.valid){
       this.nuevoSobremi.emit(this.form.value);
       this.form.reset();
       this.mostrarFormulario= false;
     } else{
       console.log('form invalido')
     }
   }

   setSobremi(sobremi: Sobremi){
     this.form.patchValue({
       id: sobremi.id,
       nombreDato: sobremi.nombreDato,
       dato: sobremi.dato
     });
     this.mostrarFormulario = true;
   }
   toggleForm(){
     this.mostrarFormulario = !this.mostrarFormulario;
   }
}
