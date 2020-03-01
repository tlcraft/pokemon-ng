import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<any> {
    const pokemon = this.http.get<any>(environment.apiUrl + name);
    return pokemon;
  }
}