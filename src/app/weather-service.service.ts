import { Injectable } from '@angular/core';
import { IWeatherRecord } from './iweather-record';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService{
    key = "25c948162ab81a7a7c76bb1a5c9bbcde";
    cityId : string;
    url(){
        return "http://api.openweathermap.org/data/2.5/forecast?id=" 
        + (this.cityId) 
            + "&APPID=" 
                + (this.key) 
                    + "&units=metric";
    }

    constructor(private _http : Http){}
    GetWeather(cityId : number){
        this.cityId = cityId.toString();
        return this._http.get(this.url()).map((response:Response)=>response.json())
    }
}