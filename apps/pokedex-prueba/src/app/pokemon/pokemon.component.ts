import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'pokedex-gently',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  // variables
  loading = false;
  name = '';
  pokemons: any[] = [];
  pages: any[] = [];
  currentPage = 1;
  pcHd:number | undefined;
  pcSd:number | undefined;
  pcRip:number | undefined;
  pcNor:number | undefined;
  tlfHd:number | undefined;
  tlfSd:number | undefined;


  constructor(private pokemonService: PokemonService) {}
  //funciones

  getPokemons(url: string) {
    this.loading = true;
    this.pokemons = [];
    // const localPokemonArray: any[] = [];

    // if (!localStorage.getItem('pokemonsArray')) {
    //   localStorage.setItem('pokemonsArray', JSON.stringify(localPokemonArray));
    // }

    this.pokemonService.getPokemon(url || '').subscribe((data: any) => {
      // const pokemonsArray = JSON.parse(
      //   localStorage.getItem('pokemonsArray') || '[]'
      // );

      // for (const pokemon of data.results) {
      //   const findedPokemon = pokemonsArray.find((findedPokemon: any) => findedPokemon.name === pokemon.name);
      //   if (!findedPokemon) {
      //     pokemonsArray.push(pokemon);
      //   }
      // }

      if (!this.pages.length) {
        this.setPaginator(data);
      }

      this.pokemons = data.results;

      this.loading = false;
    });
  }

  search() {
    this.loading = true;
    this.pokemons = [];
    if (this.name) {
      // const localPokemon = localStorage.getItem(this.name);
      // if (localPokemon) {
      // this.pokemons.push(JSON.parse(localPokemon));
      // this.loading = false;
      // } else {
      this.pokemonService.getPokemon(this.name).subscribe({
        next: (data) => {
          // localStorage.setItem(this.name, JSON.stringify(data));
          this.pokemons.push(data);
          this.loading = false;
        },
        error: ({ error }) => {
          console.log(error);
          this.loading = false;
        },
      });
      // }
    } else {
      this.getPokemons('');
    }
  }

  setPaginator(data: any) {
    const numberPages = Math.ceil(data.count / 20);
    for (let i = 0; numberPages > i; i++) {
      const pokemonNumber = i === 0 ? 0 : (i + 1) * 2 * 10;
      this.pages.push({
        number: i + 1,
        pokemons: pokemonNumber,
        url: `?offset=${pokemonNumber}&limit=20`,
      });
    }
  }

  selectPage(page: number) {
    this.getPokemons(this.pages[page - 1].url);
  }

  ngOnInit(): void {
    this.getPokemons(''); // necesario para evitar un error
    this.pcHd = (window.innerWidth < 1920) ? 7 : 8;
    this.pcSd = (window.innerWidth < 1600) ? 6 : 7;
    this.pcRip = (window.innerWidth < 1360) ? 5 : 6;
    this.pcNor = (window.innerWidth < 1152) ? 4 : 5;
    this.tlfHd = (window.innerWidth < 910) ? 3 : 4;
    this.tlfSd = (window.innerWidth < 720) ? 2 : 3;
  }

  handleSize(event: any) {
    this.pcHd = (event.target.innerWidth < 1920) ? 7 : 8;
    this.pcSd = (event.target.innerWidth < 1600) ? 6 : 7;
    this.pcRip = (event.target.innerWidth < 1360) ? 5 : 6;
    this.pcNor = (event.target.innerWidth < 1152) ? 4 : 5;
    this.tlfHd = (event.target.innerWidth < 910) ? 3 : 4;
    this.tlfSd = (event.target.innerWidth < 720) ? 2 : 3;
  }
}
