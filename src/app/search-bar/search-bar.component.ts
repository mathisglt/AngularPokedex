import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  id: string = '';
  choixPokemon: string = '';
  filtre: string = '';
  lpoke: Pokemon[] = [
  new Pokemon("Salamèche","1"),
  new Pokemon("Tiplouf","2"),
  new Pokemon("Ouisticram","3"),
  new Pokemon("Bulbizarre","4"),
  new Pokemon("Tortipousse","5")
  ]
  havetogo(): void {
    console.log(this.choixPokemon)
  }
}
