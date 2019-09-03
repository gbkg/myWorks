import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  page:string;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.weather.pageFlag = true;

    this.weather.restorePage();
  }

  pageChange(page){
    if(page == 0){
      this.weather.pageFlag = true;
    }else{this.weather.pageFlag = false;}
    localStorage.set('page', JSON.stringify(this.weather.pageFlag));

  }

}
