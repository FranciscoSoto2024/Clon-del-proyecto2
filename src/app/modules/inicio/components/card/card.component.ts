import { Component } from '@angular/core';
import { Tattoo } from 'src/app/models/tattoo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Tattoo[]

  constructor(){
    this.info = [
    {
      id: "",
      nombre: "estilo japones",
      origen: "japones",
      estilo: "japones",
      edad: 5000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Japanese_body_suit.jpg/250px-Japanese_body_suit.jpg",
      descripcion:"En Japón existe un tipo de tattoo que cubre gran parte del cuerpo, conocido como Horinomo y es este estilo el que suelen llevar los criminales de esta mafia No obstante, el Horinomo tiene diversos significados y no solo está relacionado con la Yakuza",
      alt:""
    },
    {
      id: "",
      nombre: "old school",
      origen: "estados unidos",
      estilo: "old school",
      edad: 1500,
      imagen: "https://th.bing.com/th/id/OIP.A5A0INeZMXE7W3PdIoNQawAAAA?rs=1&pid=ImgDetMain",
      descripcion:"El estilo old school tiene sus raíces en los primeros años del siglo XX en los Estados Unidos. Su origen se remonta a los marineros que se tatuaban durante sus viajes por todo el mundo. Estos tatuajes, realizados en su mayoría en puertos y ciudades portuarias, se caracterizaban por sus diseños audaces, colores vibrantes y líneas gruesas. Los motivos clásicos del old school incluyen anclas, corazones, golondrinas, rosas, sirenas y otros elementos marítimos",
      alt:""
    },
    {
      id: "",
      nombre: "tribal",
      origen: "tribus polineseas",
      estilo: "tribal",
      edad: 5000,
      imagen: "https://t1.uc.ltmcdn.com/es/posts/7/3/4/_49437_1_600.jpg",
      descripcion:"Los tatuajes tribales son diseños que se caracterizan por su simplicidad y líneas geométricas. A menudo, se inspiran en patrones tradicionales de diferentes culturas y se aplican en áreas específicas del cuerpo. Estos tatuajes han sido una forma popular de arte corporal durante siglos, y aunque el significado puede variar dependiendo de la cultura y la ubicación, todos comparten un aspecto en común: son un símbolo de identidad y pertenencia.",
      alt:""
    },
  ]
   }
}
