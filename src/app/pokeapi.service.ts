import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeModel } from './PokeModel'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des Pokémon
  getPokemons(): Observable<any>{
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"); // URL de l'API pour récupérer le Pokédex
  }

}
