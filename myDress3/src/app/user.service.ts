import { Injectable } from '@angular/core';
import { account, clothsPar } from './classes';
import { ConectionService } from './connection.service';
import { ClothStockService } from './cloth-stock.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  filter:boolean;

  tempAcc: account;
  tempCart: clothsPar[];

  errFName:boolean;
  errLName:boolean;
  errEmail:boolean;
  errPass1:boolean;
  errPassMatch:boolean;
  errLengthPass:boolean;
  errChecked: boolean;


  fbLoged:boolean;

  checked: boolean;

  constructor(
    private connect: ConectionService,
    private stock: ClothStockService,
  ) {
    this.errChecked = true;
    this.checked = false;

    this.filter = true;

    this.tempAcc = new account('', '', '', '');


    this.fbLoged = false;

    this.errFName = false;
    this.errLName = false;
    this.errEmail = false;
    this.errPass1 = false;
    this.errPassMatch = false;
    this.errLengthPass = false;

    this.tempCart = new Array();
   }

   sub(fName, lName, Email, pass1, pass2){
    this.errFName = false;
    this.errLName = false;
    this.errEmail = false;
    this.errPass1 = false;
    this.errPassMatch = false;
    if(fName == ''){
      this.errFName = true;
    }

    else if(lName == ''){
      this.errLName = true;
    }

    else if(Email == ''){
      this.errEmail = true;
    }

    else if(pass1 == '' || pass2 == ''){
      this.errPass1 = true;
    }

    else if(pass1 != pass2){
      this.errPassMatch = true;
    }

    else if(pass1.length<6){
      this.errLengthPass = true;
    }

    else if(this.checked){
      this.tempAcc.setFName(fName);
      this.tempAcc.setLName(lName);
      this.tempAcc.setEmail(Email);
      this.tempAcc.setPass(pass1);
      localStorage.setItem('email', Email)
      localStorage.setItem('FirstName', fName)
      localStorage.setItem('LastName', lName)
      if(this.tempAcc.getShape().getSkinColor() != undefined){
        this.connect.pageMove('clothVar');
      }else{this.connect.pageMove('measurment')}
      this.fbLoged = true;
      localStorage.setItem('pic', 'assets/icons/connectIcon.jpg');
    }
   }

   restoreAcc(){
    this.tempAcc.setEmail(localStorage.getItem('email'));
    this.tempAcc.setFName(localStorage.getItem('FirstName'));
    this.tempAcc.setLName(localStorage.getItem('LastName'));

    /* 
    if(localStorage.getItem('pic')){
      this.loged = false;
      this.fbLoged = true;
    }else if(!localStorage.getItem('pic') && localStorage.getItem('email')){
      this.loged = true;
      this.fbLoged = false;
    }else{
      this.loged = false;
      this.fbLoged = false;
    }
    */

   }


   myCart(){
    this.tempCart = [];
    for(let i=0; i<this.tempAcc.getMyCart().length; i++){
      for(let j=0; j<this.stock.clothStock.length; j++){
        if(this.tempAcc.getMyCart()[i].getBarcode() == this.stock.clothStock[j].getBarcode()){
          this.tempCart.push(new clothsPar(this.stock.clothStock[j].getBodyType(), this.stock.clothStock[j].getSeason(), this.stock.clothStock[j].getType(), this.stock.clothStock[j].getPrice(), this.stock.clothStock[j].getBarcode()));
          this.tempCart[this.tempCart.length-1].getMyCart().setColor(this.tempAcc.getMyCart()[i].getColor());
          this.tempCart[this.tempCart.length-1].getMyCart().setSize(this.tempAcc.getMyCart()[i].getSize());
          this.tempCart[this.tempCart.length-1].getMyCart().setPic(this.tempAcc.getMyCart()[i].getPic());
          this.tempCart[this.tempCart.length-1].getMyCart().setQty(this.tempAcc.getMyCart()[i].getQty());
        }
      }
    }
   }


   Logout(){
    this.fbLoged = false;
    localStorage.clear();
    this.connect.pageMove('enterence')
  }



}
