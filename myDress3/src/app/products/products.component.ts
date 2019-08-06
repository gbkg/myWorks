import { Component, OnInit } from '@angular/core';
import { ClothStockService } from '../cloth-stock.service';
import { ConectionService } from '../connection.service';
import { clothsPar } from '../classes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isActive:boolean;

  constructor(
    private stock: ClothStockService,
    private conect: ConectionService,
    private cart: CartService,
  ) { }

  ngOnInit() {
    this.isActive = false;
    this.stock.stock();
    this.stock.choosenCloth = this.stock.clothStock;
    this.stock.showCloth();

  }

  description(selectedItem){
    this.stock.showDetailCloth = selectedItem;
    this.conect.pageMove('pDetail');
  }



}
