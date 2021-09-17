import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-teste',
  templateUrl: './componente-teste.component.html',
  styleUrls: ['./componente-teste.component.css']
})
export class ComponenteTesteComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  index?: number

  ngOnInit(): void {
    this.index = this.route.snapshot.params.id;
  }

}
