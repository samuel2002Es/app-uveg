import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
videojuego: any;
mensaje:string;
formularioEnviado() {
  alert("se ha hecho el registro")
}
}
