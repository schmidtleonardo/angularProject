import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-componente-tela-login',
  templateUrl: './componente-tela-login.component.html',
  styleUrls: ['./componente-tela-login.component.css']
})
export class ComponenteTelaLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  email: string = "admin@admin.com";
  senha: string = "admin123";


  entrar() {
    if(this.email == "admin@admin.com" && this.senha == "admin123") {
      this.email = "";
      this.senha = "";
      this.router.navigate(['/home']);

    } else if (this.email == "" || this.senha == ""){
      alert("Preencha usuário e senha!")
    } else {
      alert("Usuário ou senha incorreta!")
    };
  }
}
