import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
registrarUsuario() {
  console.log("usuario tratando de iniciar")
  }

  ingresarUsuario() {
  console.log("usuario tratando de ingresar")
  this.sesion=true;
  this.mensaje=" usuario intentando acceder";
  }

    mensaje= ""
    title = 'videoJuegoSam';
    sesion: boolean = false;
    registrar: boolean = false;
    gmail:string="";
    contrasena:string="";

    login(form:NgForm){
      const email=form.value.email
      const password=form.value.password
    }
}
