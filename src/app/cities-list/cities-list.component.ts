import { Component, Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { CitiesProvider } from './../cities-provider.service';
import { ICity } from './../icity';

@Component({
    selector: 'citiesList',
    template: `<div align = 'center' class="select-style" >
                    <select (change)="onCityChange($event.target.value)" style="width: 30vw">
                        <option value="" disabled selected>Select city for weather status</option>
                        <option *ngFor="let city of cities">{{city.name}}</option>
                    </select>
               </div>`
})

@Injectable()
export class CitiesListComponent implements OnInit{
    cities : ICity[];

    @Output() EmitCity = new EventEmitter<ICity>();

    public targetCity : ICity;

    constructor(private _cityProvider : CitiesProvider){}
    ngOnInit(){
        this._cityProvider.getCities()
            .subscribe(resCitiesData => this.cities = resCitiesData);
    }

    onCityChange(cityName : string) {
        this.updateTargetCity(cityName);
        this.EmitCity.emit(this.targetCity);
    }

    updateTargetCity(name : string){
        this.targetCity = this.cities.find(city => city.name == name);
    }
}