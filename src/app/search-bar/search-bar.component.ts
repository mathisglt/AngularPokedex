import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeapiService } from '../pokeapi.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'] // Notez le pluriel ici
})
export class SearchBarComponent {
  id: string = '';
  choixPokemon?: Pokemon; // Laissez-le comme un objet Pokemon
  filtre: string = '';
  lpoke: Pokemon[] = [];

  constructor(private apiLink: PokeapiService) {
  }
 
  
  ngOnInit(): void {
    this.apiLink.getPokemons().subscribe((data) => {
      this.lpoke = data.results.map((params: { url: string; name: string; }, index: number) => 
        new Pokemon(this.capitalize(params.name), (index+1).toString())
      );
      });
    };

  capitalize(s:string | undefined ) {
    if (s){
      return s[0].toUpperCase() + s.slice(1);
    }
    else return ""
  }

}
