import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _locationUrl = '';
  private _weatherUrl = '';
  private _fiveDayWeatherUrl = '';

  arrayFavorites = [];

  pageFlag: boolean;
  falseLocationFlag: boolean;

  city: string;
  cityFlag: boolean;

  constructor(private http: HttpClient) {
    this.falseLocationFlag = false;
    this.cityFlag = false;
   }


  location(city){
    if(city == 'tel aviv'){
      this._locationUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&q=tel%20aviv&language=en-us';
    }

    else if(city == 'amsterdam'){
      this._locationUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&q=amsterdam&language=en-us';
    }

    else if(city == 'paris'){
      this._locationUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&q=paris&language=en-us';
    }

    else{
      this.falseLocationFlag = true;
    }
    return this.http.get(this._locationUrl);
  }

  weather(city){
    if(city == 'tel aviv'){
      this._weatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1/215793?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=true';
    }

    if(city == 'amsterdam'){
      this._weatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1/249758?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=true';
    }

    if(city == 'paris'){
      this._weatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1/623?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=true';
    }

    return this.http.get(this._weatherUrl);
  }


  fiveDayWeather(city){
    if(city == 'tel aviv'){
      this._fiveDayWeatherUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/215793?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=false&metric=true';
    }

    if(city == 'amsterdam'){
      this._fiveDayWeatherUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/249758?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=false&metric=true';
    }

    if(city == 'paris'){
      this._fiveDayWeatherUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/623?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=false&metric=true';
    }

    return this.http.get(this._fiveDayWeatherUrl);
  }

  enterFavorite(city, temperature, claudes){
    let pushFlag = true;
    for(let i=0; i<this.arrayFavorites.length; i++){
      if(this.arrayFavorites[i].city == city){
        this.arrayFavorites[i] = this.arrayFavorites[this.arrayFavorites.length-1];
        this.arrayFavorites.pop();
        let array = JSON.stringify(this.arrayFavorites);
        localStorage.setItem('favorites', array);
        pushFlag = false;
      }
    }if(pushFlag == true){
    let myFavorite = { city: city, temperature: temperature, cloudes: claudes};
    this.arrayFavorites.push(myFavorite);
    let array = JSON.stringify(this.arrayFavorites);
    localStorage.setItem('favorites', array);
    }
  }

  restorePage(){
    if(localStorage.getItem('page'))
    this.pageFlag = JSON.parse(localStorage.getItem('page'));
  }


  createDay(newDate){
    let date: Date = new Date(newDate);
    let dayNumber = date.getDay();
    if(dayNumber == 0){
      return 'Sunday';
    }

    if(dayNumber == 1){
      return 'Monday';
    }

    if(dayNumber == 2){
      return 'Tuesday';
    }

    if(dayNumber == 3){
      return 'Wednesday';
    }

    if(dayNumber == 4){
      return 'Thursday';
    }

    if(dayNumber == 5){
      return 'Friday';
    }

    if(dayNumber == 6){
      return 'Saturday';
    }
  }

  createDate(newDate){
    let date: Date = new Date(newDate);
    let month = date.getMonth()  + 1;
    let myDate = date.getDate() + '/' + month + '/' +date.getFullYear();
    return myDate;
  }
}
