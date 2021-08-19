import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'}
)
export class OpenweatherService {
  apiKEY: string = 'bc260df0c6e7454670d4c0d378b85022'
  apiURL: string = 'https://api.weatherbit.io/v2.0/current';

  constructor(private http: HttpClient) { }

  public getData(CityName: string): Observable<Object> {
    return this.http.get(this.apiURL+'?key='+this.apiKEY+'&city='+CityName);
  }

}