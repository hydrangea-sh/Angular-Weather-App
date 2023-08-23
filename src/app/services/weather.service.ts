import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.
        XRapidAPIHostHeaderName)
      .set(environment.XRapidAPIKeyHeaderName, environment.
        XRapidAPIKeyHeaderValue),
        params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    })
  }
}

// This code defines an Angular service (WeatherService) responsible for fetching weather data using the HttpClient. 
// It exposes a function (getWeatherData) that returns an Observable representing the weather data for a specific city.
// The calling component will subscribe to this observable to receive and display the weather data when it's available.