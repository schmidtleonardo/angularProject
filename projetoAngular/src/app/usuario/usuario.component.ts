import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  imagens = [
    "assets/cachorro.jpg",
    "assets/camelo.jpg",
    "assets/cavalo.jpg",
    "assets/gato.jpg"
  ];

  imagemSelecionada?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.imagemSelecionada = this.imagens[id];
  }

}
