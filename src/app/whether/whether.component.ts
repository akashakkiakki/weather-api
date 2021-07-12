import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent implements OnInit {

  

 
  WeatherData : any;


  constructor(
    private http: HttpClient){
  
  }
  
  ngOnInit(){
    this.getWeatherData();
    console.log(this.WeatherData);
    
  }
  getWeatherData(){
    let data = JSON.parse('{"coord":{"lon":77.2,"lat":29.4},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":307.55,"feels_like":311.73,"temp_min":307.55,"temp_max":307.55,"pressure":1005,"humidity":48,"sea_level":1005,"grnd_level":979},"visibility":10000,"wind":{"speed":7.77,"deg":134,"gust":9.52},"clouds":{"all":49},"dt":1626064935,"sys":{"country":"IN","sunrise":1626047989,"sunset":1626098003},"timezone":19800,"id":1268601,"name":"Kairana","cod":200}');
    this.setWeatherData(data);
  }

  setWeatherData(data: any){
    this.WeatherData=data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime() );
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.5).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.5).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.5).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.5).toFixed(0);

  }
}

