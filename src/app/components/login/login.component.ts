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
    this.nombreUsuario ="user";
    this.password = "user";
    this.onLogin()
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.toastr.success("Iniciando sesion, espere un momento")
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