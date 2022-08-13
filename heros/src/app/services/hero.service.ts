import { Injectable } from '@angular/core';
import { Hero } from '../Hero'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private URL = 'http://localhost:3000/heros'
  constructor(private http: HttpClient) { }
  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.URL)
  }
  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.URL + '/' + id)
  }
}
