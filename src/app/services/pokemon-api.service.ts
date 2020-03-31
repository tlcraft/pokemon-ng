import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})

export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<Pokemon> {
    const pokemon = this.http.get<Pokemon>(environment.apiUrl + name);
    return pokemon;
  }
}