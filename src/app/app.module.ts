import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { ClockComponent } from './clock/clock.component';
import { TodoComponent } from './todo-component/todo-component.component';
import { WeatherComponent } from './weather-component/weather-component.component';

import { WeatherService } from './weather-service.service';
import { TodosService } from './todos-service.service';
import { CitiesProvider } from './cities-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    ClockComponent,
    TodoComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CitiesProvider, WeatherService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
