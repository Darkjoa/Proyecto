import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Sobremi } from 'src/app/Models/sobremi';
import { SobremiService } from 'src/app/Service/sobremi.service';
import { FormSobremiComponent } from '../form-sobremi/form-sobremi.component';

@Component({
  selector: 'app-sobremi-list',
  templateUrl: './sobremi-list.component.html',
  styleUrls: ['./sobremi-list.component.css']
})
export class SobremiListComponent{
@ViewChild("formSobreMi") formSobreMi!: FormSobremiComponent;
@Input() sobremi: Sobremi[]=[];

  constructor(private sobremiService: SobremiService) { }
  toggleFormSobreMi(){
    this.formSobreMi.toggleForm();
  }
  crear(sobremi:Sobremi){
    if(sobremi.id){
      this.sobremiService.update(sobremi).subscribe
      ((sobremiEditado)=>{
        this.ActualizarSobremi(sobremiEditado)
      });
    }else{
      this.sobremiService.save(sobremi).subscribe
      ((nuevoSobremi)=> this.sobremi.push(nuevoSobremi));
    }
  }

  borrarSobremi(id:number){
    this.sobremiService.delete(id).
    subscribe(()=>{this.sobremi = this.sobremi.filter((t)=> t.id !==id)})
  }
  ActualizarSobremi(sobremi:Sobremi){
    for(let i=0; i<this.sobremi.length; i++){
      if(this.sobremi[i].id === sobremi.id){
        this.sobremi[i]= sobremi;
        break;
      }
    }
  }
  editarSobremi(sobremi:Sobremi){
    this.formSobreMi.setSobremi(sobremi);
  }

}
