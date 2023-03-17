import { Injectable } from '@angular/core';
import { Tarjeta } from './tarjetas/createTarjetas';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  tarjetasExample : Array<Tarjeta>=[
    {title: "Funcionaaa",
    description: 'este es el primer juego y su primera descripcion',
    releaseDate: '29/octubre/2020',
    image: '',
    rating: 3,
    downloads: 150,
    comingSoon: true},

    {title: "Mario Kart",
    description: 'este es el segundo juego y su primera descripcion',
    releaseDate: '29/octubre/2020',
    image: '',
    rating: 9,
    downloads: 300,
    comingSoon: false},
    {
      title: "Fornite",
      description: 'este es el primer juego y su primera descripcion',
      releaseDate: '29/octubre/2020',
      image: '',
      rating: 3,
      downloads: 40,
      comingSoon: false
    },
    {
      title: "samysFree",
      description: 'este es el primer juego y su primera descripcion',
      releaseDate: '29/octubre/2020',
      image: '',
      rating: 5,
      downloads: 25,
      comingSoon: false
    }
  ]
  noTarjetas:number= this.tarjetasExample.length;

  tarjeta1 = [{
    title: "The Soccer",
    description: 'este es el primer juego y su primera descripcion',
    releaseDate: '29/octubre/2020',
    image: '',
    rating: 3,
    downloads: 150,
    comingSoon: true
  }];
  tarjeta2 = [{
    title: "Mario Kart",
    description: 'este es el segundo juego y su primera descripcion',
    releaseDate: '29/octubre/2020',
    image: '',
    rating: 9,
    downloads: 300,
    comingSoon: false
  }];
  tarjeta3 = [{
    title: "Fornite",
    description: 'este es el primer juego y su primera descripcion',
    releaseDate: '29/octubre/2020',
    image: '',
    rating: 3,
    downloads: 40,
    comingSoon: false
  }];
  tarjeta4 = [{
    title: "samysFree",
    description: 'este es el primer juego y su primera descripcion',
    releaseDate: '29/octubre/2020',
    image: '',
    rating: 5,
    downloads: 25,
    comingSoon: false
  }];

  constructor() { }
}
