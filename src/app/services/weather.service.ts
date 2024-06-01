import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = '9e7a4b4369a8c17a324bb4e8910eca76';
  city = 'Sleman';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    return this.http.get(
      `${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`
    );
  }
  getForecast(): Observable<any> {
    return this.http.get(
      `${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`
    );
  }
}