import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from "sweetalert2" 
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  product:string = '';

  //Coleccion de productos añadidos a la fiesta
  productosCarrusel: Producto[] = [];

  productosAnadido(producto:Producto){
    //Remplazamos el valor de product
    this.product =  `${producto.nombre} : $${producto.precio}`;


    try{
      /*Agregamos la informacion recibida
    por el parametro de la funcion a la coleccion
    del carrusel*/
    this.productosCarrusel.push(producto);

    Swal.fire({
      title: '!Eso mi compa',
      text: 'Ha añadido el producto con exito',
      icon: 'info'
    })
    }
    catch(error){
      Swal.fire({
        title: '¡Oh no!',
        text: 'Ha ocurrido un error\n'+error,
        icon: 'error'
      })
    }
  }
}
