import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pokedex-gently-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  loading = false;
  pokemonInfo = {
    name: '',
    sprites: {
      front_default: '',
      front_shiny: '',
      other: {
        home: {
          front_default: '',
        }
      }
    },
    types: [],
  };

  pokemonTypes:any[] = [];

  @Input() pokemon = {
    url: '',
    name: '',
  };


  constructor(private http: HttpClient) {}

  getPokemon() {
    this.loading = true;
    if (this.pokemon.url) {
      this.http.get(this.pokemon.url).subscribe((data: any) => {
        // const pokemonsArray = JSON.parse(
        //   localStorage.getItem('pokemonsArray') || '[]'
        // );
        // pokemonsArray.push(data);
        // localStorage.setItem('pokemonsArray', JSON.stringify(pokemonsArray));
        this.pokemonInfo = data;
        this.pokemonInfo.types.forEach((types:any) => {
          this.pokemonTypes.push(types);
        }),
        this.loading = false;
      });
    } else {
      // const pokemonsArray = JSON.parse(
      //   localStorage.getItem('pokemonsArray') || '[]'
      // );
      // const pokemonFind = pokemonsArray.find(
      //   (findedPokemon: any) => findedPokemon.name === this.pokemon.name
      // );
      // if (pokemonFind) {
      //   const localPokemon = pokemonFind;
      //   this.pokemonInfo = { ...this.pokemonInfo, ...localPokemon };
      // } else {
      // pokemonsArray.push(this.pokemonInfo);
        this.pokemonInfo = { ...this.pokemonInfo, ...this.pokemon };
        this.pokemonInfo.types.forEach((types:any) => {
          this.pokemonTypes.push(types);
        }),
      // }
      this.loading = false;
    }
  };
  ngOnInit(): void {
    this.getPokemon();
  }
}
