import { Component, Input, SimpleChanges } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokeModelDetails } from '../../models/model';
import { Pokemon } from '../../models/pokemon';
import { CarouselModule } from 'primeng/carousel';

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

  pokemonLoaded: boolean = false;
  pokemonImages: string[]= [];
  cri: string ="";

  constructor(private apiLink: PokeapiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idPoke']) {
      this.apiLink.getPokemonDetails(this.idPoke + "").subscribe((data) => {
        this.photoUrl = data.sprites.front_default;
        this.pokemon = data;
        this.cri = this.pokemon.cries.latest;
        this.pokemonImages = [
          this.pokemon.sprites.front_default,
          this.pokemon.sprites.back_default,
          this.pokemon.sprites.front_shiny,
          this.pokemon.sprites.back_shiny,
        ].filter(img => img !== null);
        this.pokemonLoaded = false;
        setTimeout(() => {
          this.pokemonLoaded = true;
        }, 500);
      });
    }
  }
}

