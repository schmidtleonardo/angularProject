import { Pet } from './../modelos/Pet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-ng-for',
  templateUrl: './teste-ng-for.component.html',
  styleUrls: ['./teste-ng-for.component.css']
})
export class TesteNgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  i: number = 0;

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
