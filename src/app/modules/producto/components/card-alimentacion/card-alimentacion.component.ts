import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card-alimentacion',
  templateUrl: './card-alimentacion.component.html',
  styleUrls: ['./card-alimentacion.component.css']
})
export class CardAlimentacionComponent {
  //Coleccion de productos de una sola categoria
  coleccionProductos: Producto[] = [];
  //Coleccion de productos de una sola categoria
  coleccionAlimentacion: Producto[] = [];
  //Coleccion de todos los productos de forma local
  coleccionSeleccionado!: Producto;
  //variable local para manejar estado de un model
  modalVisible: boolean = false;
  //Variable para seleccionar un producto en especifico
  productoSeleccionado!: Producto;

  
  //patentamos de forma local el servicio para acceder a el
  constructor(public servicioCrud: CrudService){}

  ngOnInit():void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })

    this.mostrarProductoAlimentacion();
  }
  // Funcion para filtrar los productos de tipo "alimentacion"
mostrarProductoAlimentacion(){
  // Iteramos coleccion de productos con un 'forEach'
this.coleccionProductos.forEach(producto => {
  // Si es de tipo "alimentacion" -> condicional
  if(producto.categoria === "alimentacion"){
   // Lo sube/ guarda en la coleccion de productos de tipo "alimentacion"   
    this.coleccionAlimentacion.push(producto);
  }
})
}

 mostrarVer(info: Producto){

  this.modalVisible = true;

  this.productoSeleccionado = info;
 }
}


