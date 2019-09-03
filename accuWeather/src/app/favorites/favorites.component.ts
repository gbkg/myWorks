import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.weather.arrayFavorites = JSON.parse(localStorage.getItem('favorites')); 
    this.weather.cityFlag = false;
  }


  removeFavorite(city){
    for(let i=0; i<this.weather.arrayFavorites.length; i++){
      if(city == this.weather.arrayFavorites[i]['city']){
        this.weather.arrayFavorites[i] = this.weather.arrayFavorites[this.weather.arrayFavorites.length-1];
        this.weather.arrayFavorites.pop();
        let tempFav = JSON.stringify(this.weather.arrayFavorites)
        localStorage.setItem('favorites', tempFav);
        return;
      }
    }
  }


  info(city){
    this.weather.city = city;
    this.weather.cityFlag = true;
    this.weather.pageFlag = true;
  }

}
