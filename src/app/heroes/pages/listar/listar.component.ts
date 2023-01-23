import { Heroe, Login } from './../../interfaces/heroes.interfaces';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  constructor(private readonly servicesHeroe: HeroesService) {}

  heroes!: Array<Heroe>;

  data: any;

  ngOnInit(): void {
    // this.servicesHeroe.getHeroes().subscribe((resp) => {
    //   this.heroes = resp;
    // });

    const data: Login = {
      username: 'admin',
      password: '12345',
    };

    this.servicesHeroe.createlogin(data).subscribe((resp) => {
      this.data = resp;
      console.log(resp);
    });
  }
}
