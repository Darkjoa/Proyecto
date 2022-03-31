import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Social } from 'src/app/Models/social';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent{
@Input() social!:Social;
@Output() editarSocial: EventEmitter<Social> = new EventEmitter();
  constructor() { }

  editar(): void{
    this.editarSocial.emit(this.social);
  }

}
