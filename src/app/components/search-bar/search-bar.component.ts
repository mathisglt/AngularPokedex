import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokeapiService } from '../../services/pokeapi.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  id: string = '';
  choixPokemon?: Pokemon;
  filtre: string = '';
  lpoke: Pokemon[] = [];

  constructor(private apiLink: PokeapiService) {
  }


  ngOnInit(): void {
    this.apiLink.getPokemons().subscribe((data) => {
      this.lpoke = data.results.map((params: { url: string; name: string; }, index: number) =>
        new Pokemon(this.capitalize(params.name), (index+1).toString())
      );
      if (this.lpoke.length > 0) {
        this.choixPokemon = this.lpoke[0];
      }
      });
    };

  capitalize(s:string | undefined ) {
    if (s){
      return s[0].toUpperCase() + s.slice(1);
    }
    else return ""
  }

}
