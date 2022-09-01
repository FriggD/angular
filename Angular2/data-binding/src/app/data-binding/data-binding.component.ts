import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.com';
  cursoAngular : boolean = true;
  urlImage = 'http://lorempixel.com.br/500/400';

  valorAtual: string ='';
  valorSalvo: string ='';
  isMouseOver: boolean = false;
  nome: string ='abc';
  pessoa: any = {
    nome: "def",
    idade: 20
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(evento: any){
    this.valorSalvo = (evento.target as HTMLInputElement).value;
  }

  onMouseOverOut(){
    this.isMouseOver =!this.isMouseOver;
  }

  salvarNome(evento:any){
    this.nome = (evento.target as HTMLInputElement).value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
