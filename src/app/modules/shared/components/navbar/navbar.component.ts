import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado = true; //booleana para manejo de registro y el inicio de sesion 
  deslogueado = false; // booleana para manejo de cierre sesion  


  constructor(
  public servicioAuth: AuthService,
  public servicioRutas: Router
  ){}

  //Funcion "ingresar" para invertir los valores
  ingresar(){
    this.logueado = false;
    this.deslogueado = true;
  }

  //Funcion de "CerrarSesion" devuelve los valores originales 
  cerrarSesion(){
    this.deslogueado = false;
    this.logueado = true;

    // llamamos al metodo 
    this.servicioAuth.cerrarSesion();
    this.servicioRutas.navigate(['/'])
  }

}
