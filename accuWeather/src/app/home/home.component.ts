import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadingP:boolean;

  temperatur: string;
  farTemperature: number;
  weatherText: string;  //description weather
  city: string;
  windSpeed: string;

  daysArray: any[]; //arrays of 5 days date

  dayTemperatur: string[]; // temperatures for 5 days

  favoritesArray: string;
  myFav:boolean;

  temperatureToggle: boolean; // toggles between Fahrenheit and celsius


  constructor(
    private weather: WeatherService,
  ) { }

  ngOnInit() {
    this.loadingP = false;

    this.weather.falseLocationFlag = false;
    this.daysArray = [];
    if(this.weather.cityFlag == false){
    this.weather.city = 'tel aviv';
    };
    if(localStorage.getItem('favorites')){
      this.favoritesArray = JSON.parse(localStorage.getItem('favorites'));
      }else{this.favoritesArray = ''};
    this.getLocation();
    this.weatherText = '';
    this.myFav = false;
    this.temperatur='';
    this.farTemperature = 0;
    
    this.windSpeed = '';

    if(this.favoritesArray.length){
    for(let i=0; i<this.favoritesArray.length; i++){
    if(this.favoritesArray[i]['city'] == this.weather.city){
      this.myFav = true;
    }else{this.myFav = false;}
  }
  }

  this.temperatureToggle = false;

  }

  getLocation(){
    this.daysArray = [];
    this.weather.falseLocationFlag = false;
    this.weather.location(this.weather.city)
    .subscribe(
      res => {
        var temp = res[0].Key;
      }
    )

    this.weather.weather(this.weather.city)
    .subscribe(
      res => {
        this.temperatur = res[0].RealFeelTemperature.Metric.Value;
        this.farTemperature = parseInt(this.temperatur) * 9 / 5;
        this.farTemperature = parseFloat(this.farTemperature.toFixed(1));
        this.windSpeed = res[0].Wind.Speed.Metric.Value;
        this.weatherText = res[0].WeatherText;
      }
    )


    this.weather.fiveDayWeather(this.weather.city)
    .subscribe(
      res => {
        for(let i=0; i<res["DailyForecasts"].length; i++){
        let tempDay = res["DailyForecasts"][i].Date; //real date
        let tempTemperatur = res["DailyForecasts"][i].Temperature.Maximum.Value;
        let tempFahrenheitTemp = (tempTemperatur * 9 / 5).toFixed(1);
        tempDay = tempDay.slice(0, 10); //sliced date

          

        let myDay = this.weather.createDay(tempDay);
        
        let myDate = this.weather.createDate(tempDay);

        let myWeather = { day: myDay, date: myDate, temperatur: tempTemperatur, fahrenheitTemp: tempFahrenheitTemp};
        this.daysArray.push(myWeather);
        }
        
      }
    )
      localStorage.setItem('city', this.weather.city);
      if(this.favoritesArray.length){
      if(this.favoritesArray[0]['city'] == this.weather.city){
        this.myFav = true;
      }else{this.myFav = false;}
    }
    //this.flag = true;
  }

  addToFavorite(){
    this.weather.enterFavorite(this.weather.city, this.temperatur, this.windSpeed);
  }

  changeUnit(){
    this.temperatureToggle = !this.temperatureToggle;
    this.loadingP = false;
  }

  loading(){
    this.loadingP = true;
    setTimeout(() => { this.changeUnit(); }, 2000);
  }

}
