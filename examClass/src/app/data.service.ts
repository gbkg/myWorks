import { Injectable } from '@angular/core';
import { Card , Person} from './classes'

@Injectable({
  providedIn: 'root'
})
export class DataService {


  account:Person;
  cards:Card[]=new Array();

  constructor() { }

  createCards():void{
    let value = 1;
    let jump = 0;
    for(let i=1;i<=52;i++,jump++){
      if(jump==4){
        value++;
        jump=0;
      }
      this.cards.push(new Card(value));
    }
 


  }
}
