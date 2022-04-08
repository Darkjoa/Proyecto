import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Social } from 'src/app/Models/social';


@Component({
  selector: 'app-form-social',
  templateUrl: './form-social.component.html',
  styleUrls: ['./form-social.component.css']
})
export class FormSocialComponent{

  mostrarFormulario: boolean = false;

@Output() nuevoSocial: EventEmitter<Social> = new EventEmitter();

form: FormGroup;

constructor(private formBuilder: FormBuilder) {
  this.form = this.formBuilder.group({
    id: [0],
    facebook: ['', [Validators.required]],
    instagram: ['', [Validators.required]],
    github: ['', [Validators.required]],
    email: ['', [Validators.required]],
    linkedin: ['', [Validators.required]],
  })
 }

 onSubmit(event: Event){
   event.preventDefault;
   if(this.form.valid){
     this.nuevoSocial.emit(this.form.value);
     this.form.reset();
     this.mostrarFormulario=false;
   } else{
     console.log('form invalido')
   }
 }
 Cancelar(): void{
    
  this.form.reset();
  this.mostrarFormulario=false;
  
 }
 setSocial(social: Social){
   this.form.patchValue({
     id: social.id,
     facebook: social.facebook,
     instagram: social.instagram,
     github: social.github,
     email: social.email,
     linkedin: social.linkedin,
   });
   this.mostrarFormulario= true;
 }

 toggleForm(){
   this.mostrarFormulario = !this.mostrarFormulario;
 }
}
