import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Animal[]

  constructor(){
    this.info = [
    {
      id: "",
    nombre: "PERRO",
    raza: "BULLDOG",
    descripcion:"El bulldog, también conocido como bulldog inglés, es una raza de perro originaria de Inglaterra. Su ancestro, conocido como el Antiguo Bulldog Inglés, fue utilizado en peleas de perros con toros hasta mediados del siglo XVII, aunque en 1835 esta práctica fue prohibida. Hoy en día, esta raza de perro es uno de los símbolos de Inglaterra.",
    edad: 11 ,
    imagen: "https://perro.shop/wp-content/uploads/Bulldog-Ingles-768x696.jpg",
    alt: ""
    },

    {
      id: "",
    nombre: "Gato",
    raza: "Munchkin",
    descripcion:"El munchkin es una raza de gato surgida por una mutación genética natural, mantenida por cruzamientos selectivos, que da lugar a gatos con patas más cortas de lo normal. Sin embargo, la poca longitud de sus patas no parece interferir con sus habilidades a la hora de correr y saltar.",
    edad: 15,
    imagen: "https://i0.wp.com/vetplace.pe/wp-content/uploads/2021/12/Gato-Munchkin-cuidados.jpg",
    alt: ""
    },

    {
      id: "",
    nombre: "Tortuga",
    raza: "Galapagos",
    descripcion:"La tortuga galápagos, también conocida como tortuga gigante Galápagos, es una especie icónica nativa del archipiélago ecuatoriano de las Islas Galápagos. Conocida por su tamaño impresionante y longevidad excepcional, puede alcanzar hasta 1.8 metros de longitud y vivir más de 100 años",
    edad: 100,
    imagen: "https://www.elnuevodia.com/resizer/PxcfhcGOfOMmhWHxRiPjmgCytXk=/1200x717/smart/filters:quality(95):format(png)/cloudfront-us-east-1.images.arcpublishing.com/gfrmedia/3O64K7ITVVCEDB6FW7NLNOF6N4.jpg",
    alt: ""
    },
  ]
   }
}
