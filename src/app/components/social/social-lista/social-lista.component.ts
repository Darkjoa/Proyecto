import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Social } from 'src/app/Models/social';
import { SocialService } from 'src/app/Service/social.service';
import { FormSocialComponent } from '../form-social/form-social.component';

@Component({
  selector: 'app-social-lista',
  templateUrl: './social-lista.component.html',
  styleUrls: ['./social-lista.component.css']
})
export class SocialListaComponent {
@ViewChild("formSocial") formSocial!: FormSocialComponent;
@Input() social: Social[]=[];

  constructor(private socialService: SocialService) { }

  toggleFormSocial(){
    this.formSocial.toggleForm();
  }

  crear(social:Social){
    if(social.id){
      this.socialService.update(social)
      .subscribe((socialEditado)=>{
        this.ActualizarSocial(socialEditado)
      });
    }
    else{
      this.socialService.save(social)
      .subscribe((nuevoSocial)=>{
        this.social.push(nuevoSocial)
      })
    }
  }

  ActualizarSocial(social: Social){
    for(let i=0; i<this.social.length; i++){
      if(this.social[i].id === social.id){
        this.social[i]= social;
        break;
      }
    }
  }
  editarSocial(social:Social){
    this.formSocial.setSocial(social);
  }
}
