import { Injectable } from '@angular/core';
import { product, worker } from './classes';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  worker1: worker[]=new Array;
  worker2: worker[]=new Array;

  arrMyProducts: product[]=new Array;
  tempArrProducts: product[]=new Array;

  signed:boolean;
  mainP:boolean;
  login:boolean;
  manager:boolean;

  constructor() { }

    arrProducts(){
      this.arrMyProducts.push(new product(11122, 'Green box', false));
      this.arrMyProducts.push(new product(22554, 'Green box', false));
      this.arrMyProducts.push(new product(66698, 'blue box', true));
      this.arrMyProducts.push(new product(78544, 'red box', false));
      this.arrMyProducts.push(new product(69875, 'red box', false));
    }

}
