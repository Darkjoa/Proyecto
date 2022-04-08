import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/Models/proyectos';

@Component({
  selector: 'app-form-proyectos',
  templateUrl: './form-proyectos.component.html',
  styleUrls: ['./form-proyectos.component.css']
})
export class FormProyectosComponent {
  mostrarFormulario: boolean= false;
  @Output() nuevoProyecto:EventEmitter<Proyectos> = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      id:[0],
      nombre: ['', [Validators.required]],
      imagenProyectoUrl: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });
  }

  onSubmit(event: Event){
    event.preventDefault;
    if(this.form.valid){
      this.nuevoProyecto.emit(this.form.value);
      this.form.reset();
      this.mostrarFormulario=false;

    }else{
      console.log('form invalido')
    }
  }

  setProyecto(proyectos: Proyectos){
    this.form.patchValue({
      id: proyectos.id,
      nombre: proyectos.nombre,
      imagenProyectoUrl: proyectos.imagenProyectoUrl,
      url: proyectos.url
    });
    this.mostrarFormulario= true;
  }
  Cancelar(): void{
    this.form.reset();
    this.mostrarFormulario=false;
  }
  toggleForm(){
    this.mostrarFormulario = !this.mostrarFormulario;
  }

}
