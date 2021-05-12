import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  /* titulo = 'Contador App';
  numero: number = 100; */

  /*   sumar() { De este modo se hace uso de metodos que van hacia los dos botones en html
      this.numero += 1;
    }
  
    restar() {
      this.numero -= 1;
    } */

  /********** ESTA ES LA MEJOR SOLUCIÓN ********** */
  /*  acumular(valor: number) {
     this.numero += valor;
   } */

  /************ TAREA acumulador 5 a 5 *************/
  /* base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  } */
}
