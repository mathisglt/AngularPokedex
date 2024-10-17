import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokeapiService } from './pokeapi.service';
import { AffichagedataComponent } from './affichagedata/affichagedata.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FilterPokemonPipePipe,
    AffichagedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
      MatSlideToggleModule,
      HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    PokeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
