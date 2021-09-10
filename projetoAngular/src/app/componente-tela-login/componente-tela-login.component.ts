import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-componente-tela-login',
  templateUrl: './componente-tela-login.component.html',
  styleUrls: ['./componente-tela-login.component.css']
})
export class ComponenteTelaLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email: string = "";
  senha: string = "";

  entrar() {
    if(this.email == "admin@admin.com" && this.senha == "admin123") {
      
    };
  }
}
