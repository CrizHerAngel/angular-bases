import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Kaliman', 'Superman'];

  heroeBorrado: string = '' /* Se tiene que agregar una propiedad e inicializarla */

  deleteHeroe() {
    /* Este es un ejemplo de un borrado usando las propiedades que te da el llamado del arreglo */

    /* const heroeBorrado = this.heroes.shift();
    console.log(heroeBorrado); */

    /* ///////////////////////////////// */
    /* Para borrar un elemento y ese elemento mostrarlo en el template se hace de varias formas esta es una: */
    this.heroeBorrado = this.heroes.shift() || '' /* Para cuando sale un error de undefined, se deja el operador logico or || mas '' */
    /* Ahora se procede a pasar el heroe borrado al html */
  }

}
