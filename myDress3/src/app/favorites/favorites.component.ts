import { Component, OnInit } from '@angular/core';
import { UserService }from '../user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  emptyFavorite:boolean;

  color:string;
  size:string;
  money:string;

  addFavToCart = {pic: '', size: '', color: ''};

  constructor(
    private user: UserService,
    private cart: CartService,
  ) { }

  ngOnInit() {
    if(this.cart.clothsInFavorite.length){
      this.emptyFavorite = true;
    }else{
      this.emptyFavorite = false;
    }
  }

  addCart(barcode, pic, Qty){
    for(let i=0; i<this.cart.clothsInFavorite.length; i++){
      if(barcode == this.cart.clothsInFavorite[i].getBarcode()){
        for(let j=0; j<this.cart.clothsInFavorite[i].getColorCloth().length; j++){
          if(this.color == this.cart.clothsInFavorite[i].getColorCloth()[j].getColor()){
            pic = this.cart.clothsInFavorite[i].getColorCloth()[j].getClothPic()[0];
          }
        }
      }
    }

    this.cart.addToCart(this.color, this.size, barcode, pic, Qty, this.money);
    this.cart.removeFromFavorite(barcode);
    this.ngOnInit();

    this.addFavToCart.color = this.color;
    this.addFavToCart.pic = pic;
    this.addFavToCart.size = this.size;
    this.cart.favToCart = true;
  }

  favoriteRemove(barcode){
    this.cart.removeFromFavorite(barcode);
  }

  verify(){
    debugger
    this.cart.favToCart = false;
  }

}
