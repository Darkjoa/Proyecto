import { Component, Input, OnInit } from '@angular/core';
import { Estudios } from '../../Models/estudios';

@Component({
  selector: 'app-frente-estudios',
  templateUrl: './frente-estudios.component.html',
  styleUrls: ['./frente-estudios.component.css']
})
export class FrenteEstudiosComponent implements OnInit {
  @Input() estudios: Estudios[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
