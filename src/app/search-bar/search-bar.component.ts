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
      // Ajoutez des Pokémon à lpoke
      this.lpoke.push(new Pokemon("Salamèche", "1"));
      this.lpoke.push(new Pokemon("Tiplouf", "2"));
      this.lpoke.push(new Pokemon("Ouisticram", "3"));
      this.lpoke.push(new Pokemon("Bulbizarre", "4"));
      this.lpoke.push(new Pokemon("Tortipousse", "5"));
  }
 
  
  ngOnInit(): void {
    this.apiLink.getPokemons().subscribe((data:any) => {
      data.results.forEach((e: any, index:number) => { 
        this.lpoke.push(new Pokemon(index.toString(), e.nom));
        console.log(this.lpoke)
      });
    });
  }
  
  havetogo(): void {
    // Vérifiez si un Pokémon est sélectionné avant de l'afficher
    if (this.choixPokemon) {
      console.log(this.choixPokemon.nom); // Affiche le nom du Pokémon sélectionné
    } else {
      console.log("Aucun Pokémon sélectionné.");
    }
  }
}
