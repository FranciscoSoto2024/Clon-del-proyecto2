import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFireStorage, AngularFirestoreCollection } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto')
  }

  crearProducto(producto: Producto){
    return new Promise(async(resolve, reject) => {
      const idProducto = this.database.createId();
      //Asignamos ID creado al atributo idproducto de la interfaz producto
      producto.idProducto = idProducto

      const resultado = await this.productosCollection.doc(idProducto).set(producto);

      resolve(resultado);
    })
  } catch(error){
    reject(error);
  }
  }

