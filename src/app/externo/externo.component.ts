import { Component, OnInit, ViewChild } from '@angular/core';
import { InternoComponent } from './interno/interno.component';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent {

  constructor() { }

  //public nomeExterno: string = "Gustavo Brandão";

  //public nomeExterno: string = "";

  /*public recebeNome(nome: string) {
    this.nomeExterno = nome;
  }*/

  // Exercicio
  public pessoa: {nome: string, idade: number} = {nome: "Gabriel", idade: 20};

  // Template Variable
  texto: string = "";
  public mostrar(texto: string): void {
    this.texto = texto;
  }

  // ViewChild
  @ViewChild('interno')
  public interno!: InternoComponent;
}
