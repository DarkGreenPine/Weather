import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  WeatherData:any;
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(26508);
    console.log(this.WeatherData)
  }

  getWeatherData(zip: any) {
    this.weatherService.getWeatherDataByZip(zip).subscribe(data=>{
      this.WeatherData = data;
      this.setWeatherData(data);
    })
  }

  setWeatherData(data: Object) {
    this.WeatherData=data;
    let sunsetTime=new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like).toFixed(0);

  }

  getZip(zip: any) {
    this.getWeatherData(zip);
  }

}
