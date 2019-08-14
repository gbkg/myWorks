import { Injectable } from '@angular/core';
import { coin, exchangeList } from './classes';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  arrCoins:coin[]=new Array;
  arrExList:exchangeList[]=new Array;
  
  newValue:number;
  arrCoinsLength:number=0;

  constructor() { }

  myCoins(){
    this.arrCoins.push(new coin("DOLLAR",4));
    this.arrCoins.push(new coin("EURO",5));
    this.arrCoins.push(new coin("SHEKEL",1));
  }

}
