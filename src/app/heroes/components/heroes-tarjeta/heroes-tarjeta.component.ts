import { Heroe } from './../../interfaces/heroes.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styleUrls: ['./heroes-tarjeta.component.scss'],
})
export class HeroesTarjetaComponent implements OnInit {
  @Input()
  data!: Heroe;

  constructor() {}

  ngOnInit(): void {}
}
