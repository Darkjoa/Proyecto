import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import {LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FrontPageComponent } from './Front/front-page/front-page.component';
import { GuardService } from './Service/Guards/guard.service';
import { LoginGuard } from './Service/Guards/login.guard';
const routes: Routes = [
  { path: 'index', component: IndexComponent, canActivate:[GuardService], data:{expectedRol: ['admin', 'user']}},
  { path: '', component: LoginComponent, canActivate:[LoginGuard], data:{expectedRol: ['admin', 'user']}},
  { path: 'registro', component: RegistroComponent, canActivate:[LoginGuard], data:{expectedRol: ['admin', 'user']}},
  {path:'Frente', component: FrontPageComponent, canActivate:[GuardService],  data:{expectedRol: ['admin', 'user']}},
  {path: '**', redirectTo: 'Frente', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
