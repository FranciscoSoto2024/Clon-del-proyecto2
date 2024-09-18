import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto; // ! <- tomar valores vacios

  modalVisibleProducto: boolean = false;

  nombreImagen!: string; //obtendra el nombre de la imagen

  imagen!: string; // obtendra la ruta de la imagen

  // definimos formulario para los productos
  /**
   * Atributos alfanumericos (string) se inicializan con comillas simples
   * Atributos numericos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
   //imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: '',
        alt: this.producto.value.alt!
      }
      // Enviamos nombre y el url de la imagen; definimos carpeta de imagenes como "productos"
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
        .then(resp => {
          //encapsulamos respuesta y enviamos la informacion obtenida
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              //ahora metodo crearProducto recibe datos del formulario y URL creada
              this.servicioCrud.crearProducto(nuevoProducto, url)
                .then(producto => {
                  alert("ha agregado un nuevo producto con exito");

                  // Resetea el formulario y las casillas quedan vacias 
                  this.producto.reset()
                })
                .catch(error => {
                  alert("ha ocurrido un error al cargar un producto");

                  this.producto.reset();
                });
            })
        })


    };
  }

  //CARGAR IMAGENES
  cargarImagen(event: any){
    //Variable para obtener el archivo subido desde el input del HTML
    let archivo = event.target.files[0];
    // Variable para crear un nuevo objeto de tipo "archivo" o "file" y leerlo
    let reader = new FileReader();

    if(archivo != undefined){
      /*
      Llamamos a metodo readAsDataURL para leer toda la informacion recibida 
      Enviamos como parametro al "archivo" porque sera el encargador de tener la 
      info ingresada por el usuario
      */
      reader.readAsDataURL(archivo);

      //Definimos que haremos con la informacion mediante funcion flecha
      reader.onloadend = () => {
        let url = reader.result;

        // Condicionamos segun una URL existente y no "nula"
        if(url != null){
          //Definimos nombre de la imagen con atributo "name" del input
          this.nombreImagen = archivo.name;

          //Definimos ruta de la imagen segun la url recibida 
          this.imagen = url.toString(); 
        }

      }
    }
  }

  //ELIMINAR PRODUCTOS
  //funcion vinculada al modal y el boton de la tabla
  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true;

    this.productoSeleccionado = productoSeleccionado;
  }

  borrarProducto() {
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto, this.productoSeleccionado.imagen)
      .then(respuesta => {
        alert("se ha podido eliminar con exito.");
      })
      .catch(error => {
        alert("ha ocurrido un error al eliminar un producto: /n" + error)
      });
  }

  //EDITAR PRODUCTOS
  EditarProducto(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado
    this.producto.setValue({
      nombre: this.productoSeleccionado.nombre,
      precio: this.productoSeleccionado.precio,
      descripcion: this.productoSeleccionado.descripcion,
      categoria: this.productoSeleccionado.categoria,
      alt: this.productoSeleccionado.alt
    })
  }

  editarProducto() {
    let datos: Producto = {
      //solo idproducto no se modifica por el usuario
      idProducto: this.productoSeleccionado.idProducto,
      /*los demas atributos reciban  nueva informacion
      desde el formulario */
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.productoSeleccionado.imagen,
      alt: this.producto.value.alt!
    }

    if (this.imagen){
      this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
      .then(resp => {
        this.servicioCrud.obtenerUrlImagen(resp)
        .then(url =>{
          datos.imagen = url;

        this.actualizarProducto(datos);

        this.producto.reset();
        })
      })
      .catch(error => {
        alert("hubo un problema al subir la imagen :( \n"+error);

        this.producto.reset();
      })
    }
  }

  actualizarProducto(datos: Producto){
    //Enviamos al metodo el id del producto seleccionado y los datos actualizados
  this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
  .then(producto => {
    alert("El producto se ha modificado con exito")
  })
  .catch(error => {
    alert("Hubo un problema al modificar el producto: /n" + error);
  })
  }
}