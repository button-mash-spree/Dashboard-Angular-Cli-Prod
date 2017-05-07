import { Injectable } from "@angular/core";

export interface ICity{
    _id : number;
    name : string;
    country : string;
    coord : Coord;
}

export interface Coord{
    lon : number;
    lat : number;
}