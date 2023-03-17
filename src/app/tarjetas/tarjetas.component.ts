import { Component, Input } from '@angular/core';
import { DatosService } from '../datos.service';
import { Tarjeta } from './createTarjetas';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  @Input() tarjetas: Tarjeta[] = [];
  @Input() index:any;
  @Input() nose:any;
  @Input() tarjetas2: Array<Tarjeta>=[];
  constructor(){
  }


  getInfo(){
/*     console.log(this.index) */
    /* console.log(Object.values(this.tarjetas2[1])); */

  /* console.log(this.tarjetas) */
/*   for (let i = 0; i < 5; i++) {
    console.log(this.tarjetas2[i]);;
  } */
  }
}


