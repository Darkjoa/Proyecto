import { Component, Input, OnInit } from '@angular/core';
import { Estudios } from '../../Models/estudios';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
@Input() estudios!:Estudios;
  constructor() { }

  ngOnInit(): void {
  }

}
