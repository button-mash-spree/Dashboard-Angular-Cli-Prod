import { Component, OnInit } from '@angular/core';
import { ICity } from './icity';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather-component/weather-component.component';
import { TodoComponent } from './todo-component/todo-component.component';
import { CitiesListComponent } from './cities-list/cities-list.component';

@Component({
    selector: 'dashboard',
    template: `<div style='height: 100vh'>
                    <div style='height: 15vh'>&nbsp;</div>
                        <clock></clock>
                        <div style="width: 35vw;float: left">
                            <citiesList (EmitCity)="InitWeather($event)"></citiesList>
                            <weather [targetCity] = "currentCity"></weather>
                            <todo></todo>
                        <div>
                    <div style='height: 15vh'>&nbsp;</div>
                </div>`,
    entryComponents: [ClockComponent, CitiesListComponent, WeatherComponent, TodoComponent]
})
export class AppComponent{

    currentCity : ICity;

    InitWeather(city:ICity){
        this.currentCity = city;
    }
}