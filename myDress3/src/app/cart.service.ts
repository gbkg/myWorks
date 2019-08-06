import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { clothsPar } from './classes';
import { ClothStockService } from './cloth-stock.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AauthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  favToCart: boolean;
  addCloths: clothsPar[];
  flagBarcode: boolean;
  isActive: boolean;

  clothsInCart: string[];
  clothsInFavorite: clothsPar[];

  addCart = {barcode: '', size: '', color: '', image: '', quantity: '', money: 0};
  cartArray: string[];
  refreshFlag:boolean;

  tempCart: string[];
  private _cartUrl = 'http://localhost:3000/user/cart/getCart'; //backend api url (login)

  constructor(
    private user: UserService,
    private stock: ClothStockService,
    private http: HttpClient,
    private _auth: AauthService,
  ) {
    this.favToCart = false;
    this.addCloths = new Array();
    this.flagBarcode = false;
    this.clothsInFavorite = new Array();

    this.clothsInCart = [];
    this.tempCart = [];

    this.cartArray = new Array();

    this.refreshFlag = false;

  }


  addToCart(color, size, barcode, pic, Qty, money) {
    if(this.refreshFlag){
      localStorage.setItem('cartArray', '');
    }
    this.user.tempAcc.setMyCart(color, size, barcode, pic, Qty, money);

    this.addCart.barcode = barcode;
    this.addCart.color = color;
    this.addCart.image = pic;
    this.addCart.size = size;
    this.addCart.quantity = Qty;
    this.addCart.money = money;

    var tempAdd = JSON.stringify(this.addCart);
    if(!this.refreshFlag){
    this.cartArray.push(tempAdd);
    }
    var myCartArray = JSON.stringify(this.cartArray);
    localStorage.setItem('cartArray', myCartArray);

  }

  additionCloth() {
    let barcodeExist = [];
    this.user.myCart();
    for (let i = 0; i < 3; i++) {
      let flagItemExist = false;
      this.stock.stock();
      let amountCloths = this.stock.clothStock.length;
      let randomNumb = Math.floor(Math.random() * amountCloths);

      for (let amount = 0; amount < this.user.tempCart.length; amount++) {
        let flagItemBarcode = false;
        if (this.clothsInCart.length == 0) {
          this.clothsInCart.push(this.user.tempCart[amount].getBarcode());
        } else {
          for (let i = 0; i < this.clothsInCart.length; i++) {
            if (this.clothsInCart[i] == this.user.tempCart[amount].getBarcode()) {
              flagItemBarcode = true;
              break;
            }
          }
          if (!flagItemBarcode) {
            this.clothsInCart.push(this.user.tempCart[amount].getBarcode());
            if (this.clothsInCart.length > this.stock.clothStock.length - 3) {
              i++;
            }
          }
        }
      }

      for (let k = 0; k < this.user.tempCart.length; k++) {
        if (this.user.tempCart[k].getBarcode() == this.stock.clothStock[randomNumb].getBarcode()) {
          flagItemExist = true;
          i--;

          for (let alert = 0; alert < barcodeExist.length; alert++) {
            if (barcodeExist[alert] == this.stock.clothStock[randomNumb].getBarcode()) {
              for (let alert2 = 0; alert2 < barcodeExist.length; alert2++) {
                this.flagBarcode = true;
              }
            }
          }

          break;
        }
      }


      if (this.addCloths.length && !flagItemExist) {
        for (let j = 0; j < this.addCloths.length; j++) {

          if (this.addCloths[j].getBarcode() == this.stock.clothStock[randomNumb].getBarcode()) {
            flagItemExist = true;
            i--;
            break;
          }
        }

      }

      if (!flagItemExist) {
        this.addCloths.push(this.stock.clothStock[randomNumb]);
      }

    }
  }



  checkFavorite(barcodeItem) {
    if (!this.clothsInFavorite.length) {
      localStorage.setItem('isActive', '');
      return false;
    } else {
      for (let i = 0; i < this.clothsInFavorite.length; i++) {
        if (barcodeItem == this.clothsInFavorite[i].getBarcode()) {
          localStorage.setItem('isActive', 'true');
          return true;
        }
      }
      localStorage.setItem('isActive', 'false');
      return false;
    }
  }

  addToFavorite(curentItem, barcodeItem) {
    let flag = true;
    if (this.clothsInFavorite.length && (localStorage.getItem('isActive') == 'true' || localStorage.getItem('isActive') == '')) {
      for (let i = 0; i < this.clothsInFavorite.length; i++) {
        if (barcodeItem == this.clothsInFavorite[i].getBarcode()) {
          localStorage.setItem('isActive', 'false');
          return false;
        }
      }
      if (flag) {
        this.clothsInFavorite.push(curentItem);
      }
      localStorage.setItem('isActive', 'true');
      return true;
    } else if (!this.clothsInFavorite.length && (localStorage.getItem('isActive') == 'true' || localStorage.getItem('isActive') == '')) {
      this.clothsInFavorite.push(curentItem);
      localStorage.setItem('isActive', 'true');
      return true;
    } else if (localStorage.getItem('isActive') == 'false') {
      for (let j = 0; j < this.clothsInFavorite.length; j++) {
        if (this.clothsInFavorite[j].getBarcode() == barcodeItem) {
          this.clothsInFavorite[j] = this.clothsInFavorite[this.clothsInFavorite.length - 1];
          this.clothsInFavorite.pop();
          localStorage.setItem('isActive', 'false');
          return false;
        }
      }
    }
  }


  removeFromFavorite(barcode) {
    for (let i = 0; i < this.clothsInFavorite.length; i++) {
      if (barcode == this.clothsInFavorite[i].getBarcode()) {
        this.clothsInFavorite[i] = this.clothsInFavorite[this.clothsInFavorite.length - 1];
        this.clothsInFavorite.pop();
      }
    }
  }



  refreshCart() {
    this.refreshFlag = true;
    this.user.tempAcc.zeroCart();
    
    let allCart = JSON.parse(localStorage.getItem('cartArray'));
    localStorage.setItem('cartArray','');
    for(let i=0; i < allCart.length; i++){
      this.addCart = JSON.parse(allCart[i]);
      this.addToCart(this.addCart.color, this.addCart.size, this.addCart.barcode, this.addCart.image, this.addCart.quantity, this.addCart.money);
    }

    this.refreshFlag = false;
    
  }

}
