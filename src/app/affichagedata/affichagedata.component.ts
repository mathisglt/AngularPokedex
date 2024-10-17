import { Component, Input } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-affichagedata',
  templateUrl: './affichagedata.component.html',
  styleUrl: './affichagedata.component.css'
})
export class AffichagedataComponent {
  photoUrl: string = '';

  @Input()
  idPoke?:string

  constructor(private apiLink: PokeapiService) {
    
  }
 
  
  ngOnInit(): void {
    };
  
  affichagedata(): void {
    console.log("miaou")
    console.log(""+this.idPoke)
    this.apiLink.getPokemonDetails(this.idPoke+"").subscribe((data) => {
      this.photoUrl = data.sprites.front_default
    });
  };
}
