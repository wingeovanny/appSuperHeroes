import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe, Login } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  createlogin(dto: Login) {
    console.log(dto);
    return this.http.post<any>(
      `https://back.test.kimsabot.com/auth/login`,
      dto
    );
  }
}
