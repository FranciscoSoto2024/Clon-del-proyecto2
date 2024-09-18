import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';
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
    nombre:"Irezumi",
    estilo: "japones", 
    origen: "japon",
    edad: 5000,
    imagen: "https://allthingstattoo.ca/wp-content/uploads/2018/08/koji-ichimaru.jpg",
    descripcion: "Los tatuajes tradicionales japoneses se caracterizan por sus colores vivos, sus patrones elaborados y sus temas simbólicos. Los temas comunes incluyen animales, plantas, flores, peces, demonios y dioses El significado de los tatuajes japoneses es muy fuerte, y la mayoría de los diseños se eligen por una razón. Con origen en la mitología, el budismo o el sintoísmo.", 
    alt:""
    },

    {
      id: "",
    nombre:"Old school",
    estilo: "Old school", 
    origen: "Estados unidos",
    edad: 100,
    imagen: "https://i.pinimg.com/originals/69/c9/7d/69c97d0639a48ecdf0fbe82208566b8a.jpg",
    descripcion: "Old school (en inglés: ‘vieja escuela’) en el arte del tatuaje, una referencia al estilo tradicional estadounidense, caracterizado por líneas negras gruesas, generalmente con una gama de colores plana y definido por un imaginario específico, como son los símbolos patrios de ese país, Los diseños son simples", 
    alt:""
    },

    {
      id: "",
    nombre:"Tribal",
    estilo: "Tribal", 
    origen: "Islas polinesias",
    edad: 2000,
    imagen: "https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/2021/01/20210106_yz8pH0CbQT3aOtd.jpeg?w=500",
    descripcion: "El tatuaje tribal es el estilo de tatuajes más antiguo, este arte del tatuaje está totalmente inspirado en la naturaleza y tiene un significado complejo por medio de patrones de tatuajes simples. Hoy en día, el término tatuaje tribal se refiere a un estilo de tatuaje específico caracterizado por áreas de negro sólido y formas abstractas curvas.", 
    alt:""
    },
    {
      id: "",
    nombre:"",
    estilo: "", 
    origen: "",
    edad: 1,
    imagen: "",
    descripcion: "", 
    alt:""
    },
   
  ]
   }
}
