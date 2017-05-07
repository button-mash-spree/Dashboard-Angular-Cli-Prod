import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CitiesProvider{

    private url : string = "http://api.myjson.com/bins/17tbd5"
    constructor(private _http : Http){}
    getCities() {
        return this._http.get(this.url).map((response:Response)=>response.json())
    }
}