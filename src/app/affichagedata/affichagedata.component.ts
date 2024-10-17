import { Component, Input, SimpleChanges } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { PokeModelDetails } from '../model';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-affichagedata',
  templateUrl: './affichagedata.component.html',
  styleUrl: './affichagedata.component.css'
})
export class AffichagedataComponent {
  photoUrl: string = '';
  pokemon: PokeModelDetails = {
    abilities: [],
    base_experience: 0,
    cries: { latest: '', legacy: '' },
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_abilities: [],
    past_types: [],
    species: { name: '', url: '' },
    sprites: {
      back_default: '',
      back_female: null,
      back_shiny: '',
      back_shiny_female: null,
      front_default: '',
      front_female: null,
      front_shiny: '',
      front_shiny_female: null,
    },
    stats: [],
    types: [],
    weight: 0,
  };
  
  @Input() idPoke?: string;
  
  // Nouvelle variable pour gérer l'affichage de l'image
  pokemonLoaded: boolean = false; // État pour gérer si le Pokémon est chargé

  constructor(private apiLink: PokeapiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idPoke']) {
      this.apiLink.getPokemonDetails(this.idPoke + "").subscribe((data) => {
        this.photoUrl = data.sprites.front_default;
        this.pokemon = data;

        // Gérer l'état de chargement du Pokémon
        this.pokemonLoaded = false; // Commence par cacher l'image

        // Délai pour faire exploser la Pokéball avant d'afficher l'image
        setTimeout(() => {
          this.pokemonLoaded = true; // Affiche l'image après l'explosion
        }, 500); // Temps d'attente pour l'animation d'explosion
      });
    }
  }
}

