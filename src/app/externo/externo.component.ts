import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent {

  constructor() { }

  //public nomeExterno: string = "Gustavo Brandão";

  public nomeExterno: string = "";

  public recebeNome(nome: string) {
    this.nomeExterno = nome;
  }
}
