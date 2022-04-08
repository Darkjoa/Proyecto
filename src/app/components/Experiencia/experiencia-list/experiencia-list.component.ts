import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Experiencia } from 'src/app/Models/experiencia';
import { ExperienciaService } from 'src/app/Service/experiencia.service';
import { TokenService } from 'src/app/Service/token.service';
import { FormExperienciaComponent } from '../form-experiencia/form-experiencia.component';

@Component({
  selector: 'app-experiencia-list',
  templateUrl: './experiencia-list.component.html',
  styleUrls: ['./experiencia-list.component.css']
})
export class ExperienciaListComponent{
  @ViewChild("formExperiencia") formExperiencia!: FormExperienciaComponent;
  @Input() experiencia:Experiencia[]=[];
  isLogged = false;
  isAdmin = false;
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { 
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }

  toggleFormExperiencia(){
    this.formExperiencia.toggleForm();
  }

  crear(experiencia:Experiencia){
  if(experiencia.id){
    this.experienciaService.update(experiencia).subscribe
    ((experienciaEditado)=> {
      this.ActualizarExperiencia(experienciaEditado)
    });
}
else{
  this.experienciaService
    .save(experiencia)
    .subscribe((nuevaExperiencia)=>
    this.experiencia.push(nuevaExperiencia)
    );
}

    
  }
  borrarExperiencia(id:number){
  this.experienciaService.delete(id).
  subscribe(()=>{
    this.experiencia = this.experiencia.filter((t)=> t.id !== id)
  });


  }
  ActualizarExperiencia(experiencia:Experiencia){
    for(let i=0; i<this.experiencia.length; i++){
      if(this.experiencia[i].id === experiencia.id){
      this.experiencia[i]= experiencia;
      break;
    }
      
    }
  }
  editarExperiencia(experiencia:Experiencia){
    this.formExperiencia.setExperiencia(experiencia);
  }
}