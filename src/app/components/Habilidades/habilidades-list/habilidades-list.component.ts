import { Component, Input,  ViewChild } from '@angular/core';
import { Habilidades } from 'src/app/Models/habilidades';
import { HabilidadesService } from 'src/app/Service/habilidades.service';
import { TokenService } from 'src/app/Service/token.service';
import { FormHabilidadesComponent } from '../form-habilidades/form-habilidades.component';

@Component({
  selector: 'app-habilidades-list',
  templateUrl: './habilidades-list.component.html',
  styleUrls: ['./habilidades-list.component.css']
})
export class HabilidadesListComponent{
@ViewChild("formHabilidades") formHabilidades!: FormHabilidadesComponent;
@Input() habilidades: Habilidades[]=[];
isLogged = false;
isAdmin = false;
  constructor(private tokenService: TokenService, private habilidadesService: HabilidadesService) 
  {this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin(); }

  toggleFormHabilidades(){
    this.formHabilidades.toggleForm();
  }

  crear(habilidades:Habilidades){
    if(habilidades.id){
      this.habilidadesService.update(habilidades)
      .subscribe((habilidadEditada)=>{
        this.ActualizarHabilidad(habilidadEditada)
      });
    }
    else{
      this.habilidadesService.save(habilidades)
      .subscribe((h)=>
      this.habilidades.push(h)
      );
    }
  }

  borrarHabilidad(id:number){
    this.habilidadesService.delete(id)
    .subscribe(()=>{
      this.habilidades = this.habilidades.filter((t)=> t.id !== id)
    });
  }


  ActualizarHabilidad(habilidades:Habilidades){
    for(let i=0; i<this.habilidades.length; i++){
      if(this.habilidades[i].id === habilidades.id){
        this.habilidades[i] = habilidades;
        break;
      }
    }
  }
  editarHabilidad(habilidades:Habilidades){
    this.formHabilidades.setHabilidad(habilidades);
  }
}
