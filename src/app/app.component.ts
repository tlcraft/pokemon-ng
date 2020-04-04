import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PokemonApiService } from './services/pokemon-api.service';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemon: Pokemon;
  form: FormGroup;

  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit() {
    this.form = new FormGroup({
      pokemonName: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  getPokemonData(): void {
    const name = this.getLowerCasePokemonName();

    if(name) {
      this.pokemonApiService
        .getPokemon(name)
        .subscribe(pokemon => this.pokemon = pokemon); 
    }
  }

  getLowerCasePokemonName(): string {
    const nameControl = this.form && this.form.get('pokemonName');
    return nameControl && nameControl.value && nameControl.value.toLowerCase();
  }

  pokemonSource(): string {
    const source = this.pokemon && this.pokemon.sprites && this.pokemon.sprites.front_default;
    return source;
  }
}
