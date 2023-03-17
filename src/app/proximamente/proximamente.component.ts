import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-proximamente',
  templateUrl: './proximamente.component.html',
  styleUrls: ['./proximamente.component.css']
})
export class ProximamenteComponent {
  constructor(public datosService: DatosService){
  }
}
