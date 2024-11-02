import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeModel, PokeModelDetails } from './model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }


  getPokemons(): Observable<PokeModel>{
    return this.http.get<PokeModel>("https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0"); 
  }
  getPokemonDetails(id:string): Observable<PokeModelDetails>{
    return this.http.get<PokeModelDetails>("https://pokeapi.co/api/v2/pokemon/"+id); 
  }
}
