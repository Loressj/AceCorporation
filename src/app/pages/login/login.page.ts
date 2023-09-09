import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formLogin = {
    correo: "",
    password: ""
  }
  
  currentYear: number = new Date().getFullYear(); // Obtiene el año actual en el constructor

  constructor(private router: Router) { }

  iniciarSesion() {
    console.log("correo: " + this.formLogin.correo);
    console.log("password: " + this.formLogin.password);

    let datosEnviar: NavigationExtras = {
      queryParams: {
        correoUsuario: this.formLogin.correo,
        edad: 24
      }
    };

    this.router.navigate(['/home'], datosEnviar);
  }

  redireccionar() {
    this.router.navigate(['/olvido-contrasena']);
  }
}
