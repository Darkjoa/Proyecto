import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{interceptorProvider} from './Service/interceptors/interceptor.service'

import { FooterComponent } from './components/footer/footer.component';
import { FrontPageComponent } from './Front/front-page/front-page.component';

//Persona
import { PersonaComponent } from './components/persona/persona/persona.component';
import { FormPersonaComponent } from './components/persona/form-persona/form-persona.component';
import { PersonaListComponent } from './components/persona/persona-list/persona-list.component';

//Estudios
import { EstudiosComponent } from './components/Estudios/estudios/estudios.component';
import { FormEstudiosComponent } from './components/Estudios/Form-Estudios/form-estudios/form-estudios.component';
import { EstudiosListComponent } from './components/Estudios/estudios-list/estudios-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Experiencia
import { ExperienciaComponent } from './components/Experiencia/experiencia/experiencia.component';
import { ExperienciaListComponent } from './components/Experiencia/experiencia-list/experiencia-list.component';
import { FormExperienciaComponent } from './components/Experiencia/form-experiencia/form-experiencia.component';
//Habilidades
import { FormHabilidadesComponent } from './components/Habilidades/form-habilidades/form-habilidades.component';
import { HabilidadesComponent } from './components/Habilidades/habilidades/habilidades.component';
import { HabilidadesListComponent } from './components/Habilidades/habilidades-list/habilidades-list.component';
import { SobremiComponent } from './components/Sobremi/sobremi/sobremi.component';
import { SobremiListComponent } from './components/Sobremi/sobremi-list/sobremi-list.component';
import { FormSobremiComponent } from './components/Sobremi/form-sobremi/form-sobremi.component';
import { SocialComponent } from './components/social/social/social.component';
import { FormSocialComponent } from './components/social/form-social/form-social.component';
import { SocialListaComponent } from './components/social/social-lista/social-lista.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProyectosComponent } from './components/Proyectos/proyectos/proyectos.component';
import { ProyectosListComponent } from './components/Proyectos/proyectos-list/proyectos-list.component';
import { FormProyectosComponent } from './components/Proyectos/form-proyectos/form-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiosListComponent,
    FormEstudiosComponent,
    EstudiosComponent,
    PersonaComponent,
    FormPersonaComponent,
    PersonaListComponent,
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
    SocialComponent,
    FormSocialComponent,
    SocialListaComponent,
    MenuComponent,
    IndexComponent,
    LoginComponent,
    RegistroComponent,
    ProyectosComponent,
    ProyectosListComponent,
    FormProyectosComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
        // Specify ng-circle-progress as an import
        NgCircleProgressModule.forRoot({
          // set defaults here
          radius: 100,
          outerStrokeWidth: 16,
          innerStrokeWidth: 8,
          outerStrokeColor: "#78C000",
          innerStrokeColor: "#C7E596",
          animationDuration: 300,

        })

  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
