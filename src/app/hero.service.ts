import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { catchError, tap, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  urlApi: string = "http://localhost:8000/heroes";
  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.urlApi).pipe(
      tap(data => JSON.stringify(data))
    ) 
  }
  getHero(id: string): Observable<Hero>{
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Hero>(url,httpOption).pipe(
      tap(data => JSON.stringify(data))
    )
  }
  updateHero(hero: Hero, id: string): Observable<Hero>{
    return this.http.patch<Hero>(`${this.urlApi}/${id}`, hero, httpOption);
  }
  deleteHero(id: string):Observable<Hero>{
    return this.http.delete<Hero>(`${this.urlApi}/${id}`, httpOption);
  }
  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.urlApi, hero, httpOption);
  } 
  searchHero(name: string):Observable<Hero[]>{
    const url = `${this.urlApi}/search/name=${name}`;
    return this.http.get<Hero[]>(url,httpOption);
  }
}
