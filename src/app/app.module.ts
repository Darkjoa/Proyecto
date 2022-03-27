import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FooterComponent } from './components/footer/footer.component';
import { FrontPageComponent } from './Front/front-page/front-page.component';
import { PersonaComponent } from './components/persona/persona/persona.component';
import { EstudiosComponent } from './components/Estudios/estudios/estudios.component';
import { FormEstudiosComponent } from './components/Estudios/Form-Estudios/form-estudios/form-estudios.component';
import { EstudiosListComponent } from './components/Estudios/estudios-list/estudios-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrenteEstudiosComponent } from './components/estudios/frente-estudios/frente-estudios.component';
@NgModule({
  declarations: [
    AppComponent,
    EstudiosListComponent,
    FormEstudiosComponent,
    EstudiosComponent,
    PersonaComponent,
    FooterComponent,
    FrontPageComponent,
    FrenteEstudiosComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
