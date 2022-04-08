import { Component, Input,  ViewChild,  } from '@angular/core';
import { EstudiosService } from 'src/app/Service/estudios.service';
import { Estudios } from 'src/app/Models/estudios';
import { FormEstudiosComponent } from '../Form-Estudios/form-estudios/form-estudios.component';
import { TokenService } from 'src/app/Service/token.service';
@Component({
  selector: 'app-estudios-list',
  templateUrl: './estudios-list.component.html',
  styleUrls: ['./estudios-list.component.css']
})
export class EstudiosListComponent{
  @ViewChild("formEstudios") formEstudios!: FormEstudiosComponent;
  @Input() estudios: Estudios[]=[];
  isLogged = false;
  isAdmin = false;
    constructor(private tokenService: TokenService, private estudiosService: EstudiosService) {
      this.isLogged = this.tokenService.isLogged();
      this.isAdmin = this.tokenService.isAdmin();
     }
  toggleFormEstudios(){
    this.formEstudios.toggleForm();
  }
  
  crear(estudios: Estudios){
  if(estudios.id){
    this.estudiosService.update(estudios)
    .subscribe
    ((estudioEditado)=> {
      this.ActualizarEstudio(estudioEditado)
    });
}else{
  this.estudiosService
    .save(estudios)
    .subscribe((nuevoEstudio)=>
    this.estudios.push(nuevoEstudio)
    );
}
  }
  borrarEstudio(id:number){
  this.estudiosService.delete(id).
  subscribe(()=>{
    this.estudios = this.estudios.filter((t)=> t.id !== id)
  });

  }
  
  ActualizarEstudio(estudios:Estudios){
    for(let i=0; i<this.estudios.length; i++){
      if(this.estudios[i].id === estudios.id){
        this.estudios[i]= estudios;
        break;
      }
    }
  }
  editarEstudio(estudios:Estudios){
    this.formEstudios.setEstudio(estudios);
    
  }
}
