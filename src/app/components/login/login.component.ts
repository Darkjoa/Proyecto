import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { TokenService } from 'src/app/Service/token.service';
import { LoginUsuario } from 'src/app/Models/login-usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  isLogged = false;
  
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    
  }
  invitado(){
    this.nombreUsuario ="User";
    this.password = "User";
    this.onLogin()
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.toastr.success("Iniciando sesion, espere un momento"),  {
      timeOut: 1000,  positionClass: 'toast-top-center'}
    this.authService.login(this.loginUsuario).subscribe(
      
      data => {
        
        this.tokenService.setToken(data.token);
        this.router.navigate(['/index']);

      },
      err => {
        this.toastr.error('Credenciales incorrectas','Error',  {
          timeOut: 1000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
}