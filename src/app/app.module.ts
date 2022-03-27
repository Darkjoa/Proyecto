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
import { ExperienciaComponent } from './components/Experiencia/experiencia/experiencia.component';
import { ExperienciaListComponent } from './components/Experiencia/experiencia-list/experiencia-list.component';
import { FormExperienciaComponent } from './components/Experiencia/form-experiencia/form-experiencia.component';
import { FormHabilidadesComponent } from './components/Habilidades/form-habilidades/form-habilidades.component';
import { HabilidadesComponent } from './components/Habilidades/habilidades/habilidades.component';
import { HabilidadesListComponent } from './components/Habilidades/habilidades-list/habilidades-list.component';
import { SobremiComponent } from './components/Sobremi/sobremi/sobremi.component';
import { SobremiListComponent } from './components/Sobremi/sobremi-list/sobremi-list.component';
import { FormSobremiComponent } from './components/Sobremi/form-sobremi/form-sobremi.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiosListComponent,
    FormEstudiosComponent,
    EstudiosComponent,
    PersonaComponent,
    FooterComponent,
    FrontPageComponent,
    ExperienciaComponent,
    ExperienciaListComponent,
    FormExperienciaComponent,
    FormHabilidadesComponent,
    HabilidadesComponent,
    HabilidadesListComponent,
    SobremiComponent,
    SobremiListComponent,
    FormSobremiComponent,
    
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
