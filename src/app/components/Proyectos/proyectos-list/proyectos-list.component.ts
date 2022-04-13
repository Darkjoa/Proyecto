import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/Service/proyectos.service';
import { TokenService } from 'src/app/Service/token.service';
import { FormProyectosComponent } from '../form-proyectos/form-proyectos.component';

@Component({
  selector: 'app-proyectos-list',
  templateUrl: './proyectos-list.component.html',
  styleUrls: ['./proyectos-list.component.css']
})
export class ProyectosListComponent {
  @ViewChild("formProyectos") formProyectos!: FormProyectosComponent;
  @Input() proyectos: Proyectos[]=[];
  isLogged = false;
  isAdmin = false;
  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) 
  {this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin(); }
  toggleFormProyectos(){
    this.formProyectos.toggleForm();
  }
  
  crear(proyectos: Proyectos){
    if(proyectos.id){
      this.proyectosService.update(proyectos).subscribe(ProyectoEditado =>{
        this.ActualizarProyecto(ProyectoEditado);
      });
    } else{
      this.proyectosService.save(proyectos).subscribe((nuevoProyecto) =>{
        this.proyectos.push(nuevoProyecto);
      })
    }
  }

  borrarProyecto(id:number){
    this.proyectosService.delete(id).subscribe(()=>{
      this.proyectos = this.proyectos.filter((t)=> t.id !== id)
    });
  }
  ActualizarProyecto(proyectos: Proyectos){
    for(let i=0; i<this.proyectos.length; i){
      if(this.proyectos[i].id === proyectos.id){
        this.proyectos[i]= proyectos;
        break;
      }
    }
  }

  editarProyecto(proyectos: Proyectos){
    this.formProyectos.setProyecto(proyectos);
    this.toProyectos();
  }
  toProyectos(){
    document.getElementById("proyectos")!.scrollIntoView();
  }
}
