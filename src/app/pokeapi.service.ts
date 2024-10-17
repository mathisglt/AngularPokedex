import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des Pokémon
  getPokemons(): Observable<PokeModel>{
    return this.http.get<PokeModel>("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"); // URL de l'API pour récupérer le Pokédex
  }

}
