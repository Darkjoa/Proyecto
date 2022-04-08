import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Social } from 'src/app/Models/social';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent{
  isLogged = false;
  isAdmin = false;
@Input() social!:Social;
@Output() editarSocial: EventEmitter<Social> = new EventEmitter();
  constructor(private tokenService: TokenService) {      
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin(); }

  editar(): void{
    this.editarSocial.emit(this.social);
  }

}
