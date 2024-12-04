import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeModel, PokeModelDetails } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokeModel> {
    return this.http.get<PokeModel>(`${this.baseUrl}/pokemon?limit=1025&offset=0`);
  }

  getPokemonDetails(id: string): Observable<PokeModelDetails> {
    return this.http.get<PokeModelDetails>(`${this.baseUrl}/pokemon/${id}`);
  }
}
