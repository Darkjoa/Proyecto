import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Experiencia} from 'src/app/Models/experiencia';
@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent {

  mostrarFormulario: boolean = false;
  
  @Output() nuevaExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id:[0],
      empresa:['', [Validators.required]],
      cargo:['', [Validators.required]],
      inicio:[new Date(), [Validators.required]],
      final:[new Date(), [Validators.required]]
    })
   }
   onSubmit(event: Event){
     event.preventDefault;
     if(this.form.valid){
       this.nuevaExperiencia.emit(this.form.value);
       this.form.reset();
       this.mostrarFormulario=false;
     }else{
       console.log('form invalido')
     }
   }
   setExperiencia(experiencia:Experiencia){
     this.form.patchValue({
       id: experiencia.id,
       empresa:experiencia.empresa,
       cargo: experiencia.cargo,
       inicio: experiencia.inicio,
       final: experiencia.final,
     });
     this.mostrarFormulario = true;
   }
   Cancelar(): void{
    
    this.form.reset();
    this.mostrarFormulario=false;
    
   }
   toggleForm(){
     this.mostrarFormulario = !this.mostrarFormulario;
   }

   

}
