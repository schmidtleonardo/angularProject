import { Component, OnInit } from '@angular/core';
import { Pet } from '../modelos/Pet';

@Component({
  selector: 'app-componente-imagem',
  templateUrl: './componente-imagem.component.html',
  styleUrls: ['./componente-imagem.component.css']
})
export class ComponenteImagemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  i: number = 0;


  imagens = [
    "assets/cachorro.jpg",
    "assets/cavalo.jpg",
    "assets/gato.jpg"
  ];

  subtrair() {
    const tam = this.imagens.length;
    this.i = (tam + this.i - 1) % tam;
  }

  aumentar() {
    const tam = this.imagens.length;
    this.i = (this.i + 1) % tam;
  }

  fotos: Pet[] = [
    {
      name: 'Cachorro',
      photoUrls: "assets/cachorro.jpg",
    },
    {
      name: "Camelo",
      photoUrls: "assets/camelo.jpg",
    },
    {
      name: "Cavalo",
      photoUrls: "assets/cavalo.jpg"
    },
    {
      name: "Gato",
      photoUrls: "assets/gato.jpg",
    },
    {
      name: "Jumento",
      photoUrls: "assets/jumento.jpg",
    },
    {
      name: "Lhama",
      photoUrls: "assets/lhama.jpg",
    },
    {
      name: "Macaco",
      photoUrls: "assets/macaco.jpg",
    },

  ]

}
