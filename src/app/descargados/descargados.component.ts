import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { Tarjeta } from '../tarjetas/createTarjetas';

@Component({
  selector: 'app-descargados',
  templateUrl: './descargados.component.html',
  styleUrls: ['./descargados.component.css']
})
export class DescargadosComponent {
  datosDescarga: Tarjeta[];
  refinando: Tarjeta | undefined;
  prueba: any[] | Tarjeta;
  constructor(public datosService: DatosService){
  }
  getInfo(){
    this.datosDescarga= this.datosService.tarjetasExample.filter(element => element.downloads>100);
    for (let i = 0; i < this.datosDescarga.length; i++) {
      this.prueba = this.datosDescarga[i];
      console.log(this.prueba)

    }
  }

  /* necesito que quede asi
  0:{
    title:"jasgdfkasjhbf",
    ssdkh: aksjdhfak
  } */
}
