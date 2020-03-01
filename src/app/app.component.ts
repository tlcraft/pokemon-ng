import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PokemonApiService } from './services/pokemon-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemon: any;
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

  private getLowerCasePokemonName(): string {
    const nameControl = this.form && this.form.get('pokemonName');
    return nameControl && nameControl.value && nameControl.value.toLowerCase();
  }
}
