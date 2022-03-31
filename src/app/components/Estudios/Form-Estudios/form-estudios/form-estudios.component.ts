import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudios } from 'src/app/Models/estudios';

@Component({
  selector: 'app-form-estudios',
  templateUrl: './form-estudios.component.html',
  styleUrls: ['./form-estudios.component.css']
})
export class FormEstudiosComponent {
  mostrarFormulario: boolean= false;
  
  @Output() nuevoEstudio: EventEmitter<Estudios> = new EventEmitter();
  
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [0],
      titulo: ['', [Validators.required]],
      escuela: ['', [Validators.required]],
      nivel: ['', [Validators.required]],
      inicio: [new Date(),[Validators.required]],
      final: [new Date(), [Validators.required]],
    });
   }

  onSubmit(event: Event){
    event.preventDefault;
    if(this.form.valid){
      this.nuevoEstudio.emit(this.form.value);
      this.form.reset();
      this.mostrarFormulario=false;
    } else{
      console.log('form invalido')
    }
  }
  
  setEstudio(estudios: Estudios){
    this.form.patchValue({
      id: estudios.id,
      titulo: estudios.titulo,
      escuela: estudios.escuela,
      nivel: estudios.nivel,
      inicio: estudios.inicio,
      final: estudios.final,
    });
    this.mostrarFormulario = true;
  }
  toggleForm(){
    this.mostrarFormulario = !this.mostrarFormulario;
  }

}
