import { Component, OnInit } from '@angular/core';
import { UserService }from '../user.service';
import { CartService } from '../cart.service';
import { ConectionService } from '../connection.service';
import { ClothStockService } from '../cloth-stock.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  emptyCart:boolean;
  emptyFavorite:boolean;
  totPrice:number;
  totItems:number;
  color:string;
  size:string;
  qty:number;
  pic:string;
  money:number;

  constructor(
    private user: UserService,
    private cart: CartService,
    private connect: ConectionService,
    private stock: ClothStockService,
  ) { }

  ngOnInit() {
debugger
    if(localStorage.getItem('cartArray')){
    this.cart.refreshCart();
    }

    this.qty = 0;
    this.totPrice = 0;
    this.totItems = 0;
    this.user.myCart();
    if(this.user.tempAcc.getMyCart().length == 0){
      this.emptyCart = false;
    }else{
      this.emptyCart = true;
      let x = this.user.tempAcc.getMyCart();
      for(let i=0; i<this.user.tempAcc.getMyCart().length; i++){
        this.totPrice += (this.user.tempAcc.getMyCart()[i].getMoney() * this.user.tempAcc.getMyCart()[i].getQty());
        this.totItems += this.user.tempAcc.getMyCart()[i].getQty();
      }
    }

    if(this.cart.clothsInFavorite.length){
      this.emptyFavorite = true;
    }else{
      this.emptyFavorite = false;
    }


    this.cart.addCloths = [];

    this.cart.additionCloth();



  }

  itemSelect(item){
    this.stock.showDetailCloth = item;
    this.connect.pageMove('pDetail');
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
  }

  refresh(){
    this.ngOnInit();
  }

  description(selectedItem){
    this.stock.showDetailCloth = selectedItem;
    this.connect.pageMove('pDetail');
  }

  remove(barcode){
    debugger
    for(let i=0; i<this.cart.cartArray.length; i++){
      let temp =JSON.parse(this.cart.cartArray[i]);
      if(temp.barcode == barcode){
        this.cart.cartArray[i] = this.cart.cartArray[this.cart.cartArray.length-1];
        this.cart.cartArray.pop();
      }
    }


    for(let i=0; i<this.user.tempAcc.getMyCart().length; i++){
      if(this.user.tempAcc.getMyCart()[i].getBarcode() == barcode){
        this.user.tempAcc.getMyCart()[i] = this.user.tempAcc.getMyCart()[this.user.tempAcc.getMyCart().length-1];
        this.user.tempAcc.getMyCart().pop();
        let cart = JSON.stringify(this.user.tempAcc.getMyCart());
        localStorage.setItem('cartArray', cart);
        return;
      }
    }
  }


}


