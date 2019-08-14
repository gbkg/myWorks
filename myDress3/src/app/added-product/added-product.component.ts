import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ConectionService } from '../connection.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-added-product',
  templateUrl: './added-product.component.html',
  styleUrls: ['./added-product.component.css']
})
export class AddedProductComponent implements OnInit {
  itemInfo = {barcode: '', color: '', size: '', price: 0, QTY: 0, total: 0, pic: ''};

  totItems: number;
  totSum: number;

  constructor(
    private user: UserService,
    private connect: ConectionService,
    private cart: CartService,
  ) { }

  ngOnInit() {   
    this.totSum = 0;
    this.itemInfo.barcode = this.user.tempAcc.getMyCart()[this.user.tempAcc.getMyCart().length - 1].getBarcode();
    this.itemInfo.color = this.user.tempAcc.getMyCart()[this.user.tempAcc.getMyCart().length - 1].getColor();
    this.itemInfo.size = this.user.tempAcc.getMyCart()[this.user.tempAcc.getMyCart().length - 1].getSize();
    this.itemInfo.price = this.user.tempAcc.getMyCart()[this.user.tempAcc.getMyCart().length - 1].getMoney();
    this.itemInfo.QTY = this.user.tempAcc.getMyCart()[this.user.tempAcc.getMyCart().length - 1].getQty();
    this.itemInfo.total = this.itemInfo.QTY * this.itemInfo.price; 
    this.itemInfo.pic = this.user.tempAcc.getMyCart()[this.user.tempAcc.getMyCart().length - 1].getPic();
debugger
    this.cart.calculateTot()
  }

  close(){
    this.connect.addedItem = false;
  }

  moveToCart(){
    this.connect.addedItem = false;
  }

}
