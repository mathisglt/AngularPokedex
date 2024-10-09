import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeModel } from './PokeModel'; // Assurez-vous d'importer votre modèle Pokemon si nécessaire

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des Pokémon
  getPokemons(): Observable<any> {
    return this.http.get(`${this.apiUrl}pokedex/1`); // URL de l'API pour récupérer le Pokédex
  }

  // Méthode pour récupérer des informations détaillées sur un Pokémon
  getPokemonDetails(pokemonId: number | string): Observable<PokeModel> {
    return this.http.get<PokeModel>(`${this.apiUrl}pokemon/${pokemonId}`);
  }
}
