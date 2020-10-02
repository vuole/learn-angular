import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  txtCityName = '';
  cityName = '';
  temp = 0;
  isLoading = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }

  getWeather() {
    this.isLoading = true;
    this.weatherService.getTemp(this.txtCityName)
      .subscribe(temp => {
        let d: any = temp;
        this.temp = d.main.temp;
        this.cityName = this.txtCityName;
        this.isLoading = false;
        this.txtCityName = '';
      },
        (err) => {
          alert('Cannot find your city!');
          this.isLoading = false;
          this.cityName = '';
          this.txtCityName = '';
        });
  }

  getMessage() {
    if (this.isLoading) {
      return 'Loading...';
    }
    return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp);
  }
}
