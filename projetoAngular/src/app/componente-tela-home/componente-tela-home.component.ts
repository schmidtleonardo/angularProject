import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-tela-home',
  templateUrl: './componente-tela-home.component.html',
  styleUrls: ['./componente-tela-home.component.css']
})
export class ComponenteTelaHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  i: number = 3;
  mostrar: boolean = false;

  email: string = "";
  senha: string = "";

  entrar() {
    if(this.email == "admin@admin.com" && this.senha == "admin123") {
      this.i = 0;
      this.mostrar = true;
    } else if (this.email == "" || this.senha == ""){
      alert("Preencha usuário e senha!")
    } else {
      alert("Usuário ou senha incorreta!")
    };
  }
}
