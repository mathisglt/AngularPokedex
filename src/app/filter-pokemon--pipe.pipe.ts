import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokes: any[], property?: string, searchString?: string,searchid? : string): any {
    if(typeof searchString == 'undefined'){
      return pokes;
    }
    else if (typeof pokes !== 'undefined' && typeof property !== 'undefined') {

      return pokes.filter((poke) => {
        if (searchString == poke.id) {
          return [poke];
        }else
        return poke[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1  ;
      });
    } else {
      return [];
    }
  }

}
