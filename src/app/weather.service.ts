import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    url = 'https://api.openweathermap.org/data/2.5/weather'
    apiKey = 'df2de3900e635249f5651233e62fd47c'

    constructor(private http: HttpClient) { }


getWeatherDataByCoords(lat: any, lon: any) {
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, { params });
}

getWeatherDataByZip(zip: any) {
    let params = new HttpParams()
    .set('zip', zip)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, { params });
}

}