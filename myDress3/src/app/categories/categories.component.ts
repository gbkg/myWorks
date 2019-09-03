import { Component, OnInit } from '@angular/core';
import { ClothStockService } from '../cloth-stock.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  dress: boolean;
  shoes: boolean;
  shirt: boolean;

  constructor(
    private cloth: ClothStockService,
    private user: UserService,
  ) { }

  ngOnInit() {
    this.dress = false;
    this.shirt = false;
    this.shoes = false;
  }

  selectItem(selected) {
    this.dress;
    this.cloth.clothSelect(selected);
  }

  filsterStat() {
    this.user.filter = false;
  }

  calibration() {
    this.dress = false;
    this.shirt = false;
    this.shoes = false;
    this.cloth.categories = [];
    this.cloth.categories.push('');
    this.selectItem('');
  }

}
