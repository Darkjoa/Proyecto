import { Component, Input, OnInit } from '@angular/core';

import { EstudiosService } from '../../Service/estudios.service';
import { Estudios } from '../../Models/estudios';
@Component({
  selector: 'app-estudios-list',
  templateUrl: './estudios-list.component.html',
  styleUrls: ['./estudios-list.component.css']
})
export class EstudiosListComponent implements OnInit {

  @Input() estudios: Estudios[]=[];

  mostrarFormulario: boolean = false;

  constructor(private estudiosService: EstudiosService) { }



  ngOnInit(): void {
    
  }

  toggleForm(){
    this.mostrarFormulario =!this.mostrarFormulario;
  }

  crear(estudios: Estudios){
    this.estudiosService
    .save(estudios)
    .subscribe((nuevoEstudio)=>
    this.estudios.push(nuevoEstudio)
    );
  }

}
