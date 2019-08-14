import { Component, OnInit, ElementRef } from '@angular/core';
import { ClothStockService } from '../cloth-stock.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  myColor:string;
  mySize:string;

  selectedSizes: string[];
  selectedClothPic: string[]
  slideIndex: number;
  picIndex: number[];

  qty:number;
  isActive:boolean;

  constructor(
    private cloth: ClothStockService,
    private elementRef: ElementRef,
    private cart: CartService,
  ) { }

  ngOnInit() {
    this.qty = 1;

    this.cloth.stock();
    if(localStorage.getItem('selectedItemBarcode') == '')
    localStorage.setItem('selectedItemBarcode', this.cloth.showDetailCloth.getBarcode());
    for(let i=0; i<this.cloth.clothStock.length; i++){
      if(localStorage.getItem('selectedItemBarcode') == this.cloth.clothStock[i].getBarcode()){
        this.cloth.showDetailCloth = this.cloth.clothStock[i];
        break;
      }
    }

    this.myColor = this.cloth.showDetailCloth.getColorCloth()[0].getColor();
    this.mySize = '';

    this.cloth.showDetailCloth.getPrice();
    this.selectedSizes = this.cloth.selectedItemSizes()[0];
    this.selectedClothPic = this.cloth.slectedItemPic()[0];


    if(this.cart.checkFavorite(this.cloth.showDetailCloth.getBarcode()) == true){
      this.isActive = true;
    }else{
      this.isActive = false;
    }

  }

  colorSelect(selectedColor){


    for(let i=0; i<this.cloth.showDetailCloth.getColorCloth().length; i++){
      if(selectedColor == this.cloth.showDetailCloth.getColorCloth()[i].getColor()){
        this.selectedSizes = this.cloth.selectedItemSizes()[i];
        this.selectedClothPic = this.cloth.slectedItemPic()[i];
      }
    }

    this.myColor = selectedColor;
  }

  sizeChoose(sizeChoose){
    this.mySize = sizeChoose;
  }



  currentDiv(n) {
    this.showDivs(this.slideIndex = n);
  }

  
  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " w3-opacity-off";
  }

  addToChart(){
    debugger
    this.cart.addToCart(this.myColor, this.mySize, this.cloth.showDetailCloth.getBarcode(), this.selectedClothPic[0], this.qty, this.cloth.showDetailCloth.getPrice());
  }

  add(add){
    this.qty += add;
    if(this.qty<1){
      this.qty=1;
    }
  }

  addToFavorite(){
    this.isActive = !this.isActive;
    if(this.isActive){
      localStorage.setItem('isActive', 'true');
    }
    else{
      localStorage.setItem('isActive', 'false');
    }
    this.cart.addToFavorite(this.cloth.showDetailCloth, this.cloth.showDetailCloth.getBarcode());
  }



}
