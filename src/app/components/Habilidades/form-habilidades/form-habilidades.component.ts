import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/Models/habilidades';

@Component({
  selector: 'app-form-habilidades',
  templateUrl: './form-habilidades.component.html',
  styleUrls: ['./form-habilidades.component.css']
})
export class FormHabilidadesComponent{
  mostrarFormulario: boolean = false;

  @Output() nuevaHabilidad: EventEmitter<Habilidades> = new EventEmitter();
  
  form: FormGroup;

  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id:[0],
      habilidad:['', [Validators.required]],
      porcentaje:[0,[Validators.required]],
      tipo:['', [Validators.required]],
    });
   }

   onSubmit(event: Event){
    event.preventDefault;
    if(this.form.valid){
      this.nuevaHabilidad.emit(this.form.value);
      this.form.reset();
      this.mostrarFormulario=false;
    } else{
      console.log('form invalido')
    }}
    setHabilidad(habilidades:Habilidades){
      this.form.patchValue({
        id: habilidades.id,
        habilidad: habilidades.habilidad,
        porcentaje: habilidades.porcentaje,
        tipo: habilidades.tipo
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
