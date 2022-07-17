import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  constructor() { }
  
  nome: string = "Aecio da Silva";
  idade: number = 27;

  desabilitado: boolean = true;
  logoJava: string = "https://www.infoescola.com/wp-content/uploads/2011/03/java.jpg";

  alertar(): void {
    alert("Warning!");
  }

  x: number = 0;
  y: number = 0;
  localizar(event: MouseEvent): void {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }

  texto!: string;

}
