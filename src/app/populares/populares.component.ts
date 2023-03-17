import { Component, Input } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent {
  constructor(public datosService: DatosService){
  }
}
