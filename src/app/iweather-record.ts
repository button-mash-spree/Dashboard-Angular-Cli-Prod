import { Injectable } from '@angular/core';
import { ICity } from './icity';

export interface IWeatherObject{
    city : ICity;
    cod : string;
    message : string;
    cnt : string;
    list : IWeatherRecord[];
}

export interface IWeatherRecord{
    dt : number;
    dt_txt : string;
    main : IMainWeatherRecord;
    weather : IWeatherDescription[];
}

export interface IMainWeatherRecord{
    temp : number;
    temp_min : number;
    temp_max : number;
    pressure : number;
    sea_level : number;
    grnd_level : number;
    humidity : number;
    temp_kf : number;
}

export interface IWeatherDescription{
    id : number;
    main : string;
    description : string;
    icon : string;
}