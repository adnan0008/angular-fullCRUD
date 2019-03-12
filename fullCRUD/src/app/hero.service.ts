import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { HEROES } from './mock-heroes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(protected localStorage: LocalStorage, private http: HttpClient) { }


  setHeroes(): Hero[] {
    this.localStorage.setItem("user", Hero).subscribe(() => { });
    return;
  }

  getHeroes(): Hero[] {
    return HEROES;
  }


  remove(): Hero[] {
    this.localStorage.removeItem('user');
    return;
  }
}
