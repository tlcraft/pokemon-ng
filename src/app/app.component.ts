import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from './services/pokemon-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pokemon-ng';
  pokemon: any;

  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit() {
    this.pokemonApiService
      .getPokemon()
      .subscribe(pokemon => this.pokemon = pokemon); 
  }
}
