import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //Definimos coleccion de productos locales
coleccionProductos: Producto[] = [];
  // Variable local para seleccionar un producto especifico
productoSeleccionado!: Producto;
  // Variable local para menejar estado de un modal
modalVisible: boolean = false;


constructor(public sevicioCrud: CrudService){}

ngOnInit(): void{
  this.sevicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto;
  })
}

//Funcion para mostrar mas informacion de los productos
mostrarVer(info:Producto){
  //Cambio estado del modal a true (ahora es visible)
  this.modalVisible = true
  //Guardo en variable seleccionado la informacion del producto elegido 
  this.productoSeleccionado = info;
}
}
