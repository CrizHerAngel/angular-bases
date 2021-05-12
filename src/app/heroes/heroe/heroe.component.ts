import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
    nombre: string = 'Superman';
    edad: number = 50;

    /* Este es un metodo de get y set donde obtenemos el valor a devolver de una propiedad */
    get nameCapitalized() {
        return this.nombre.toUpperCase();
    }

    getName(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    chooseName() {
        this.nombre = 'Spiderman';
    }

    chooseAge(): void {
        this.edad = 20;
    }
}
